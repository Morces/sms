import React, { useState, useEffect } from "react";
import Btn from "../../../../../../Components/Button/Btn";

import SelectInput from "../../../../../../Components/Inputs/SelectInput";

const Programs = () => {
  return (
    <div className="flex gap-x-7 flex-col md:flex-row">
      <SelectInput
        input={"formData"}
        setInput={"setFormData"}
        field="term"
        label="Term"
        stateInput=""
        setStateInput={() => {}}
      >
        <option value="">-- Terms --</option>
        <option value={1}>Term 1 (PP1) </option>
        <option value={2}>Term 2 (PP1)</option>
        <option value={3}>Term 3 (PP1)</option>
      </SelectInput>

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
