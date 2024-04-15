import Modal from "./BasicModal";

import {
  MdOutlineWifiTetheringErrorRounded,
  MdOutlineReportGmailerrorred,
} from "react-icons/md";

const RequestModal = ({
  showRequestModal,
  setShowRequestModal,
  modal_type,
  modal_message,
}) => {
  return (
    <Modal showModal={showRequestModal} setShowModal={setShowRequestModal}>
      <div className=" p-2">
        <div className=" w-full flex flex-col items-center justify-center">
          <p className=" text-8xl animate-pulse text-red">
            {modal_type === "network" ? (
              <MdOutlineWifiTetheringErrorRounded />
            ) : (
              <MdOutlineReportGmailerrorred />
            )}
          </p>
          <p className=" text-2xl mt-4 mb-4">{modal_message}</p>
        </div>
      </div>
    </Modal>
  );
};

export default RequestModal;
