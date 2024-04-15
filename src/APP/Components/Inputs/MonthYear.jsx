import React, { useState } from "react";
import Input from "./Input";
const MonthYearInput = ({ value, onChange }) => {
  const [month, setMonth] = useState(value ? value.substring(0, 2) : "");
  const [year, setYear] = useState(value ? value.substring(3) : "");

  const handleChange = () => {
    const newValue = `${month}/${year}`;
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <Input>
      <input
        type="text"
        placeholder="MM"
        value={month}
        onChange={(e) => {
          const inputMonth = e.target.value;
          if (/^\d*$/.test(inputMonth) && inputMonth.length <= 2) {
            setMonth(inputMonth);
            handleChange();
          }
        }}
      />
      /
      <input
        type="text"
        placeholder="YY"
        value={year}
        onChange={(e) => {
          const inputYear = e.target.value;
          if (/^\d*$/.test(inputYear) && inputYear.length <= 2) {
            setYear(inputYear);
            handleChange();
          }
        }}
      />
    </Input>
  );
};

export default MonthYearInput;
