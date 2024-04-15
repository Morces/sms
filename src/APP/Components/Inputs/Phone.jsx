/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import Input from "./Input";
import InputError from "./InputError";
import InputLabel from "./InputLabel";

import inputClass from "./../../Util/config/input.style";

import useValidation from "./useValidation";

const Phone = ({
  input = { phone: "" },
  setInput = () => {},
  stateInput = "",
  setStateInput = () => {},
  field = "phone",
  prefix = "+254",
  placeholder = "",
  label = "Phone",
  showLabel = true,
  validate = 0,
  setValidation = () => {},
  disabled = false,
  required = true,
  pattern = /^\d{8,}$/,
  errorMessage = "Invalid phone number",
  directInput = false,
  blurValidation = true,
  directValidation = false,
  initialValidation = true,
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
  });

  useEffect(() => {
    if (required === false || initialValidation === false) return;
    validationError();
  }, [initialValidation]);

  useEffect(() => {
    if (validate === 0) return;
    validatePhone();
  }, [validate]);

  function validatePhone() {
    if (required === false) return;

    let testValue = "";

    directInput ? (testValue = stateInput) : (testValue = input[field]);

    if (pattern.test(testValue)) {
      setError(false);
      setValidation((c) => {
        let nc = { ...c };
        nc[field] = false;
        return nc;
      });
      return;
    }
    setError(true);
    setValidation((c) => {
      let nc = { ...c };
      nc[field] = true;
      return nc;
    });
  }

  function handleBlur() {
    if (blurValidation) {
      validatePhone();
    }
  }

  function handleChange(txt) {
    if (isNaN(txt) === true) {
      return;
    }

    if (disabled == true) return;

    if (directInput) {
      setStateInput(txt);
      return;
    }

    if (directValidation || error == true) {
      validatePhone();
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
      <div className="w-full flex gap-x-2 items-center border-2 rounded-lg  py-2 px-4">
        <p className=" px-4 py-1 rounded-md bg-anti-flash-white taupe-gray ">
          {prefix}
        </p>
        <input
          className={`w-full flex-1`}
          value={directInput ? stateInput : input[field]}
          placeholder={placeholder}
          onChange={(e) => handleChange(e.target.value)}
          onBlur={handleBlur}
          disabled={disabled}
        />
      </div>
      <InputError
        input={directInput ? stateInput : input[field]}
        message={errorMessage}
        error={error}
      />
    </Input>
  );
};

export default Phone;
