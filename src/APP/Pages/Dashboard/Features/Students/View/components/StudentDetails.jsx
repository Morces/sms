import React from "react";
import defaultImage from "../../../../../../Assets/default-image.png";
import { convDate } from "../../../../../../Utils/Time";

const StudentDetails = ({ student }) => {
  return (
    <div className="mt-4">
      <div className="flex justify-between items-center p-5 max-md:flex-col max-sm:flex-col">
        <div className="flex flex-col gap-6">
          <div className="flex gap-x-6 max-md:flex-col max-sm:flex-col">
            <img
              src={defaultImage}
              alt=""
              className="w-32 h-28 max-md:m-auto max-sm:m-auto"
            />
            <div className="flex flex-col gap-y-4 ml-6 max-md:mt-8 max-sm-mt-8 max-md:mx-auto max-sm:mx-auto">
              <div className="grid grid-cols-2 gap-x-2">
                <div className="flex flex-col items-start">
                  <h3 className="font-semibold text-lg">STUDENT NAME</h3>
                  <p className="text-base">
                    {`${student?.first_name} ` + `${student?.last_name}`}
                  </p>
                </div>
                <div className="flex flex-col items-start">
                  <h3 className="font-semibold text-lg">ADMISSION NUMBER</h3>
                  <p className="text-base">{student?.registration_number}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-2">
                <div className="flex flex-col items-start">
                  <h3 className="font-semibold text-lg">DATE of BIRTH</h3>
                  <p className="text-base">{convDate(student?.dob)}</p>
                </div>
                <div className="flex flex-col items-start">
                  <h3 className="font-semibold text-lg">DATE of ADMISSION</h3>
                  <p className="text-base">{convDate(student?.doa)}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-y-4 mt-4 max-md:grid-cols-2">
            <div className="flex flex-col items-start">
              <h3 className="font-semibold text-lg">GENDER</h3>
              <p className="text-base">
                {student?.gender == 1 ? "Male" : "Female"}
              </p>
            </div>
            <div className="flex flex-col items-start">
              <h3 className="font-semibold text-lg">HOME LOCATION</h3>
              <p className="text-base">{student?.home_location}</p>
            </div>
            <div className="flex flex-col items-start">
              <h3 className="font-semibold text-lg">NATIONALITY</h3>
              <p className="text-base">{student?.nationality}</p>
            </div>
            <div className="flex flex-col items-start">
              <h3 className="font-semibold text-lg">GRADE</h3>
              <p className="text-base">{student?.grade?.name}</p>
            </div>
            <div className="flex flex-col items-start">
              <h3 className="font-semibold text-lg">STREAM</h3>
              <p className="text-base">{student?.stream?.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
