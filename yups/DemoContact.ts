import { string } from "yup";

export type shemaContact = {
  name: string;
  email: string;
  message: string;
  number_phone: string;
};

export const defaultContact = () => {
  return { name: "", number_phone: "", message: "", emial: "" };
};
