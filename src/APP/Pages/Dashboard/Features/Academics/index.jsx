import React from "react";
import { Outlet } from "react-router-dom";

const Academics = () => {
  return (
    <div className="w-full">
      <Outlet />
    </div>
  );
};

export default Academics;
