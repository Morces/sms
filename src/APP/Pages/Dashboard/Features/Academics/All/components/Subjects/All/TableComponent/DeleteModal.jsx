import React, { useContext } from "react";
import BasicModal from "../../../../../../../../../Components/Modals/BasicModal";
import Btn from "../../../../../../../../../Components/Button/Btn";
import { RiDeleteBin5Line } from "react-icons/ri";

const DeleteModal = ({ showDeleteModal, setShowDeleteModal }) => {
  if (showDeleteModal) {
    return (
      <BasicModal showModal={showDeleteModal} setShowModal={setShowDeleteModal}>
        <div className="m-auto p-5">
          <h2 class="text-center text-red text-xl font-bold  mb-6">
            Are you sure you want to delete this ?
          </h2>
          <div className="flex justify-between items-center">
            <Btn
              outline={true}
              btn="border"
              onClick={() => setShowDeleteModal(false)}
            >
              <p className="">Cancel</p>
            </Btn>
            <Btn
              outline={true}
              btn="border"
              onClick={() => navigate("/dashboard/academics")}
            >
              <div className="flex justify-between items-center gap-x-2">
                <RiDeleteBin5Line className="text-red" />
                <p className="">Confirm</p>
              </div>
            </Btn>
          </div>
        </div>
      </BasicModal>
    );
  }
};

export default DeleteModal;
