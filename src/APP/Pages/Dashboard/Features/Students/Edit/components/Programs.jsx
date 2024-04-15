import React, { useState, useEffect, useContext } from "react";
import Btn from "../../../../../../Components/Button/Btn";
import EditContext from "../EditContext";
import useAxios from "../../../../../../Hooks/useAxios";
import SelectInput from "../../../../../../Components/Inputs/SelectInput";

const Programs = () => {
  const { student, setStudent } = useContext(EditContext);
  const [input, setInput] = useState({});
  const { request, urls } = useAxios();

  useEffect(() => {}, []);

  async function getPrograms() {
    let res = await request({});
  }

  return (
    <div className="px-8 m-auto mt-8">
      <SelectInput
        input={"formData"}
        setInput={"setFormData"}
        field="programs"
        label="Programs"
        stateInput=""
        setStateInput={() => {}}
      >
        <option value="">-- Programs --</option>
        <option value={1}>Boarding</option>
        <option value={2}>Day Schoolar(Lunch)</option>
        <option value={3}>Day Schoolar(No Lunch)</option>
      </SelectInput>
    </div>
  );
};

export default Programs;
