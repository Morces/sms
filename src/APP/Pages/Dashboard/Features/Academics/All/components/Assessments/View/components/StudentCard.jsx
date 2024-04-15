import React from "react";
import defaultImage from "../../../../../../../../../Assets/default-image.png";

const StudentDetails = () => {
  return (
    <div className="mt-4 bg-white mr-5 rounded-lg p-5">
      <div className="flex justify-between items-center p-5 max-md:flex-col max-sm:flex-col">
        <div className="flex flex-col gap-6">
          <div className="flex max-md:flex-col max-sm:flex-col">
            <div className="flex flex-col gap-y-4  max-md:mt-8 max-sm-mt-8 max-md:mx-auto max-sm:mx-auto">
              <div className="grid grid-cols-2">
                <div className="flex flex-col items-start">
                  <h3 className="font-semibold text-lg">STUDENT NAME</h3>
                  <p className="text-base">John Doe</p>
                </div>
                <div className="flex flex-col items-start">
                  <h3 className="font-semibold text-lg">ADMISSION NUMBER</h3>
                  <p className="text-base">8488</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-2">
                <div className="flex flex-col items-start">
                  <h3 className="font-semibold text-lg">DATE of BIRTH</h3>
                  <p className="text-base">03/20/2023</p>
                </div>
                <div className="flex flex-col items-start">
                  <h3 className="font-semibold text-lg">DATE of ADMISSION</h3>
                  <p className="text-base">03/20/2023</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-y-4 mt-4 max-md:grid-cols-2">
            <div className="flex flex-col items-start">
              <h3 className="font-semibold text-lg">GENDER</h3>
              <p className="text-base">Male</p>
            </div>

            <div className="flex flex-col items-start">
              <h3 className="font-semibold text-lg">GRADE</h3>
              <p className="text-base">GRADE 1</p>
            </div>
            <div className="flex flex-col items-start">
              <h3 className="font-semibold text-lg">STREAM</h3>
              <p className="text-base">Red</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
