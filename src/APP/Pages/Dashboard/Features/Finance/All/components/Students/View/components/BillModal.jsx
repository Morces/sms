import { useRef, useState, useEffect } from "react";

import BasicModal from "../../../../../../../../../Components/Modals/BasicModal";

import useHandleFormError from "../../../../../../../../../Hooks/useHandleFormError";

import useAxios from "../../../../../../../../../Hooks/useAxios";

import { useParams } from "react-router-dom";

import Btn from "../../../../../../../../../Components/Button/Btn";

import TextInput from "../../../../../../../../../Components/Inputs/TextInput";

import useApp from "../../../../../../../../../Hooks/useApp";

const BillStudent = ({ showModal = false, setShowModal }) => {
  // const input = useRef({ form: {}, err: {} });
  // const [changes, setChanges] = useState(0);
  // const [showError, setShowError] = useState(0);

  // const { setModalMessage, setShowSuccessModal } = useApp();

  // const { findAll } = usePouch();

  // const request = useAxios();

  // const formErrors = useHandleFormError();

  // const { id } = useParams();

  // async function submit() {
  //   await setShowError(showError + 1);

  //   if (formErrors({ input })) return;

  //   let res = await request({
  //     method: "POST",
  //     url: "patient/kin",
  //     data: {
  //       ...input.current.form,
  //       relationship_id: parseInt(input.current.form.relationship_id),
  //       patient_id: parseInt(id),
  //     },
  //   });

  //   if (res === "error") return;

  //   await setModalMessage("Next of Kin Added");
  //   await setShowSuccessModal(true);
  //   await setShowModal(false);
  //   await init();
  // }

  return (
    <BasicModal showModal={showModal} setShowModal={setShowModal}>
      <div className="flex flex-col  gap-y-8 p-3" style={{ width: "30em" }}>
        <h2 className="font-DM-Reg text-xl text-black text-center">
          Bill Student
        </h2>
        <div style={{ marginTop: "0.5em" }}>
          <TextInput
            input={"formData"}
            setInput={"setFormData"}
            field="amount"
            label="Amount"
            placeholder=""
          />
        </div>

        <div className="flex w-full justify-center items-center bg-primary p-4 rounded-lg cursor-pointer">
          <p className="text-white">Bill</p>
        </div>
      </div>
    </BasicModal>
  );
};

export default BillStudent;
