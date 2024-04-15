import React, { useState, useEffect } from "react";
import TextInput from "../../../../../../Components/Inputs/TextInput";
import Btn from "../../../../../../Components/Button/Btn";
import { useNavigate } from "react-router-dom";
import useAxios from "../../../../../../Hooks/useAxios";

const ClassForm = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({});
  const { request, urls } = useAxios();

  async function submit() {
    const res = await request({
      req: urls.grades.add_grade,
      show_success: true,
      data: input,
      success_message: "Grade Added Successfully",
    });

    if (res !== "error") {
      navigate("/dashboard/grades");
    }
  }

  return (
    <div className="px-8 m-auto mt-8 mb-4 py-8">
      <div className="flex flex-col gap-y-2">
        <TextInput
          input={input}
          setInput={setInput}
          field="name"
          label="Grade Name"
          placeholder="Grade Name"
        />
      </div>
      <div className="flex justify-between items-center">
        <Btn size="block" btn="primary" onClick={() => submit()}>
          Submit
        </Btn>
      </div>
    </div>
  );
};

export default ClassForm;
