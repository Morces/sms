/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import Input from "./Input";
import InputError from "./InputError";
import InputLabel from "./InputLabel";

import inputClass from "../../Utils/config/input.style";

import { transforms } from "../../Utils/transform";

import useValidation from "./useValidation";

const TextInput = ({
  input = { phone: "" },
  setInput = () => {},
  stateInput = "",
  setStateInput = () => {},
  field = "textInput",
  placeholder = "",
  label = "Text Input",
  showLabel = true,
  validate = 0,
  setValidation = () => {},
  disabled = false,
  required = true,
  pattern = null,
  errorMessage = "Min no of charcters",
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
  type = "text",
  initial = {},
}) => {
  const [initialValue, setInitialValue] = useState(initial[field]);
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
    setInitialValue(initial[field]);
  }, [initial, field]);

  useEffect(() => {
    setInput((prevInput) => ({
      ...prevInput,
      [field]: initialValue,
    }));
  }, [initialValue, setInput, field]);

  function validateInput() {
    if (required === false) return;

    let testValue = "";
    validationError();

    directInput ? (testValue = stateInput) : (testValue = input[field]);

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
      return;
    }

    if (directValidation || error == true) {
      validateInput();
    }
    setInput((c) => {
      let newObj = { ...c };
      newObj[field] = txt;
      return newObj;
    });
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
        type={type}
      />
      <InputError
        input={directInput ? stateInput : input[field]}
        message={errorMessage}
        error={error}
      />
    </Input>
  );
};

export default TextInput;
