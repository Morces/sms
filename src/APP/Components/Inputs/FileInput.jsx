import React, { useState, useEffect } from "react";
import Input from "./Input";
import InputError from "./InputError";
import InputLabel from "./InputLabel";
import inputClass from "../../Utils/config/input.style";


const FileInput = ({
  input = { document: "" },
  setInput = () => {},
  label = "Upload file",
  onChange,
  showLabel = true,
  required = true,
  field = "file",
  accept = ".jpg,.jpeg,.png,.pdf",
  disabled = false,
  errorMessage = "Unaccepted file format",
  type = "file",
}) => {
  const [error, setError] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (onChange) {
      onChange(selectedFile);
    }
    setInput((prevInput) => ({
      ...prevInput,
      [field]: selectedFile,
    }));
  };

  return (
    <Input>
      <InputLabel label={label} showLabel={showLabel} />
      <input
        className={`${error ? inputClass.error : inputClass.base}`}
        value={input[field]}
        type={type}
        accept={accept}
        onChange={handleFileChange}
        disabled={disabled}
        required={required}
      />
      <InputError input={input[field]} message={errorMessage} error={error} />
    </Input>
  );
};

export default FileInput;
