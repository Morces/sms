import { useRef, useState, useEffect } from "react";

import BasicModal from "../../../../../../Components/Modals/BasicModal";

import useHandleFormError from "../../../../../../Hooks/useHandleFormError";

import useAxios from "../../../../../../Hooks/useAxios";

import Btn from "../../../../../../Components/Button/Btn";

// import useApp from "../../../../../../Hooks/useApp";

import { useNavigate, useParams } from "react-router-dom";

import TextInput from "../../../../../../Components/Inputs/TextInput";
import SelectInput from "../../../../../../Components/Inputs/SelectInput";


import useApp from "../../../../../../Hooks/useApp";

const EditKin = ({ showModal = false, setShowModal, kin, relations, init }) => {
  // const input = useRef({ form: {}, err: {} });
  // const [showError, setShowError] = useState(0);

  // const navigate = useNavigate();

  // const { setModalMessage, setShowSuccessModal } = useApp();

  // const request = useAxios();

  // const formErrors = useHandleFormError();

  // const { id } = useParams();

  // async function submit() {
  //   await setShowError(showError + 1);

  //   if (formErrors({ input })) return;

  //   let res = await request({
  //     method: "PUT",
  //     url: "patient/kin",
  //     data: {
  //       ...input.current.form,
  //       relationship_id: parseInt(input.current.form.relationship),
  //       patient_id: parseInt(id),
  //       id: kin.id,
  //     },
  //   });

  //   if (res === "error") return;

  //   await setModalMessage("Next of Kin Edited");
  //   await setShowSuccessModal(true);
  //   await setShowModal(false);
  //   await init();
  // }

  return (
    <BasicModal showModal={showModal} setShowModal={setShowModal}>
      <div className="flex flex-col  gap-y-8 p-3" style={{ width: "30em" }}>
        <h2 className="font-DM-Reg text-xl text-black text-center">
          Edit Next Of Kin
        </h2>
        <div style={{ marginTop: "-2.5em" }}>
          <TextInput
            input={"formData"}
            setInput={"setFormData"}
            field="parent_name"
            label="Full Name"
            placeholder=""
          />

          <TextInput
            input={"formData"}
            setInput={"setFormData"}
            field="parent_phone"
            label="Primary Phone Number"
            placeholder="+254..."
          />

          <SelectInput
            input={"formData"}
            setInput={"setFormData"}
            field="relationship"
            label="Relationship"
            stateInput=""
            setStateInput={() => {}}
          >
            <option value="">-- Relationship --</option>
            <option value={1}>Father</option>
            <option value={2}>Mother</option>
            <option value={3}>Brother</option>
            <option value={4}>Sister</option>
          </SelectInput>

          <SelectInput
            input={"formData"}
            setInput={"setFormData"}
            field="gender"
            label="Gender"
            stateInput=""
            setStateInput={() => {}}
          >
            <option value="">-- Gender --</option>
            <option value={1}>Male</option>
            <option value={2}>Female</option>
          </SelectInput>
        </div>
        <Btn onClick={() => {}}>Save</Btn>
      </div>
    </BasicModal>
  );
};

export default EditKin;
