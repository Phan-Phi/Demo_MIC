import { yupResolver } from "@hookform/resolvers/yup";
import { isValidPhoneNumber } from "react-phone-number-input";
import { object, string } from "yup";

export type PropsDefaultValue = {
  name: string;
  email: string;
  phone_number: string;
  message: string;
  bank: string;
};

export const schemaContact = () => {
  return yupResolver(
    object().shape({
      name: string().required(),
      message: string().required(),
      email: string().email().required(),
      bank: string().required(),
      phone_number: string().test({
        test: (value, ctx) => {
          if (value === "" || value === undefined) {
            return ctx.createError({
              message: "Không được bỏ trống trường này",
            });
          } else if (value.length < 10) {
            return ctx.createError({
              message: "Số điện thoại không được dưới 10 ký tự",
            });
          } else if (isValidPhoneNumber(value) === false) {
            return ctx.createError({
              message: "sdt co do dai or chu so ko dung quoc gia",
            });
          } else {
            return true;
          }

          // if (isPossiblePhoneNumber(value) === false) {
          //   // console.log("sdt ko hop le, ko dc xac thuc");
          //   return ctx.createError({
          //     message: "sdt ko hop le, ko dc xac thuc",
          //   });
          // }
        },
      }),
    })
  );
};

export const defaultContact = () => {
  return {
    name: "phi",
    email: "phi@gmail.com",
    phone_number: "",
    message: "Hello",
    bank: "123456789",
  };
};
