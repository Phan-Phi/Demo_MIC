import React from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import {
  FormControl as MuiFormControl,
  FormLabel,
  InputBase,
  InputProps,
  InputLabel,
  FormHelperText,
} from "@mui/material";

type Props = {
  name: "name" | "message" | "phone_number" | "email";
  placeholder?: string;
  label: string;
  control: Control<
    {
      name: string;
      phone_number: string;
      email: string;
      message: string;
      bank: string;
    },
    any
  >;

  InputProps?: InputProps;
};

export default function FormControl(props: Props) {
  const { name, label, placeholder, control, InputProps } = props;

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
              {...InputProps}
            />
            <FormHelperText id="my-helper-text">
              We'll never share your email.
            </FormHelperText>
          </MuiFormControl>
        );
      }}
    />
  );
}
