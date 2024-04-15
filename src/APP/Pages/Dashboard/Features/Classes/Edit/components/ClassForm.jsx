import React, { useState, useEffect, useContext } from "react";
import TextInput from "../../../../../../Components/Inputs/TextInput";
import Btn from "../../../../../../Components/Button/Btn";
import { useNavigate, useParams } from "react-router-dom";
import AddContext from "../AddContext";
import useAxios from "../../../../../../Hooks/useAxios";

const ClassForm = () => {
  const { grade, setGrade } = useContext(AddContext);
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const { request, urls } = useAxios();
  const { id } = useParams();

  const handleSubmit = async () => {
    const res = await request({
      req: {
        url: urls.grades.edit_grade.url + `${id}/`,
        method: "PUT",
      },
      data: input,
    });
    console.log(res);
    if (res !== "error") {
      setGrade(res);
      navigate("/dashboard/grades");
    }
  };

  return (
    <div className="px-8 m-auto mt-8 mb-4 py-8">
      <div className="flex flex-col gap-y-2">
        <TextInput
          input={input}
          setInput={setInput}
          field="name"
          label="Class Name"
          placeholder="Name"
        />
      </div>
      <div className="flex justify-between items-center">
        <Btn size="block" btn="primary" onClick={() => handleSubmit()}>
          Submit
        </Btn>
      </div>
    </div>
  );
};

export default ClassForm;
