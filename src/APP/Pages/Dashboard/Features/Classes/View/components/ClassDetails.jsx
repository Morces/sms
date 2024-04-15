import React from "react";
import Students from "./Students/index";

const ClassDetails = () => {
  return (
    <div className="mt-4 w-full">
      <div className="flex flex-row items-center px-5 shadow-lg rounded-lg py-7">
        <div className="w-full flex flex-col gap-6 justify-between md:flex-row md:gap-6 p-3">
          <div className="flex flex-col">
            <h3 className="font-semibold text-lg">CLASS NAME</h3>
            <p className="text-base mt-2">Grade 1</p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-lg">STREAM</h3>
            <p className="text-base mt-2">Blue</p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-lg">CLASS TEACHER</h3>
            <p className="text-base mt-2">Mr John Doe</p>
          </div>
        </div>
      </div>

      <Students />
    </div>
  );
};

export default ClassDetails;
