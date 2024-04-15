import React, { useEffect } from "react";

import Modal from "./BasicModal";
import error from "../../Assets/error.svg";

import { BiErrorCircle } from "react-icons/bi";

const Error = ({ showErrorModal, setShowErrorModal, modal_message }) => {
  return (
    <Modal showModal={showErrorModal} setShowModal={setShowErrorModal}>
      <div className=" p-2">
        <div className=" w-full flex flex-col items-center justify-center">
          <p className=" text-8xl animate-pulse text-red">
            <img src={error} alt="" className="tick-animation" />
          </p>
          <p className=" text-2xl mt-4 mb-4">{modal_message}</p>
        </div>
      </div>
    </Modal>
  );
};

export default Error;
