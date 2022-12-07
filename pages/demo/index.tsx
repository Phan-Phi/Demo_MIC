import React from "react";
import HoverPopover from "material-ui-popup-state/HoverPopover";

import {
  usePopupState,
  bindTrigger,
  bindMenu,
  bindHover,
} from "material-ui-popup-state/hooks";
import { Button, Menu, MenuItem } from "@mui/material";
import Image from "next/image";

export default function Demo() {
  const popupState = usePopupState({ variant: "popover", popupId: "demoMenu" });
  return (
    <div>
      <Button variant="contained" {...bindHover(popupState)}>
        Open Menu
      </Button>
      <HoverPopover
        {...bindMenu(popupState)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <MenuItem onClick={popupState.close}>Cake</MenuItem>
        <MenuItem onClick={popupState.close}>Death</MenuItem>
        <MenuItem onClick={popupState.close}>Cake</MenuItem>
        <MenuItem onClick={popupState.close}>Death</MenuItem>
      </HoverPopover>

      <Image src />
    </div>
  );
}
