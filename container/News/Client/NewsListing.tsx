import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Box, Button, Container, Grid, Link } from "@mui/material";

import { CardItem } from "components";
import TitleLine from "components/TitleLine/TitleLine";
import {
  IPage,
  NEW_DETAIL_ITEMS,
  NEW_LISTING_ITEMS,
  responseSchema,
} from "interface";
import ROUTES from "routes";
import useSWR from "swr";
import Skeleton from "react-loading-skeleton";

export type NewsProps = IPage<
  [responseSchema<NEW_LISTING_ITEMS>, responseSchema<NEW_DETAIL_ITEMS>]
>;

export default function NewsListing(props: NewsProps) {
  const { initData } = props;
  const dataListing = initData[0].items;
  const dataCategories = initData[1].items;
  const nextCatergories = initData[1].next;

  const [data, setData] = useState(dataCategories);
  const [isFetch, setIsFetch] = useState(true);
  const [nextPost, setNextPost] = useState(nextCatergories);

  const { data: resData, isLoading, isValidating } = useSWR(nextPost);

  useEffect(() => {
    if (isFetch) {
      if (resData == undefined) {
        return;
      }
      const items = resData.items;

      setData((el) => {
        return [...el, ...items];
      });
      setIsFetch(false);
    }
  }, [resData, isFetch]);

  const handlePost = useCallback(() => {
    if (resData == undefined) {
      return;
    }
    const next = resData.next;
    setNextPost(next);
    setIsFetch(true);
  }, [resData]);

  return (
    <Container>
      <Grid container marginBottom="5rem">
        <Grid item xs={12} marginBottom="2rem">
          {/* <TitleLine title={dataListing[0].title} /> */}
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={4}>
            {data.map((el: NEW_DETAIL_ITEMS, idx) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={idx}>
                  <Link
                    href={`/${ROUTES.news}/${el.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <CardItem data={el} />
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        {/* <Grid item xs={12}>
          {isLoading && (
            <Grid container>
              <Grid item xs={4}>
                <Skeleton count={4} />
              </Grid>
              <Grid item xs={4}>
                <Skeleton count={4} />
              </Grid>
              <Grid item xs={4}>
                <Skeleton count={4} />
              </Grid>
            </Grid>
          )}
        </Grid> */}

        <Grid item xs={12} textAlign="center">
          {isLoading && (
            <Grid container>
              <Grid item xs={4}>
                <Skeleton count={4} />
              </Grid>
              <Grid item xs={4}>
                <Skeleton count={4} />
              </Grid>
              <Grid item xs={4}>
                <Skeleton count={4} />
              </Grid>
            </Grid>
          )}

          <Button
            variant="contained"
            onClick={handlePost}
            sx={{ display: nextPost ? "block" : "none", margin: "0 auto" }}
          >
            Xem Thêm
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

// import React, { useCallback, useEffect, useMemo, useState } from "react";
// import { Button, Container, Grid, Link } from "@mui/material";

// import { CardItem } from "components";
// import TitleLine from "components/TitleLine/TitleLine";
// import {
//   IPage,
//   NEW_DETAIL_ITEMS,
//   NEW_LISTING_ITEMS,
//   responseSchema,
// } from "interface";
// import ROUTES from "routes";
// import useSWR from "swr";
// import Skeleton from "react-loading-skeleton";

// export type NewsProps = IPage<
//   [responseSchema<NEW_LISTING_ITEMS>, responseSchema<NEW_DETAIL_ITEMS>]
// >;

// export default function NewsListing(props: NewsProps) {
//   const { initData } = props;
//   const dataListing = initData[0].items;
//   const dataCategories = initData[1].items;
//   const nextCatergories = initData[1].next;

//   const [data, setData] = useState(dataCategories);
//   const [isFetch, setIsFetch] = useState(false);
//   const [nextPost, setNextPost] = useState(nextCatergories);

//   const { data: resData, isLoading, isValidating } = useSWR(nextPost);

//   useEffect(() => {
//     if (isFetch) {
//       if (!resData) {
//         return;
//       }
//       const next = resData.next;
//       const items = resData.items;

//       const mergeDataFetch: NEW_DETAIL_ITEMS[] = [];
//       items.forEach((el: NEW_DETAIL_ITEMS) => {
//         mergeDataFetch.push(el);
//       });

//       setNextPost(next);
//       setData(data.concat(mergeDataFetch));
//       setIsFetch(false);
//     }
//   }, [resData, isFetch]);

//   const handlePost = useCallback(() => {
//     setIsFetch(true);
//   }, []);

//   // const renderNewsCategories = useMemo(() => {
//   //   return data.map((el: NEW_DETAIL_ITEMS, idx) => {
//   //     return (
//   //       <Grid item xs={12} sm={6} md={4} key={idx}>

//   //         <Link
//   //           href={`/${ROUTES.news}/${el.id}`}
//   //           style={{ textDecoration: "none" }}
//   //         >
//   //           <CardItem data={el} />
//   //         </Link>
//   //       </Grid>
//   //     );
//   //   });
//   // }, [data]);

//   return (
//     <Container>
//       <Grid container marginBottom="5rem">
//         <Grid item xs={12} marginBottom="2rem">
//           {/* <TitleLine title={dataListing[0].title} /> */}
//         </Grid>

//         <Grid item xs={12}>
//           <Grid container spacing={4}>
//             {data.map((el: NEW_DETAIL_ITEMS, idx) => {
//               return (
//                 <Grid item xs={12} sm={6} md={4} key={idx}>
//                   <Link
//                     href={`/${ROUTES.news}/${el.id}`}
//                     style={{ textDecoration: "none" }}
//                   >
//                     <CardItem data={el} />
//                   </Link>
//                 </Grid>
//               );
//             })}
//           </Grid>
//         </Grid>

//         <section className="section">
//           {isLoading && (
//             <Grid container>
//               <Grid item xs={4}>
//                 <Skeleton count={4} />
//               </Grid>
//               <Grid item xs={4}>
//                 <Skeleton count={4} />
//               </Grid>
//               <Grid item xs={4}>
//                 <Skeleton count={4} />
//               </Grid>
//             </Grid>
//           )}
//         </section>

//         <Grid item xs={12} textAlign="center">
//           <Button
//             variant="contained"
//             onClick={handlePost}
//             sx={{ display: nextPost ? "block" : "none", margin: "0 auto" }}
//           >
//             Xem Thêm
//           </Button>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }
