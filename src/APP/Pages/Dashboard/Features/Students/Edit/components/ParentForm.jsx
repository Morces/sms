import React, { useState, useEffect, useContext } from "react";
import TextInput from "../../../../../../Components/Inputs/TextInput";
import Btn from "../../../../../../Components/Button/Btn";
import DateTimeInput from "../../../../../../Components/Inputs/DateInput";
import SelectInput from "../../../../../../Components/Inputs/SelectInput";
import FileInput from "../../../../../../Components/Inputs/FileInput";
import Email from "../../../../../../Components/Inputs/Email";
import EditContext from "../EditContext";
import useAxios from "../../../../../../Hooks/useAxios";

const ParentForm = () => {
  const { student, setStudent } = useContext(EditContext);
  const [input, setInput] = useState({});
  return (
    <div className="px-8 m-auto mt-8">
      <div className="flex flex-col gap-y-2">
        <TextInput
          initial={{ parent_name: student.parent_name }}
          input={input}
          setInput={setInput}
          field="parent_name"
          label="Parent Full Name"
          placeholder="Parent Name"
        />
        <div className="flex gap-x-7 flex-col md:flex-row">
          <Email
            initial={student.parent_email}
            required={false}
            label="Email"
            field="email"
            id="email"
            input={input}
            setInput={setInput}
            onChange={() => {}}
            placeholder="example@email.com"
          />
          <TextInput
            initial={{ parent_idno: student.parent_idno }}
            input={input}
            setInput={setInput}
            field="parent_idno"
            label="Parent ID Number"
            placeholder="Enter ID number"
          />
        </div>

        <div className="flex gap-x-7 flex-col md:flex-row">
          <TextInput
            initial={{ parent_phone: student.parent_phone }}
            input={input}
            setInput={setInput}
            field="parent_phone"
            label="Primary Phone Number"
            placeholder="+254..."
          />
          <TextInput
            initial={{ parent_phone2: student.parent_phone2 }}
            input={input}
            setInput={setInput}
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
