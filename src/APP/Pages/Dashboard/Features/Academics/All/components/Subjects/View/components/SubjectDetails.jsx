import React from "react";
import Students from "./Students/index";

const SubjectDetails = () => {
  return (
    <div className="mt-4 w-full">
      <div className="flex flex-row md:flex-col items-center px-5 shadow-lg rounded-lg py-7">
        <div className="w-full flex flex-col gap-6 justify-between md:flex-row md:gap-6 p-3">
          <div className="flex flex-col">
            <h3 className="font-semibold text-lg">SUBJECT NAME</h3>
            <p className="text-base mt-2">History</p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-lg">SUBJECT CODE</h3>
            <p className="text-base mt-2">H-101</p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-lg">SUBJECT TYPE</h3>
            <p className="text-base mt-2">Major</p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-lg">Department</h3>
            <p className="text-base mt-2">Humanity</p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-6 justify-between md:flex-row md:gap-6 p-3">
          <div className="flex flex-col">
            <h3 className="font-semibold text-lg">GRADE</h3>
            <p className="text-base mt-2">Grade 1</p>
          </div>
        </div>
      </div>

      <Students />
    </div>
  );
};

export default SubjectDetails;
