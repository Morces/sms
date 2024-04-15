import React, { useEffect, useState } from "react";
import Input from "./Input";
import InputError from "./InputError";
import InputLabel from "./InputLabel";
import inputClass from "./../../Utils/config/input.style";
import useValidation from "./useValidation";

const SelectInput = ({
  input = {},
  setInput,
  stateInput = "",
  setStateInput = () => {},
  field = "textInputs",
  label = "Select Input",
  showLabel = true,
  validate = 0,
  setValidation = () => {},
  disabled = false,
  required = true,
  pattern = null,
  errorMessage = "Min number of characters",
  directInput = false,
  blurValidation = true,
  directValidation = false,
  initialValidation = true,
  transform = "capWord",
  minChar = 0,
  maxChar = 999,
  mt = 0,
  mb = 0,
  ex = "",
  children,
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
    pattern,
    minChar,
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

    if (pattern) {
      let regex = new RegExp(pattern);
      if (regex.test(testValue)) {
        setError(false);
      } else {
        setError(true);
      }
    }

    if (testValue.length < minChar) {
      setError(true);
      return;
    }
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

    if (txt.length > maxChar) return;

    if (directInput) {
      setStateInput(txt);
    } else {
      setInput((c) => ({
        ...c,
        [field]: txt,
      }));
    }
  }

  return (
    <Input mt={mt} mb={mb}>
      <InputLabel label={label} showLabel={showLabel} />
      <select
        className={`${
          error ? inputClass.error : inputClass.base
        } text-gray-2 bg-transparent outline-none cursor-pointer ${ex}`}
        value={directInput ? stateInput : input[field]}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={handleBlur}
        disabled={disabled}
      >
        {children}
      </select>
      <InputError
        input={directInput ? stateInput : input[field]}
        message={errorMessage}
        error={error}
      />
    </Input>
  );
};

export default SelectInput;
