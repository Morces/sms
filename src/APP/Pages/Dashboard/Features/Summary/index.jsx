import React from "react";
import TileAnalytics from "./TileAnalytics";
import Chart from "./StudentsChart";
import ClassChart from "./ClassChart";
import StaffChart from "./StaffChart";

const index = () => {
  return (
    <div className="w-full mb-10">
      <TileAnalytics />
      <div className="flex justify-center items-center mt-8">
        <div className="flex flex-col text-center gap-y-4">
          <h3
            className="text-4xl font-extrabold text-yankees_blue"
            style={{ fontFamily: "karla", fontWeight: 800 }}
          >
            Ocean Of Wonders
          </h3>
          <p className="font-medium text-2xl">P.O BOX 0002-0000</p>
        </div>
      </div>
      <div className="w-full mr-4 flex justify-between items-center mt-8 flex-col md:flex-row sm-flex-row">
        <div className="w-7/12 p-4 rounded-lg bg-white">
          <Chart />
        </div>
        <div className="w-4/12 mx-auto p-4 rounded-lg bg-white">
          <ClassChart />
        </div>
      </div>
      <div className="mt-[5%] w-11/12  p-4 rounded-lg bg-white">
        <StaffChart />
      </div>
    </div>
  );
};

export default index;
