import { useEffect, useState } from "react";

import Input from "./Input";
import InputError from "./InputError";
import InputLabel from "./InputLabel";

import inputClass from "./../../Util/config/input.style";
import useValidation from "./useValidation";

const Numeric = ({
  input = { phone: "" },
  setInput = () => {},
  stateInput = "",
  setStateInput = () => {},
  field = "no",
  placeholder = "",
  label = "Numeric",
  showLabel = true,
  validate = 0,
  setValidation = () => {},
  disabled = false,
  required = true,
  pattern = null,
  errorMessage = "Check number",
  directInput = false,
  blurValidation = true,
  directValidation = false,
  initialValidation = true,
  min = 0,
  max = 9999,
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
    min: min,
  });

  useEffect(() => {
    if (validate === 0) return;
    validateInput();
  }, [validate]);

  function validateInput() {
    if (required === false) return;

    let testValue = "";

    directInput ? (testValue = stateInput) : (testValue = input[field]);

    validationError();

    if (pattern) {
      let regex = new RegExp(pattern);
      if (regex.test(testValue)) {
        setError(false);
      } else {
        setError(true);
      }
    }

    if (parseInt(testValue) < min || testValue === "") {
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

    if (parseInt(txt) > max) return;

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
        className={`${error ? inputClass.error : inputClass.base}`}
        value={directInput ? stateInput : input[field]}
        placeholder={placeholder}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={handleBlur}
        disabled={disabled}
        type={"number"}
      />
      <InputError
        input={directInput ? stateInput : input[field]}
        message={errorMessage}
        error={error}
      />
    </Input>
  );
};

export default Numeric;
