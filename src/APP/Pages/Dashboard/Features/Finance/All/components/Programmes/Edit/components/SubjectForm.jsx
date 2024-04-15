import React, { useState, useEffect } from "react";
import TextInput from "../../../../../../../../../Components/Inputs/TextInput";
import Btn from "../../../../../../../../../Components/Button/Btn";
import SelectInput from "../../../../../../../../../Components/Inputs/SelectInput";
import { useNavigate } from "react-router-dom";

const TermForm = () => {
  const navigate = useNavigate();
  return (
    <div className="px-8 m-auto mt-8 mb-4 py-8">
      <div className="flex flex-col gap-y-2">
        <div className="flex gap-x-7 flex-col md:flex-row">
          <TextInput
            input={""}
            setInput={""}
            field="name"
            label="Term Name"
            placeholder="e.g Term 1 (PP1)"
          />
          <TextInput
            input={""}
            setInput={""}
            field="amount"
            label="School Fees"
            placeholder="School Fees"
          />
        </div>

        <SelectInput
          input={"formData"}
          setInput={"setFormData"}
          field="grade"
          label="Select Grade"
          stateInput=""
          setStateInput={() => {}}
        >
          <option value="">-- Select Grade --</option>
          <option value={1}>Grade 1</option>
          <option value={2}>Grade 2</option>
          <option value={3}>Grade 3</option>
          <option value={4}>Grade 4</option>
        </SelectInput>
      </div>
      <div className="flex justify-between items-center">
        <Btn
          size="block"
          btn="primary"
          onClick={() => navigate("/dashboard/finance")}
        >
          Submit
        </Btn>
      </div>
    </div>
  );
};

export default TermForm;
