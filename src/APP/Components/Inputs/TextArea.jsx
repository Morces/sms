import { useEffect, useState } from "react";

import Input from "./Input";
import InputError from "./InputError";
import InputLabel from "./InputLabel";

import inputClass from "../../Utils/config/input.style";

import { transforms } from "../../Utils/transform";

import useValidation from "./useValidation";

const TextAreaInput = ({
  input = { phone: "" },
  setInput = () => {},
  stateInput = "",
  setStateInput = () => {},
  field = "textInputds",
  placeholder = "Enter Text ..",
  label = "Text Area",
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
  rows = 10,
  mt = 0,
  mb = 0,
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

    if (!txt) {
      txt = "";
    }

    if (txt.length > maxChar) return;

    if (transforms[transform]) {
      txt = transforms[transform](txt);
    }

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
      <textarea
        className={`${error ? inputClass.error : inputClass.base}`}
        value={directInput ? stateInput : input[field]}
        placeholder={placeholder}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={handleBlur}
        disabled={disabled}
        type={"text"}
        rows={rows}
      ></textarea>
      <InputError
        input={directInput ? stateInput : input[field]}
        message={errorMessage}
        error={error}
      />
    </Input>
  );
};

export default TextAreaInput;
