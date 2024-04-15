import { useEffect, useState } from "react";

import Input from "./Input";
import InputError from "./InputError";
import InputLabel from "./InputLabel";

import inputClass from "./../../Util/config/input.style";

import { formatNumberWithCommas } from "../../Util/transform";

import useValidation from "./useValidation";

const Monetary = ({
  input = { amount: "" },
  setInput = () => {},
  stateInput = "",
  setStateInput = () => {},
  field = "amount",
  prefix = "KES",
  placeholder = "",
  label = "Money",
  showLabel = true,
  validate = 0,
  setValidation = () => {},
  disabled = false,
  required = true,
  errorMessage = "Invalid Amaount",
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

    testValue = testValue.replace(/,/g, "");

    if (directValidation) {
      validationError();
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
      validationError();
    }
  }

  function handleChange(txt) {
    let textToValidate = txt.replace(/,/g, "");

    if (parseInt(textToValidate) > max) return;

    if (isNaN(textToValidate) === true) {
      return;
    }

    if (disabled == true) return;

    if (directInput) {
      setStateInput(textToValidate);
      return;
    }

    if (directValidation || error == true) {
      validateInput();
    }

    setInput((c) => {
      let newObj = { ...c };
      newObj[field] = textToValidate;
      return newObj;
    });
  }

  return (
    <Input mt={mt} mb={mb}>
      <InputLabel label={label} showLabel={showLabel} />
      <div className="w-full flex gap-x-2 items-center border-2 rounded-lg  py-2 px-8">
        <p className=" px-4 py-1 rounded-md bg-anti-flash-white taupe-gray ">
          {prefix}
        </p>
        <input
          className={`flex-1`}
          value={formatNumberWithCommas(
            directInput ? stateInput : input[field]
          )}
          placeholder={placeholder}
          onChange={(e) => handleChange(e.target.value)}
          onBlur={handleBlur}
          disabled={disabled}
          type="text"
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

export default Monetary;
