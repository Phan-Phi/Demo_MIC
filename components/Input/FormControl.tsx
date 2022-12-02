import React from "react";
import { Control, Controller, Path } from "react-hook-form";
import {
  FormControl as MuiFormControl,
  InputBase,
  InputLabel,
} from "@mui/material";

type Props = {
  name: string;
  fullWidth?: boolean;
  placeholder?: string;
  label: string;
  control: Control;
};

export default function FormControl(props: Props) {
  const { name, label, placeholder, fullWidth, control } = props;

  return (
    <Controller
      control={control}
      name="test"
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { error },
        formState,
      }) => (
        <MuiFormControl fullWidth>
          <InputLabel shrink htmlFor="bootstrap-input">
            {label}
          </InputLabel>

          <InputBase
            value={value}
            onChange={onChange}
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Google Maps"
            inputProps={{ "aria-label": "search google maps" }}
          />
        </MuiFormControl>
      )}
    />
  );
}
