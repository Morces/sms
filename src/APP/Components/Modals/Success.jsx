import React, { useEffect } from "react";

import Modal from "./BasicModal";
import tick from "../../Assets/tick.svg";

const Success = ({ showSuccessModal, setShowSuccessModal, modal_message }) => {
  useEffect(() => {
    if (showSuccessModal === false) return;
    setTimeout(() => {
      setShowSuccessModal(false);
    }, 4000);
  }, [showSuccessModal]);

  return (
    <Modal showModal={showSuccessModal} setShowModal={setShowSuccessModal}>
      <div className=" p-2 ">
        <div className=" w-full flex flex-col items-center justify-center">
          <p className=" text-[50px]  text-primary">
            <img src={tick} alt="" className="tick-animation" />
          </p>
          <p className=" text-2xl mt-4 mb-4">{modal_message || "Success"}</p>
        </div>
      </div>
    </Modal>
  );
};

export default Success;
