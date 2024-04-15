import React, { useState, useEffect } from "react";
import { SlArrowRightCircle } from "react-icons/sl";

import { FaUserEdit } from "react-icons/fa";

import { MdDelete } from "react-icons/md";

const Balances = () => {
  return (
    <>
      {" "}
      <div className=" w-full">
        <div className="mt-5 pl-4">
          <h6 className="font-medium"></h6>
          <div className="mt-1">
            <h5 className="mb-2 text-xl font-medium tracking-tight text-cadet_grey ">
              Balance :
              <span className="mb-3 font-normal text-black "> Ksh 10,000</span>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Balances;
