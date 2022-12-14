import React from "react";
import { NumberFormatValues, NumericFormat } from "react-number-format";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  InputBase,
  TextField,
} from "@mui/material";
import { Control, Controller, FieldValues } from "react-hook-form";

type PropsFormNumber = {
  name: "bank";
  control: Control<
    {
      name: string;
      email: string;
      phone_number: string;
      message: string;
      bank: string;
    },
    any
  >;
  placeholder?: string;
  label: string;
};

export default function FormNumber(props: PropsFormNumber) {
  const { control, name, label, placeholder } = props;
  const MAX_LIMIT = 1000;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        console.log("🚀 ~ file: FormNumber.tsx:65 ~ FormNumber ~ error", error);

        return (
          <FormControl fullWidth>
            <FormLabel>{label}</FormLabel>
            <NumericFormat
              name={name}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              customInput={InputBase}
              thousandSeparator=" "
              // isAllowed={(values: NumberFormatValues) => {
              //   const { value } = values;

              //   const parseValueToNumber = parseInt(value);

              //   return parseValueToNumber < MAX_LIMIT;
              // }}
            />
            {error == undefined ? null : (
              <FormHelperText id="my-helper-text">
                {error.message}
              </FormHelperText>
            )}
          </FormControl>
        );
      }}
    />
  );
}
