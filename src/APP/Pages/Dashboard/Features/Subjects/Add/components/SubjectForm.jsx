import React, { useState, useEffect } from "react";
import TextInput from "../../../../../../Components/Inputs/TextInput";
import Btn from "../../../../../../Components/Button/Btn";
import SelectInput from "../../../../../../Components/Inputs/SelectInput";
import { useNavigate } from "react-router-dom";

const SubjectForm = () => {
  const navigate = useNavigate();
  return (
    <div className="px-8 m-auto mt-8 mb-4 py-8">
      <div className="flex flex-col gap-y-2">
        <div className="flex gap-x-7 flex-col md:flex-row">
          <TextInput
            input={""}
            setInput={""}
            field="name"
            label="Subject Name"
            placeholder="Subject Name"
          />
          <TextInput
            input={""}
            setInput={""}
            field="code"
            label="Subject Code"
            placeholder="Subject Code"
          />
        </div>

        <SelectInput
          input={"formData"}
          setInput={"setFormData"}
          field="role"
          label="Select Class"
          stateInput=""
          setStateInput={() => {}}
        >
          <option value="">-- Select Class --</option>
          <option value={1}>Grade 1</option>
          <option value={2}>Grade 2</option>
          <option value={3}>Grade 3</option>
          <option value={4}>Grade 4</option>
        </SelectInput>

        <SelectInput
          input={"formData"}
          setInput={"setFormData"}
          field="role"
          label="Select Department"
          stateInput=""
          setStateInput={() => {}}
        >
          <option value="">-- Select Department --</option>
          <option value={1}>Grade 1</option>
          <option value={2}>Grade 2</option>
          <option value={3}>Grade 3</option>
          <option value={4}>Grade 4</option>
        </SelectInput>

        <SelectInput
          input={"formData"}
          setInput={"setFormData"}
          field="role"
          label="Select Class"
          stateInput=""
          setStateInput={() => {}}
        >
          <option value="">-- Select Subject Type --</option>
          <option value={1}>Major</option>
          <option value={2}>Minor</option>
        </SelectInput>
      </div>
      <div className="flex justify-between items-center">
        <Btn
          size="block"
          btn="primary"
          onClick={() => navigate("/dashboard/subjects")}
        >
          Submit
        </Btn>
      </div>
    </div>
  );
};

export default SubjectForm;
