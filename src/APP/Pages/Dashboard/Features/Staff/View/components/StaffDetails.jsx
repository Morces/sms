import React from "react";
import defaultImage from "../../../../../../Assets/default-image.png";

const StaffDetails = () => {
  return (
    <div className="mt-4 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center p-5">
        <div className="flex flex-col items-center  md:flex-row md:justify-center gap-6">
          <img
            src={defaultImage}
            alt="Avatar"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full"
          />
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4  mt-4">
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg">STAFF NAME</h3>
              <p className="text-base">John Doe</p>
            </div>
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg">STAFF NUMBER</h3>
              <p className="text-base">ST07</p>
            </div>
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg">ROLE</h3>
              <p className="text-base">Teacher</p>
            </div>
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg">PHONE NUMBER</h3>
              <p className="text-base">0712345678</p>
            </div>
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg">GENDER</h3>
              <p className="text-base">Male</p>
            </div>
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg">HOME LOCATION</h3>
              <p className="text-base">Mombasa</p>
            </div>
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg">NATIONALITY</h3>
              <p className="text-base">Kenyan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffDetails;
