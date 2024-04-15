import React, { useState, useEffect } from "react";
import TextInput from "../../../../../../Components/Inputs/TextInput";
import Btn from "../../../../../../Components/Button/Btn";
import DateTimeInput from "../../../../../../Components/Inputs/DateInput";
import SelectInput from "../../../../../../Components/Inputs/SelectInput";
import FileInput from "../../../../../../Components/Inputs/FileInput";

const StudentForm = () => {
  return (
    <div className="px-8 m-auto mt-8">
      <div className="flex flex-col gap-y-2">
        <div className="flex gap-x-7 flex-col md:flex-row">
          <TextInput
            input={"formData"}
            setInput={"setFormData"}
            field="first_name"
            label="First Name"
            placeholder="First Name"
          />
          <TextInput
            input={"formData"}
            setInput={"setFormData"}
            field="middle_name"
            label="Middle Name"
            placeholder="Middle Name"
          />
          <TextInput
            input={"formData"}
            setInput={"setFormData"}
            field="last_name"
            label="Last Name"
            placeholder="Last Name"
          />
        </div>

        <div className="flex gap-x-7 flex-col md:flex-row">
          <TextInput
            input={"formData"}
            setInput={"setFormData"}
            field="registration_number"
            label="Admission Number"
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

        <div className="flex gap-x-7 flex-col md:flex-row">
          <TextInput
            input={"formData"}
            setInput={"setFormData"}
            field="lhome_location"
            label="Home Location"
            placeholder="Enter home location"
          />
          <DateTimeInput
            input={"formData"}
            setInput={"setFormData"}
            field="dob"
            label="Date of Birth"
          />
          <DateTimeInput
            input={"formData"}
            setInput={"setFormData"}
            field="doa"
            label="Date of Admission"
          />
        </div>
        <FileInput label="Upload Passport " />
        <FileInput label="Upload Birth Certificate " />

        <SelectInput
          input={"formData"}
          setInput={"setFormData"}
          field="grade"
          label="Grade"
          stateInput=""
          setStateInput={() => {}}
        >
          <option value="">-- Grade --</option>
          <option value={1}>Grade 1</option>
          <option value={2}>Grade 2</option>
          <option value={3}>Grade 3</option>
          <option value={4}>Grade 4</option>
          <option value={5}>Grade 5</option>
        </SelectInput>
        <SelectInput
          input={"formData"}
          setInput={"setFormData"}
          field="stream"
          label="Stream"
          stateInput=""
          setStateInput={() => {}}
        >
          <option value="">-- Stream --</option>
          <option value={1}>Green</option>
          <option value={2}>Blue</option>
          <option value={2}>Yellow</option>
          <option value={2}>Red</option>
        </SelectInput>
      </div>
    </div>
  );
};

export default StudentForm;
