import { useEffect, useState } from "react";
import Input from "./Input";
import InputError from "./InputError";
import InputLabel from "./InputLabel";
import inputClass from "../../Utils/config/input.style";
import useValidation from "./useValidation";

const Email = ({
  input = { phone: "" },
  setInput = () => {},
  stateInput = "",
  setStateInput = () => {},
  field = "email",
  placeholder = "",
  label = "Email",
  showLabel = true,
  validate = 0,
  setValidation = () => {},
  disabled = false,
  required = true,
  pattern = "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/",
  errorMessage = "* Email not valid",
  directInput = false,
  blurValidation = true,
  directValidation = false,
  initialValidation = true,
  mt = 0,
  mb = 0,
  initial = "", // Add initial prop
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
    validateEmail();
  }, [validate]);

  useEffect(() => {
    // Set initial value when the initial prop changes
    if (initial) {
      handleChange(initial);
    }
  }, [initial]);

  function validateEmail() {
    if (required === false) return;

    let testValue = "";

    validationError();

    directInput ? (testValue = stateInput) : (testValue = input[field]);
    const regex = new RegExp(pattern, "g");
    if (regex.test(testValue)) {
      setError(false);
      return;
    }
    setError(true);
  }

  function handleBlur() {
    if (blurValidation) {
      validateEmail();
    }
  }

  function handleChange(txt) {
    if (disabled == true) return;
    txt = txt.toLowerCase();
    if (directInput) {
      setStateInput(txt);
      return;
    }

    if (directValidation || error == true) {
      validateEmail();
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
      />
      <InputError
        input={directInput ? stateInput : input[field]}
        message={errorMessage}
        error={error}
      />
    </Input>
  );
};

export default Email;
