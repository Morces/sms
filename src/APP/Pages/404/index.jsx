import React from "react";
import ellipse from "../../Assets/Ellipse.png";
import vector from "../../Assets/Vector.svg";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/logo.png";

const index = () => {
  const navigation = useNavigate();
  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative">
      <img src={vector} alt="Vector" className="absolute top-0 right-0 z-0" />
      <img
        src={ellipse}
        alt="Ellipse"
        className="absolute bottom-0 -left-12 z-0"
      />

      <img src={logo} alt="" />

      <div className="w-4/5 md:w-full max-w-screen-md mx-auto p-5">
        <div className="flex flex-col justify-between items-center">
          <h3 className="text-2xl">404</h3>
          <p
            className="mt-3 cursor-pointer underline underline-offset-4"
            onClick={() => navigation("/dashboard")}
          >
            Go to dashboard
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
