import React, { useRef, useContext, useState } from "react";
import SelectInput from "../../../../../../../../Components/Inputs/SelectInput";
import FilterModal from "../../../../../../../../Components/Modals/FilterModal";

const TblFilter = ({ showFilter, setShowFilter }) => {
  
  return (
    <FilterModal
      showFilter={showFilter}
      setShowFilter={setShowFilter}
      apply={() => {}}
    >
      <div>
        <h2 className=" font-DM-Bold text-xl my-3 text-cadet_grey">GENDER</h2>
        <SelectInput
          input={"formData"}
          setInput={"setFormData"}
          field="role"
          label="Select Grade"
          stateInput=""
          setStateInput={() => {}}
        >
          <option value="">-- Select Class --</option>
          <option value={1}>Grade 1</option>
          <option value={2}>Grade 2</option>
          <option value={3}>Grade 3</option>
          <option value={4}>Grade 4</option>
        </SelectInput>
      </div>
    </FilterModal>
  );
};

export default TblFilter;
