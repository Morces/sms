import React, { useState, useEffect } from "react";
import TextInput from "../../../../../../Components/Inputs/TextInput";
import Btn from "../../../../../../Components/Button/Btn";
import { useNavigate, useParams } from "react-router-dom";
import useAxios from "../../../../../../Hooks/useAxios";

const StreamForm = () => {
  const [input, setInput] = useState({});
  const { request, urls } = useAxios();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const res = await request({
      req: {
        url: urls.grades.edit_stream.url + `${id}/`,
        method: "PUT",
      },
      data: input,
    });
    if (res !== "error") {
      navigate("/dashboard/streams");
    }
  };

  return (
    <div className="px-8 m-auto mt-8 mb-4 py-8">
      <div className="flex flex-col gap-y-2">
        <TextInput
          input={input}
          setInput={setInput}
          field="name"
          label="Stream Name"
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

export default StreamForm;
