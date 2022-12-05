import React from "react";
import { Control, Controller } from "react-hook-form";
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
      name={name}
      render={({
        field: { onChange, value, name },
        fieldState: { error },
        formState,
      }) => (
        <MuiFormControl fullWidth>
          <InputLabel shrink htmlFor="bootstrap-input">
            {label}
          </InputLabel>

          <InputBase
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            inputProps={{ "aria-label": "search google maps" }}
          />
        </MuiFormControl>
      )}
    />
  );
}
