import React, { useEffect, useState } from "react";
import Input from "./Input";
import InputError from "./InputError";
import InputLabel from "./InputLabel";
import inputClass from "../../Utils/config/input.style";
import { transforms } from "../../Utils/transform";
import useValidation from "./useValidation";

const DateInput = ({
  input = {},
  setInput = () => {},
  stateInput = "",
  setStateInput = () => {},
  field = "DateInputds",
  placeholder = "",
  label = "Date Input",
  showLabel = true,
  validate = 0,
  setValidation = () => {},
  disabled = false,
  required = true,
  errorMessage = "Min no of characters",
  directInput = false,
  blurValidation = true,
  directValidation = false,
  initialValidation = true,
  transform = "capWord",
  mt = 0,
  mb = 0,
  ex = "",
  initial,
}) => {
  const [error, setError] = useState(false);

  const { validationError } = useValidation({
    input,
    stateInput,
    field,
    required,
    setValidation,
    directInput,
    blurValidation,
    initialValidation,
  });

  useEffect(() => {
    if (validate === 0) return;
    validateInput();
  }, [validate]);

  useEffect(() => {
    if (initial !== undefined) {
      handleChange(initial);
    }
  }, [initial]);

  function validateInput() {
    if (required === false) return;

    let testValue = directInput ? stateInput : input[field] || "";

    validationError();

    setError(false);
    return;
  }

  function handleBlur() {
    if (blurValidation) {
      validateInput();
    }
  }

  function handleChange(txt) {
    if (disabled == true) return;

    if (directInput) {
      setStateInput(txt);
      return;
    }

    setInput((c) => ({
      ...c,
      [field]: txt,
    }));
  }

  return (
    <Input mt={mt} mb={mb}>
      <InputLabel label={label} showLabel={showLabel} />
      <input
        className={`${error ? inputClass.error : inputClass.base} ${ex}`}
        value={directInput ? stateInput : input[field]}
        placeholder={placeholder}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={handleBlur}
        disabled={disabled}
        type={"date"}
      />
      <InputError
        input={directInput ? stateInput : input[field]}
        message={errorMessage}
        error={error}
      />
    </Input>
  );
};

export default DateInput;
