import React from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import {
  FormControl as MuiFormControl,
  FormLabel,
  InputBase,
  InputLabel,
} from "@mui/material";

type Props = {
  name: "name" | "message" | "phone_number" | "email";
  fullWidth?: boolean;
  placeholder?: string;
  label: string;
  control: Control<
    { name: string; phone_number: string; email: string; message: string },
    any
  >;
};

export default function FormControl(props: Props) {
  const { name, label, placeholder, fullWidth, control } = props;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, name }, fieldState: { error } }) => {
        return (
          <MuiFormControl fullWidth>
            <FormLabel>{label}</FormLabel>

            <InputBase
              name={name}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              inputProps={{ "aria-label": "search google maps" }}
            />
          </MuiFormControl>
        );
      }}
    />
  );
}
