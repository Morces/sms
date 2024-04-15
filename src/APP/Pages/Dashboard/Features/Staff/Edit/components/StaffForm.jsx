import React, { useState, useEffect } from "react";
import TextInput from "../../../../../../Components/Inputs/TextInput";
import Btn from "../../../../../../Components/Button/Btn";
import SelectInput from "../../../../../../Components/Inputs/SelectInput";
import FileInput from "../../../../../../Components/Inputs/FileInput";
import { useNavigate } from "react-router-dom";

const StaffForm = () => {
  const navigate = useNavigate();
  return (
    <div className="px-8 m-auto mt-8 py-8 mb-5">
      <div className="flex flex-col gap-y-2">
        <div className="flex gap-x-7 flex-col md:flex-row">
          <TextInput
            input={""}
            setInput={""}
            field="first_name"
            label="First Name"
            placeholder="First Name"
          />

          <TextInput
            input={"formData"}
            setInput={"setFormData"}
            field="last_name"
            label="Last Name"
            placeholder="Last Name"
          />

          <TextInput
            input={"formData"}
            setInput={"setFormData"}
            field="phone"
            label="Phone Number"
            placeholder="07..."
          />
        </div>

        <div className="flex gap-x-7 flex-col md:flex-row">
          <TextInput
            input={"formData"}
            setInput={"setFormData"}
            field="staff_number"
            label="Staff Number"
          />
          <SelectInput
            input={"formData"}
            setInput={"setFormData"}
            field="gender"
            label="Gender"
            stateInput=""
            setStateInput={() => {}}
          >
            <option value="">-- Gender --</option>
            <option value={1}>Male</option>
            <option value={2}>Female</option>
          </SelectInput>
          <TextInput
            input={"formData"}
            setInput={"setFormData"}
            field="nationality"
            label="Nationality"
            placeholder="Enter Nationality"
          />
        </div>
        <FileInput label="Upload ID  " />

        <SelectInput
          input={"formData"}
          setInput={"setFormData"}
          field="role"
          label="Select Role"
          stateInput=""
          setStateInput={() => {}}
        >
          <option value="">-- Role --</option>
          <option value={1}>Admin</option>
          <option value={2}>Teacher 2</option>
          <option value={3}>Gardener</option>
          <option value={4}>Janitor</option>
        </SelectInput>
      </div>
      <div className="flex justify-between items-center">
        <Btn
          size="block"
          btn="primary"
          onClick={() => navigate("/dashboard/staff")}
        >
          Submit
        </Btn>
      </div>
    </div>
  );
};

export default StaffForm;
