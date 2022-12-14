import React, { forwardRef } from "react";
import { Control, Controller } from "react-hook-form";
import {
  FormControl as MuiFormControl,
  FormHelperText,
  FormLabel,
  InputBase,
  InputProps,
} from "@mui/material";
import PhoneInput from "react-phone-number-input/input";

type InputPropsWithoutValueAndOnChange = Omit<
  InputProps,
  "value" | "onChange" | "inputComponent"
>;

type Props = {
  name: "phone_number";
  fullWidth?: boolean;
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
};

export default function PhoneNumber(props: Props) {
  const { name, label, placeholder, control } = props;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <MuiFormControl fullWidth error={!!error}>
            <FormLabel>{label}</FormLabel>

            <PhoneInput
              inputComponent={
                FancyButton as (
                  props: InputPropsWithoutValueAndOnChange
                ) => JSX.Element
              }
              country="VN"
              placeholder={placeholder}
              value={value}
              onChange={onChange}
            />

            {error == undefined ? null : (
              <FormHelperText id="my-helper-text">
                {error.message}
              </FormHelperText>
            )}
          </MuiFormControl>
        );
      }}
    />
  );
}

const FancyButton = forwardRef(
  (props: InputProps, ref?: React.Ref<HTMLInputElement>) => {
    return <InputBase inputRef={ref} {...props} />;
  }
);
