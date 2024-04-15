import React, { useState, useEffect } from "react";
import Btn from "../../../../../../Components/Button/Btn";

import SelectInput from "../../../../../../Components/Inputs/SelectInput";

const Programs = () => {
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
