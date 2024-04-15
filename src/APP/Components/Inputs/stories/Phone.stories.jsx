import React, { useState, useEffect } from "react";
import PhoneInput from "../Phone";

export default {
  title: "COMPONENTS/INPUTS",
  component: PhoneInput,
  argTypes: {
    prefix: { control: { type: "text" }, default: "+254" },
    placeholder: { control: { type: "text" }, default: "72323434" },
    field: { control: { type: "text" }, default: "phone" },
    validate: { control: { type: "number" }, default: 0 },
    disabled: { control: { type: "boolean" }, default: false },
    required: { control: { type: "boolean" }, default: true },
    directValidation: { control: { type: "boolean" }, default: false },
    blurValidation: { control: { type: "boolean" }, default: true },
    initialValidation: { control: { type: "boolean" }, default: true },
    mt: { control: { type: "number" }, default: 0 },
    mb: { control: { type: "number" }, default: 0 },
  },
};

export const Phone_Input = ({
  prefix,
  field,
  placeholder,
  validate,
  disabled,
  required,
  directValidation,
  blurValidation,
  initialValidation,
  mt,
  mb,
}) => {
  const [input, setInput] = useState({ phone: "" });
  const [validation, setValidation] = useState({});

  return (
    <PhoneInput
      input={input}
      setInput={setInput}
      prefix={prefix}
      field={field}
      placeholder={placeholder}
      validate={validate}
      disabled={disabled}
      required={required}
      setValidation={setValidation}
      directValidation={directValidation}
      blurValidation={blurValidation}
      initialValidation={initialValidation}
      mt={mt}
      mb={mb}
    />
  );
};
