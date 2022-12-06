import { Tab, Tabs as MuiTabs, useTheme } from "@mui/material";
import { PRODUCT_CATEGORIES_ITEMS } from "interface/responseSchema/product";
import React, { useMemo } from "react";

type TabsProps = {
  data: PRODUCT_CATEGORIES_ITEMS[];
  currentTabs: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
};

export default function Tabs(props: TabsProps) {
  const theme = useTheme();
  const { data, currentTabs, onChange } = props;

  const renderTab = useMemo(() => {
    return data.map((el, idx) => {
      return <Tab label={el.title} key={idx} value={el.id} />;
    });
  }, []);

  return (
    <MuiTabs
      value={currentTabs}
      onChange={onChange}
      sx={{
        [theme.breakpoints.down("sm")]: {
          overflowX: "scroll",
          "& .MuiTabs-flexContainer": {
            justifyContent: "unset",
            gap: "1rem",
          },
        },
      }}
    >
      {renderTab}
    </MuiTabs>
  );
}
