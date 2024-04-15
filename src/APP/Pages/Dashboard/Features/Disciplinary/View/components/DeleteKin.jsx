import { useRef, useState, useEffect } from "react";

import BasicModal from "../../../../../../Components/Modals/BasicModal";

import useHandleFormError from "../../../../../../Hooks/useHandleFormError";

import useAxios from "../../../../../../Hooks/useAxios";

import Btn from "../../../../../../Components/Button/Btn";

import useApp from "../../../../../../Hooks/useApp";

const DeleteKin = ({
  showModal = false,
  setShowModal,
  setKins,
  kins,
  activeKin,
  setActiveKin,
}) => {
  // const input = useRef({ form: {}, err: {} });
  // const [showError, setShowError] = useState(0);

  // const { setModalMessage, setShowSuccessModal } = useApp();

  // const request = useAxios();


  // const formErrors = useHandleFormError();

  // async function submit() {
  //   await setShowError(showError + 1);

  //   if (formErrors({ input })) return;

  //   let res = await request({
  //     method: "DELETE",
  //     url: `patient/kin/${kins[activeKin].id}`,
  //   });

  //   if (res === "error") return;

  //   await setModalMessage("Kin Deleted");
  //   await setShowSuccessModal(true);
  //   await setShowModal(false);

  //   await setKins((prevKins) => {
  //     let newkins = prevKins.filter((prevKin) =>
  //       prevKin.id === res.id ? false : true
  //     );
  //     if (newkins.length > 0) {
  //       setActiveKin(0);
  //     } else {
  //       setActiveKin(null);
  //     }
  //     return newkins;
  //   });
  // }

  // if (activeKin == null) return;

  return (
    <BasicModal showModal={showModal} setShowModal={setShowModal}>
      <div className="flex flex-col  gap-y-8 p-3" style={{ width: "30em" }}>
        <div style={{ marginTop: "-2.5em" }}>
          <p className=" text-2xl font-DM-Med text-red">
            Are you sure you want to delete{" "}
            <span className=" text-black">
              {/* {kins[activeKin].name} ? */}
            </span>
          </p>
        </div>
        <Btn size="block" onClick={() => {}}>
          Delete
        </Btn>
      </div>
    </BasicModal>
  );
};

export default DeleteKin;
