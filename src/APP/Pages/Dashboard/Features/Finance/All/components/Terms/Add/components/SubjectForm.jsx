import React, { useState, useEffect } from "react";
import TextInput from "../../../../../../../../../Components/Inputs/TextInput";
import Btn from "../../../../../../../../../Components/Button/Btn";
import SelectInput from "../../../../../../../../../Components/Inputs/SelectInput";
import { useNavigate } from "react-router-dom";
import useAxios from "../../../../../../../../../Hooks/useAxios";

const TermForm = () => {
  const [input, setInput] = useState({});
  const { request, urls } = useAxios();
  const navigate = useNavigate();
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    getGrades();
  }, []);

  async function getGrades() {
    const res = await request({
      req: urls.grades.all_grades,
    });
    if (res !== "error") {
      setGrades(res);
    }
  }

  async function submit() {
    const res = await request({
      req: urls.finance.create_term,
      data: input,
      show_success: true,
      success_message: "Term added successfully",
    });
    if (res !== "error") {
      navigate("/dashboard/finance");
    }
  }

  return (
    <div className="px-8 m-auto mt-8 mb-4 py-8">
      <div className="flex flex-col gap-y-2">
        <div className="flex gap-x-7 flex-col md:flex-row">
          <TextInput
            input={input}
            setInput={setInput}
            field="name"
            label="Term Name"
            placeholder="e.g Term 1 (PP1)"
          />
          <TextInput
            input={input}
            setInput={setInput}
            field="amount"
            label="School Fees"
            placeholder="School Fees"
          />
        </div>

        <SelectInput
          input={input}
          setInput={setInput}
          field="grade"
          label="Select Grade"
          stateInput=""
          setStateInput={() => {}}
        >
          <option value="">-- Select Grade --</option>
          {grades.map((grade) => (
            <option key={grade.id} value={grade.id}>
              {grade.name}
            </option>
          ))}
        </SelectInput>
      </div>
      <div className="flex justify-between items-center">
        <Btn size="block" btn="primary" onClick={() => submit()}>
          Submit
        </Btn>
      </div>
    </div>
  );
};

export default TermForm;
