import { FormControl, FormLabel, InputBase } from "@mui/material";
import React from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import { NumericFormat } from "react-number-format";

type PropsDemoForm = {
  control: Control<FieldValues, any>;
  name: string;
  label: string;
  placeholder: string;
};

export default function DemoForm(props: PropsDemoForm) {
  const { control, name, label, placeholder } = props;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <FormControl>
            <FormLabel>{label}</FormLabel>
            <NumericFormat
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              customInput={InputBase}
            />
          </FormControl>
        );
      }}
    />
  );
}
