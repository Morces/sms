import React, { useState, useEffect } from "react";
import TextInput from "../../../../../../../../../Components/Inputs/TextInput";
import TextArea from "../../../../../../../../../Components/Inputs/TextArea";
import Btn from "../../../../../../../../../Components/Button/Btn";
import SelectInput from "../../../../../../../../../Components/Inputs/SelectInput";
import { useNavigate } from "react-router-dom";

const TermForm = () => {
  const navigate = useNavigate();
  return (
    <div className="px-8 m-auto mt-8 mb-4 py-8">
      <div className="flex flex-col gap-y-2">
        <div className="flex gap-x-7 flex-col md:flex-row">
          <TextInput
            input={""}
            setInput={""}
            field="name"
            label="Program Name"
            placeholder="e.g Boarding"
          />
          <TextInput
            input={""}
            setInput={""}
            field="amount"
            label="Fees Per Term"
            placeholder="Fees per term"
          />
        </div>

        <TextArea
          input={""}
          setInput={""}
          field="description"
          label="Description"
          placeholder="Enter description here"
          rows={3}
        />
      </div>
      <div className="flex justify-between items-center">
        <Btn
          size="block"
          btn="primary"
          onClick={() => navigate("/dashboard/finance")}
        >
          Submit
        </Btn>
      </div>
    </div>
  );
};

export default TermForm;
