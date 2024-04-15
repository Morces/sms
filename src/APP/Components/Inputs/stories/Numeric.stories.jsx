import React, { useState, useEffect } from "react";
import NumericInput from "../Numeric";

export default {
  title: "COMPONENTS/INPUTS",
  component: NumericInput,
  argTypes: {
    placeholder: { control: { type: "text" }, default: "72323434" },
    field: { control: { type: "text" }, default: "phone" },
    validate: { control: { type: "number" }, default: 0 },
    disabled: { control: { type: "boolean" }, default: false },
    required: { control: { type: "boolean" }, default: true },
    directValidation: { control: { type: "boolean" }, default: false },
    blurValidation: { control: { type: "boolean" }, default: true },
    initialValidation: { control: { type: "boolean" }, default: true },
    min: { control: { type: "number" }, default: 10 },
    max: { control: { type: "number" }, default: 100 },
    mt: { control: { type: "number" }, default: 0 },
    mb: { control: { type: "number" }, default: 0 },
  },
};

export const Numeric_Input = ({
  field,
  placeholder,
  validate,
  disabled,
  required,
  directValidation,
  blurValidation,
  initialValidation,
  min,
  max,
  mt,
  mb,
}) => {
  const [input, setInput] = useState({ no: "" });
  const [validation, setValidation] = useState({});

  return (
    <NumericInput
      input={input}
      setInput={setInput}
      field={field}
      placeholder={placeholder}
      validate={validate}
      disabled={disabled}
      required={required}
      setValidation={setValidation}
      directValidation={directValidation}
      blurValidation={blurValidation}
      initialValidation={initialValidation}
      errorMessage={`Minimum input ${min}`}
      mt={mt}
      mb={mb}
      min={min}
      max={max}
    />
  );
};
