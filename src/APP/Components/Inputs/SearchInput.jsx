import { useEffect, useState } from "react";

import Input from "./Input";
import InputError from "./InputError";
import InputLabel from "./InputLabel";

import { transforms } from "../../Utils/transform";

import useValidation from "./useValidation";

import { BsSearch } from "react-icons/bs";

const SearchInput = ({
  input = { phone: "" },
  setInput = () => {},
  stateInput = "",
  setStateInput = () => {},
  field = "textInputds",
  placeholder = "",
  label = "Search",
  showLabel = true,
  validate = 0,
  setValidation = () => {},
  disabled = false,
  required = false,
  pattern = null,
  errorMessage = "Min no of charcters",
  directInput = true,
  blurValidation = false,
  directValidation = false,
  initialValidation = false,
  transform = "none",
  minChar = 0,
  maxChar = 999,
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
      <div className="w-full flex gap-x-2 items-center border-2 rounded-lg  py-2 px-8">
        <p className=" text-base">
          <BsSearch />
        </p>
        <input
          className={`flex-1 border-0`}
          value={directInput ? stateInput : input[field]}
          placeholder={placeholder}
          onChange={(e) => handleChange(e.target.value)}
          onBlur={handleBlur}
          disabled={disabled}
          type={"text"}
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

export default SearchInput;
