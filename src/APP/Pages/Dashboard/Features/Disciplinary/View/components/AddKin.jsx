import { useRef, useState, useEffect } from "react";

import BasicModal from "../../../../../../Components/Modals/BasicModal";

import useHandleFormError from "../../../../../../Hooks/useHandleFormError";

import useAxios from "../../../../../../Hooks/useAxios";

import { useParams } from "react-router-dom";

import Btn from "../../../../../../Components/Button/Btn";

import TextInput from "../../../../../../Components/Inputs/TextInput";
import SelectInput from "../../../../../../Components/Inputs/SelectInput";

import useApp from "../../../../../../Hooks/useApp";

const AddKin = ({
  showModal = false,
  setShowModal,
  setKins,
  activeKin,
  setActiveKin,
  relations,
  init,
}) => {
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
          Add Next Of Kin
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
        <Btn click={() => {}}>Save</Btn>
      </div>
    </BasicModal>
  );
};

export default AddKin;
