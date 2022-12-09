import { FormControl, FormLabel, InputBase } from "@mui/material";
import React from "react";
import { Control, Controller } from "react-hook-form";

type PropsDemoFormControl = {
  control: Control;
  name: string;
  label: string;
  placeholder?: string;
};

export default function DemoFormControl(props: PropsDemoFormControl) {
  const { control, name, label, placeholder } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <FormControl fullWidth color="error" required={true}>
            <FormLabel>{label}</FormLabel>

            <InputBase
              placeholder={placeholder}
              onChange={onChange}
              value={value}
            />
          </FormControl>
        );
      }}
    />
  );
}
