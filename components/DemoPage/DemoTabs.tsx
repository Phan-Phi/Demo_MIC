import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { Box, Tab, Typography } from "@mui/material";
import React, { useCallback, useMemo, useState } from "react";

const arrayTab = [
  { id: "0", title: "xin chao" },
  { id: "1", title: "xin chao1" },
  { id: "2", title: "xin chao2" },
];
const arrayPanel = [
  { id: "0", title: "xin chao" },
  { id: "1", title: "xin chao1" },
  { id: "2", title: "xin chao2" },
];

const arrayItemPanel = [{ name: "hi" }, { name: "hi1" }, { name: "hi2" }];

export default function DemoTabs() {
  const [value, setValue] = useState("0");

  const renderTab = useMemo(() => {
    return arrayTab.map((el, idx) => {
      return <Tab label={el.title} value={el.id} />;
    });
  }, [arrayTab]);

  const renderTabPanel = useCallback(() => {
    return arrayPanel.map((el, idx) => {
      return <Typography>{el.name}</Typography>;
    });
  }, [arrayPanel]);

  const handleChange = useCallback(
    (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    },
    [value]
  );

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {renderTab}
          </TabList>
        </Box>
        <Box>
          <TabPanel value={value}>{value}</TabPanel>
        </Box>
      </TabContext>
    </Box>
  );
}
