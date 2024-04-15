import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
import Btn from "../../../../../../Components/Button/Btn";
import Details from "./GuardianDetails";

const ParentDetails = ({ student }) => {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="mb-5 mt-5 p-4">
        <div className="flex justify-between mb-5">
          <h5 className="font-bold inline-flex items-center">
            GUARDIAN DETAILS
          </h5>
        </div>

        <hr className="w-full" />
        <Details student={student} />
      </div>
    </div>
  );
};

export default ParentDetails;
