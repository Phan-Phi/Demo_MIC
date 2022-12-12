// import {
//   Box,
//   Button,
//   ButtonBase,
//   Container,
//   Grid,
//   keyframes,
//   Tab,
//   Tabs,
//   Typography,
// } from "@mui/material";
// import DemoFormControl from "components/DemoInput/DemoFormControl";
// import DemoFetch from "components/DemoPage/DemoFetch";
// import DemoTabs from "components/DemoPage/DemoTabs";
// import TitleLine from "components/TitleLine/TitleLine";
// import React from "react";
// import { useForm } from "react-hook-form";

// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

// function TabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// function a11yProps(index: number) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

// export default function DemoContact() {
//   const { handleSubmit, control } = useForm();

//   const spin = keyframes`
//       from { transform: translate(0,  0px); }
//       65%  { transform: translate(0, 10px); }
//       to   { transform: translate(0, -0px); }
//   `;
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };
//   return (
//     // <DemoTabs />
//     <DemoFetch />
//     // <Container maxWidth="lg">
//     //   <Box component="form">
//     //     <Grid container>
//     //       <Grid item xs={12}>
//     //         <TitleLine />
//     //       </Grid>
//     //       <Grid item xs={12}>
//     //         <DemoFormControl
//     //           control={control}
//     //           name="name"
//     //           label="Tên Quán"
//     //           placeholder="Tên quán"
//     //         />
//     //       </Grid>
//     //       <Grid item xs={12}>
//     //         <DemoFormControl
//     //           control={control}
//     //           name="name"
//     //           label="Người đại diện"
//     //           placeholder="Người đại diện"
//     //         />
//     //       </Grid>
//     //       <Grid item xs={12}>
//     //         <DemoFormControl
//     //           control={control}
//     //           name="name"
//     //           label="Số điện thoại"
//     //           placeholder="Số điện thoại"
//     //         />
//     //       </Grid>
//     //       <Grid item xs={12}>
//     //         <DemoFormControl
//     //           control={control}
//     //           name="name"
//     //           label="Email"
//     //           placeholder="Nhập Email"
//     //         />
//     //       </Grid>
//     //       <Grid item xs={12}>
//     //         <DemoFormControl
//     //           control={control}
//     //           name="name"
//     //           label="Số tài khoản ngân hàng"
//     //           placeholder="Số tài khoản ngân hàng"
//     //         />
//     //       </Grid>
//     //       <Grid item xs={12}>
//     //         <DemoFormControl
//     //           control={control}
//     //           name="name"
//     //           label="Tên ngân hàng"
//     //           placeholder="Tên ngân hàng"
//     //         />
//     //       </Grid>

//     //       <Grid item xs={12}>
//     //         <DemoFormControl
//     //           control={control}
//     //           name="name"
//     //           label="Chủ tài khoản"
//     //           placeholder="Chủ tài khoản"
//     //         />
//     //       </Grid>

//     //       <Grid item xs={12}>
//     //         <DemoFormControl
//     //           control={control}
//     //           name="name"
//     //           label="Chi nhánh"
//     //           placeholder="Chi nhánh"
//     //         />
//     //       </Grid>

//     //       <Grid item xs={12}>
//     //         <Typography sx={{ animation: `${spin} 2s infinite ease` }}>
//     //           sdasdasd
//     //         </Typography>
//     //       </Grid>
//     //       <Grid item xs={12}>
//     //         <Button type="submit"> Ok Nha</Button>
//     //       </Grid>
//     //     </Grid>
//     //   </Box>

//     //   {/* <Box sx={{ width: "100%" }}>
//     //     <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//     //       <Tabs
//     //         value={value}
//     //         onChange={handleChange}
//     //         aria-label="basic tabs example"
//     //       >
//     //         <Tab label="Item One" />
//     //         <Tab label="Item Two" />
//     //         <Tab label="Item Three" />
//     //       </Tabs>
//     //     </Box>
//     //     <TabPanel value={value} index={0}>
//     //       Item One
//     //     </TabPanel>
//     //     <TabPanel value={value} index={1}>
//     //       Item Two
//     //     </TabPanel>
//     //     <TabPanel value={value} index={2}>
//     //       Item Three
//     //     </TabPanel>
//     //   </Box> */}
//     // </Container>
//   );
// }
import React from "react";

export default function DemoContact() {
  return <div>index</div>;
}
