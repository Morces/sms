import React, { useState, useEffect } from "react";

import TextArea from "../TextArea";

export default {
  title: "COMPONENTS/INPUTS",
  component: TextArea,
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
    minChar: { control: { type: "number" }, default: 0 },
    maxChar: { control: { type: "number" }, default: 30 },
    rows: { control: { type: "number" }, default: 50 },
    mt: { control: { type: "number" }, default: 0 },
    mb: { control: { type: "number" }, default: 0 },
  },
};

export const Text_Area = ({
  prefix,
  field,
  placeholder,
  validate,
  disabled,
  required,
  directValidation,
  blurValidation,
  initialValidation,
  minChar,
  maxChar,
  rows,
  mt,
  mb,
}) => {
  const [input, setInput] = useState({ textInput: "" });
  const [validation, setValidation] = useState({});


  return (
    <TextArea
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
      errorMessage={`Min Char ${minChar}`}
      minChar={minChar}
      maxChar={maxChar}
      rows={rows}
      mt={mt}
      mb={mb}
    />
  );
};
