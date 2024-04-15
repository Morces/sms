import React, { useState, useEffect } from "react";
import Btn from "../../../../../../../../../../../../../Components/Button/Btn";
import SelectInput from "../../../../../../../../../../../../../Components/Inputs/SelectInput";
import { useNavigate, useParams } from "react-router-dom";

const MathsForm = () => {
  const navigate = useNavigate();
  const id = useParams();
  return (
    <div className="px-8 m-auto mt-8 mb-4 py-8">
      <div className="flex flex-col gap-y-2">
        <SelectInput
          input={"formData"}
          setInput={"setFormData"}
          field="role"
          label="Reading Numbers 1-100 in symbols"
          stateInput=""
          setStateInput={() => {}}
        >
          <option value="">-- Select --</option>
          <option value={1}>Exceeding Expection</option>
          <option value={2}>Meeting Expectation</option>
          <option value={3}>Approaching Expectation</option>
          <option value={4}>Below Expectation</option>
        </SelectInput>

        <SelectInput
          input={"formData"}
          setInput={"setFormData"}
          field="role"
          label="Use locally available concrete objects to represent on 1-100"
          stateInput=""
          setStateInput={() => {}}
        >
          <option value="">-- Select --</option>
          <option value={1}>Exceeding Expection</option>
          <option value={2}>Meeting Expectation</option>
          <option value={3}>Approaching Expectation</option>
          <option value={4}>Below Expectation</option>
        </SelectInput>

        <SelectInput
          input={"formData"}
          setInput={"setFormData"}
          field="role"
          label="Count numbers backward up to 100"
          stateInput=""
          setStateInput={() => {}}
        >
          <option value="">-- Select --</option>
          <option value={1}>Exceeding Expection</option>
          <option value={2}>Meeting Expectation</option>
          <option value={3}>Approaching Expectation</option>
          <option value={4}>Below Expectation</option>
        </SelectInput>
        <SelectInput
          input={"formData"}
          setInput={"setFormData"}
          field="role"
          label="Identify place value up to 100"
          stateInput=""
          setStateInput={() => {}}
        >
          <option value="">-- Select --</option>
          <option value={1}>Exceeding Expection</option>
          <option value={2}>Meeting Expectation</option>
          <option value={3}>Approaching Expectation</option>
          <option value={4}>Below Expectation</option>
        </SelectInput>
        <SelectInput
          input={"formData"}
          setInput={"setFormData"}
          field="role"
          label="Read and write numbers in words up to 20"
          stateInput=""
          setStateInput={() => {}}
        >
          <option value="">-- Select --</option>
          <option value={1}>Exceeding Expection</option>
          <option value={2}>Meeting Expectation</option>
          <option value={3}>Approaching Expectation</option>
          <option value={4}>Below Expectation</option>
        </SelectInput>
        <SelectInput
          input={"formData"}
          setInput={"setFormData"}
          field="role"
          label="Identify missing numbers in patterns up to 100"
          stateInput=""
          setStateInput={() => {}}
        >
          <option value="">-- Select --</option>
          <option value={1}>Exceeding Expection</option>
          <option value={2}>Meeting Expectation</option>
          <option value={3}>Approaching Expectation</option>
          <option value={4}>Below Expectation</option>
        </SelectInput>
        <SelectInput
          input={"formData"}
          setInput={"setFormData"}
          field="role"
          label="Identify a 1/2 as part of a whole"
          stateInput=""
          setStateInput={() => {}}
        >
          <option value="">-- Select --</option>
          <option value={1}>Exceeding Expection</option>
          <option value={2}>Meeting Expectation</option>
          <option value={3}>Approaching Expectation</option>
          <option value={4}>Below Expectation</option>
        </SelectInput>
        <SelectInput
          input={"formData"}
          setInput={"setFormData"}
          field="role"
          label="Identify a 1/4 as part of a whole"
          stateInput=""
          setStateInput={() => {}}
        >
          <option value="">-- Select --</option>
          <option value={1}>Exceeding Expection</option>
          <option value={2}>Meeting Expectation</option>
          <option value={3}>Approaching Expectation</option>
          <option value={4}>Below Expectation</option>
        </SelectInput>
        <SelectInput
          input={"formData"}
          setInput={"setFormData"}
          field="role"
          label="Ass 3 single digit numbers up tp a sum of 20"
          stateInput=""
          setStateInput={() => {}}
        >
          <option value="">-- Select --</option>
          <option value={1}>Exceeding Expection</option>
          <option value={2}>Meeting Expectation</option>
          <option value={3}>Approaching Expectation</option>
          <option value={4}>Below Expectation</option>
        </SelectInput>
        <SelectInput
          input={"formData"}
          setInput={"setFormData"}
          field="role"
          label="Add 2 digit number to a 2 difit number without and with regrouping with sum not exceeding 100"
          stateInput=""
          setStateInput={() => {}}
        >
          <option value="">-- Select --</option>
          <option value={1}>Exceeding Expection</option>
          <option value={2}>Meeting Expectation</option>
          <option value={3}>Approaching Expectation</option>
          <option value={4}>Below Expectation</option>
        </SelectInput>
      </div>
      <div className="flex justify-between items-center">
        <Btn
          size="block"
          btn="primary"
          onClick={() => navigate(`/dashboard/academics/assessments/view/${id}`)}
        >
          Submit
        </Btn>
      </div>
    </div>
  );
};

export default MathsForm;
