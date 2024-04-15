import React from "react";
import vector from "../../Assets/Vector.svg";
import ellipse from "../../Assets/Ellipse.png";
import FormSection from "./components/FormSection";
import login from "../../Assets/signin.svg";

const SignIn = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative">
      <img
        src={vector}
        alt="Vector"
        className="absolute top-0 right-0 z-0"
      />
      <img
        src={ellipse}
        alt="Ellipse"
        className="absolute bottom-0 -left-12 z-0"
      />

      <div className="w-4/5 md:w-full max-w-screen-md mx-auto p-5 relative z-10">
        <div className="flex justify-between items-center shadow-lg rounded-lg p-5 bg-white">
          <div className="w-1/2 hidden md:block">
            <img src={login} alt="Login" className="" />
          </div>
          <div className="w-full md:w-1/2 p-5 sm:w-full sm:m-auto">
            <FormSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
