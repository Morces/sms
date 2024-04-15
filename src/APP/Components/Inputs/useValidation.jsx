import React, { useEffect } from "react";

const useValidation = ({
  input = { phone: "" },
  stateInput = "",
  field = "phone",
  required = true,
  setValidation,
  directInput = false,
  blurValidation = true,
  initialValidation = true,
  min = null,
  pattern = null,
  minChar = 0,
  maxChar = 999,
}) => {
  useEffect(() => {
    if (required === false || initialValidation === false) return;
    validationError();
  }, [initialValidation]);
  function blurValidation() {
    if (blurValidation) {
      validationError();
    }
  }
  function updateValidationError(the_value = false) {
    setValidation((c) => {
      let nc = { ...c };
      nc[field] = the_value;
      return nc;
    });
  }
  function validationError() {
    let testValue = "";
    directInput
      ? (testValue = stateInput || "")
      : (testValue = input[field] || "");
    testValue = testValue.replace(/,/g, "");

    if (min || !isNaN(min)) {
      if (parseInt(testValue) < min || testValue === "") {
        updateValidationError(true);
      } else {
        updateValidationError(false);
      }
    }
    if (pattern) {
      const regex = new RegExp(pattern, "g");
      if (regex.test(testValue)) {
        updateValidationError(false);
      } else {
        updateValidationError(true);
      }
    }

    if (maxChar || !isNaN(maxChar)) {
      if (testValue.length < maxChar) {
        updateValidationError(true);
      } else {
        updateValidationError(false);
      }
    }
  }
  return { validationError };
};

export default useValidation;
