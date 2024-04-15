import React, { useState, useEffect } from "react";
import TextInput from "../../../../../../Components/Inputs/TextInput";
import Btn from "../../../../../../Components/Button/Btn";
import DateTimeInput from "../../../../../../Components/Inputs/DateInput";
import SelectInput from "../../../../../../Components/Inputs/SelectInput";
import FileInput from "../../../../../../Components/Inputs/FileInput";
import Email from "../../../../../../Components/Inputs/Email";

const ParentForm = () => {
  return (
    <div className="px-8 m-auto mt-8">
      <div className="flex flex-col gap-y-2">
        <TextInput
          input={"formData"}
          setInput={"setFormData"}
          field="parent_name"
          label="Parent Full Name"
          placeholder="Parent Name"
        />
        <div className="flex gap-x-7 flex-col md:flex-row">
          <Email
            required={false}
            label="Email"
            field="email"
            id="email"
            input={"formData"}
            setInput={"setFormData"}
            onChange={() => {}}
            placeholder="example@email.com"
          />
          <TextInput
            input={"formData"}
            setInput={"setFormData"}
            field="parent_idno"
            label="Parent ID Number"
            placeholder="Enter ID number"
          />
        </div>

        <div className="flex gap-x-7 flex-col md:flex-row">
          <TextInput
            input={"formData"}
            setInput={"setFormData"}
            field="parent_phone"
            label="Primary Phone Number"
            placeholder="+254..."
          />
          <TextInput
            input={"formData"}
            setInput={"setFormData"}
            field="parent_phone2"
            label="Alternative Phone Number"
            placeholder="+254...."
          />
        </div>

        <FileInput label="Upload ID " />
      </div>
    </div>
  );
};

export default ParentForm;
