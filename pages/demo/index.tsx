import React, { useState } from "react";

import PhoneInput from "react-phone-number-input/input";

import { formatPhoneNumberIntl } from "react-phone-number-input";

export default function Demo() {
  const [value, setValue] = useState();
  console.log("🚀 ~ file: index.tsx:11 ~ Demo ~ value", value);

  console.log(formatPhoneNumberIntl("+840039881336"));

  return <div>sadas</div>;
}
