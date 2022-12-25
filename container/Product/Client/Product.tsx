import useSWR from "swr";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Box, Button, Container, Divider, Grid } from "@mui/material";

import CardProduct from "components/Card/CardProduct";
import TabPanel from "components/Tabs/TabPanel";
import Tabs from "components/Tabs/Tabs";
import { IPage, responseSchema } from "interface";

import {
  PRODUCT_CATEGORIES_ITEMS,
  PRODUCT_DETAIL_ITEMS,
  PRODUCT_LISTING_ITEMS,
} from "interface/responseSchema/product";
import ROUTES from "routes";
import { BLOG } from "constant";
import { useParams } from "hook/useParams";
import { PAGES_API, TYPE_PARAMS } from "apis";
import { transformUrl } from "libs/transformUrl";

export type ProductProps = IPage<
  [
    responseSchema<PRODUCT_LISTING_ITEMS>,
    responseSchema<PRODUCT_CATEGORIES_ITEMS>,
    responseSchema<PRODUCT_DETAIL_ITEMS>
  ]
>;

const itemAll = {
  id: 0,
  title: "Tất cả",
};

export default function Product(props: ProductProps) {
  const { initData } = props;
  const dataListing = initData[0].items;
  const dataCategories = initData[1].items;
  const dataDetail = initData[2].items;

  const router = useRouter();

  const [currentTabs, setCurrentTabs] = useState<number>(0);
  const [dataTabpanel, setDataTabPanel] = useState(dataDetail);

  const [params, setParams] = useParams({
    initState: {
      fields: "*",
      type: TYPE_PARAMS["product.ProductDetailPage"],
      locale: router.locale,
      limit: BLOG.BLOG_PRODUCT,
    },
    excludeKeys: ["limit", "offset", "type", "search"],
  });
  const { data, isLoading } = useSWR(transformUrl(PAGES_API, params));

  useEffect(() => {
    if (!data) {
      return;
    }
    setDataTabPanel(data.items);
  }, [data]);

  useEffect(() => {
    if (router.query.search == undefined) {
      return;
    } else {
      setParams({
        child_of: undefined,
        search: router.query.search,
      });
    }
  }, [router]);

  useEffect(() => {
    if (router.query.child_of == undefined) {
      setCurrentTabs(0);
      setParams({
        child_of: undefined,
      });
    } else {
      setCurrentTabs(Number(router.query.child_of));
      setParams({
        child_of: router.query.child_of,
        search: undefined,
      });
    }
  }, [router]);

  const handleChange = useCallback(
    (event: React.SyntheticEvent, newValue: number) => {
      setCurrentTabs(newValue);

      if (newValue == 0) {
        setParams({
          child_of: undefined,
        });
      } else {
        setParams({
          child_of: newValue,
          search: undefined,
        });
      }
    },
    [currentTabs]
  );

  const renderTabs = useMemo(() => {
    if (!dataCategories) {
      return null;
    }

    const mergeDataTabs = [itemAll, ...dataCategories];

    return (
      <Tabs
        data={mergeDataTabs}
        currentTabs={currentTabs}
        onChange={handleChange}
      />
    );
  }, [currentTabs, dataCategories]);

  const renderTabPanel = useMemo(() => {
    if (dataTabpanel == undefined) {
      return null;
    }
    if (isLoading) return <Box>asdasdasdas</Box>;
    return (
      <TabPanel value={currentTabs} index={currentTabs}>
        <Grid container spacing={3}>
          {dataTabpanel.map((el, idx) => {
            return (
              <Grid key={idx} item xs={12} sm={6} md={3}>
                <Link
                  href={`/${ROUTES.product}/${el.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <CardProduct data={el} />
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </TabPanel>
    );
  }, [dataTabpanel, currentTabs, isLoading]);

  return (
    <Container>
      <Grid container margin="4rem 0">
        <Grid item xs={12}></Grid>

        <Grid item xs={12}>
          {renderTabs}

          <Divider />
        </Grid>

        <Grid item xs={12} marginTop="2rem">
          {renderTabPanel}
        </Grid>

        <Grid item xs={12} marginTop="2rem" textAlign="center">
          <Button variant="contained">Xem thêm</Button>
        </Grid>
      </Grid>
    </Container>
  );
}
