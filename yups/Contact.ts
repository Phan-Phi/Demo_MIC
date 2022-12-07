import { yupResolver } from "@hookform/resolvers/yup";
import {
  isPossiblePhoneNumber,
  isValidPhoneNumber,
} from "react-phone-number-input";
import { object, string } from "yup";

export type PropsDefaultValue = {
  name: string;
  email: string;
  phone_number: string;
  message: string;
  bank: string;
};

// export const schemaContact = yup.object().shape({
//   name: yup.string().required(),
//   age: yup.number().required(),
//   message: yup.number().required(),
//   phone_number: yup.string().test({
//     test(value: string, ctx: yup.TestContext<Object>) {
//       console.log("🚀 ~ file: Contact.tsx:31 ~ test ~ ctx", ctx);
//       console.log("🚀 ~ file: Contact.tsx:31 ~ test ~ value", value);

//       if (isValidPhoneNumber(value) === false) {
//         console.log("sdt co do dai or chu so ko dung quoc gia");
//       }

//       if (isPossiblePhoneNumber(value) === false) {
//         console.log("sdt ko hop le, ko dc xac thuc");
//       }
//       return true;
//     },
//   }),
// });

export const schemaContact = () => {
  return yupResolver(
    object().shape({
      name: string().required(),
      message: string().required(),
      email: string().email().required(),
      bank: string().required(),
      phone_number: string().test({
        test(value: string, ctx) {
          console.log("🚀 ~ file: Contact.tsx:31 ~ test ~ ctx", ctx);
          console.log("🚀 ~ file: Contact.tsx:31 ~ test ~ value", value);

          if (isValidPhoneNumber(value) === false) {
            console.log("sdt co do dai or chu so ko dung quoc gia");
          }

          if (isPossiblePhoneNumber(value) === false) {
            console.log("sdt ko hop le, ko dc xac thuc");
          }
          return true;
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
