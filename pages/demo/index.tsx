// // import React, { useCallback } from "react";
// // import HoverPopover from "material-ui-popup-state/HoverPopover";

// // import {
// //   usePopupState,
// //   bindTrigger,
// //   bindMenu,
// //   bindHover,
// // } from "material-ui-popup-state/hooks";
// // import { Box, Button, Menu, MenuItem } from "@mui/material";
// // import Image from "next/image";
// // import { useSnackbar } from "notistack";

// // const styles = {
// //   root: {
// //     flexGrow: 1,
// //     display: "flex",
// //     margin: 16,
// //     justifyContent: "center",
// //     alignItems: "middle",
// //   },
// //   button: {
// //     margin: 8,
// //     borderColor: "#313131",
// //     color: "#313131",
// //   },
// //   success: {
// //     borderColor: "#43a047",
// //     color: "#43a047",
// //   },
// //   error: {
// //     borderColor: "#d32f2f",
// //     color: "#d32f2f",
// //   },
// //   info: {
// //     borderColor: "#2979ff",
// //     color: "#2979ff",
// //   },
// //   warning: {
// //     borderColor: "#ffa000",
// //     color: "#ffa000",
// //   },
// // };
// // const buttons = [
// //   { variant: "success", message: "Successfully done the operation." },
// //   { variant: "error", message: "Something went wrong." },
// //   { variant: "warning", message: "Something could go wrong" },
// //   { variant: "info", message: "For your info..." },
// // ];

// // export default function Demo() {
// //   const popupState = usePopupState({ variant: "popover", popupId: "demoMenu" });

// //   const { enqueueSnackbar, closeSnackbar } = useSnackbar();

// //   const handleClick = useCallback(
// //     (button) => () => {
// //       enqueueSnackbar(button.message, { variant: button.variant });
// //     },
// //     [enqueueSnackbar]
// //   );

// //   return (
// //     <Box>
// //       {buttons.map((button) => (
// //         <Button
// //           key={button.variant}
// //           variant="outlined"
// //           style={{ ...styles.button, ...styles[button.variant] }}
// //           onClick={handleClick(button)}
// //         >
// //           {button.variant}
// //         </Button>
// //       ))}
// //       {/* <Button variant="contained" {...bindHover(popupState)}>
// //         Open Menu
// //       </Button>
// //       <HoverPopover
// //         {...bindMenu(popupState)}
// //         anchorOrigin={{
// //           vertical: "bottom",
// //           horizontal: "left",
// //         }}
// //         transformOrigin={{
// //           vertical: "top",
// //           horizontal: "left",
// //         }}
// //       >
// //         <MenuItem onClick={popupState.close}>Cake</MenuItem>
// //         <MenuItem onClick={popupState.close}>Death</MenuItem>
// //         <MenuItem onClick={popupState.close}>Cake</MenuItem>
// //         <MenuItem onClick={popupState.close}>Death</MenuItem>
// //       </HoverPopover> */}
// //     </Box>
// //   );
// // }
// import React, { useCallback, Fragment } from "react";
// import Button from "@mui/material/Button";
// import Paper from "@mui/material/Paper";
// import { useSnackbar } from "notistack";

// const styles = {
//   root: {
//     flexGrow: 1,
//     display: "flex",
//     margin: 16,
//     justifyContent: "center",
//     alignItems: "middle",
//   },
//   button: {
//     margin: 8,
//     borderColor: "#313131",
//     color: "#313131",
//   },
//   success: {
//     borderColor: "#43a047",
//     color: "#43a047",
//   },
//   error: {
//     borderColor: "#d32f2f",
//     color: "#d32f2f",
//   },
//   info: {
//     borderColor: "#2979ff",
//     color: "#2979ff",
//   },
//   warning: {
//     borderColor: "#ffa000",
//     color: "#ffa000",
//   },
// };

// const buttons = [
//   { variant: "success", message: "Successfully done the operation." },
//   { variant: "error", message: "Something went wrong." },
//   { variant: "warning", message: "Something could go wrong" },
//   { variant: "info", message: "For your info..." },
// ];

// const MessageButtons = () => {
//   const { enqueueSnackbar, closeSnackbar } = useSnackbar();

//   const handleClick = useCallback(
//     (button) => () => {
//       enqueueSnackbar(button.message, { variant: button.variant });
//     },
//     [enqueueSnackbar]
//   );

//   const handleClickWithAction = useCallback(() => {
//     enqueueSnackbar("I use snackbars responsibly", {
//       variant: "default",
//       action: (key) => (
//         <Fragment>
//           <Button
//             size="small"
//             onClick={() =>
//               alert(`Clicked on action of snackbar with id: ${key}`)
//             }
//           >
//             Detail
//           </Button>
//           <Button size="small" onClick={() => closeSnackbar(key)}>
//             Dismiss
//           </Button>
//         </Fragment>
//       ),
//     });
//   }, [enqueueSnackbar, closeSnackbar]);

//   return (
//     <Paper style={styles.root}>
//       {buttons.map((button) => (
//         <Button
//           key={button.variant}
//           variant="outlined"
//           style={{ ...styles.button, ...styles[button.variant] }}
//           onClick={handleClick(button)}
//         >
//           {button.variant}
//         </Button>
//       ))}
//       <Button
//         variant="outlined"
//         style={styles.button}
//         onClick={handleClickWithAction}
//       >
//         default
//       </Button>
//     </Paper>
//   );
// };

// export default MessageButtons;
import NewsDemo from "container/News/Client/NewsDemo";
import Home from "container/News/Client/NewsDemo2";

export default function Demo() {
  return <Home />;
}
