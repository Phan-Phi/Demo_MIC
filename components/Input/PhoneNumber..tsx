import React, { forwardRef } from "react";
import { Control, Controller } from "react-hook-form";
import {
  FormControl as MuiFormControl,
  FormLabel,
  InputBase,
  InputProps,
  Typography,
} from "@mui/material";
import PhoneInput from "react-phone-number-input/input";

type Props = {
  name: string;
  fullWidth?: boolean;
  placeholder?: string;
  label: string;
  control: Control;
};

export default function PhoneNumber(props: Props) {
  const { name, label, placeholder, control } = props;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <MuiFormControl fullWidth>
            <FormLabel>{label}</FormLabel>

            {/* <InputBase
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          inputProps={{ "aria-label": "search google maps" }}
            /> */}
            <PhoneInput
              inputComponent={FancyButton}
              country="VN"
              placeholder={placeholder}
              value={value}
              onChange={onChange}
            />
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
