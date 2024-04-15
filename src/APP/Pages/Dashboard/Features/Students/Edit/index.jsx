import React, { useContext, useEffect, useState } from "react";
import Steps from "./components/Steps";
import EditContext from "./EditContext";
import BreadCrumb from "../../../../../Components/BreadCrumb";
import { useNavigate, useParams } from "react-router-dom";
import useAxios from "../../../../../Hooks/useAxios";

const index = () => {
  const [step, setStep] = useState(-1);
  const [currentStep, setCurrentStep] = useState(0);
  const [student, setStudent] = useState({});
  const navigate = useNavigate();
  const { request, urls } = useAxios();
  const { id } = useParams();

  useEffect(() => {
    getStudent();
  }, []);

  async function getStudent() {
    const res = await request({
      req: {
        method: "GET",
        url: urls.students.single_student.url + `/${id}/`,
      },
    });

    if (res !== "error") {
      setStudent(res);
    }
  }

  const handleBack = () => {
    if (step === -1) return;
    setStep((c) => c - 1);
  };

  const handleSubmit = () => {
    navigate("/dashboard/students");
  };

  return (
    <EditContext.Provider
      value={{
        step,
        setStep,
        currentStep,
        setCurrentStep,
        handleSubmit,
        student,
        setStudent,
      }}
    >
      <BreadCrumb />
      <div className="rounded-md bg-white mr-4 mt-4">
        <Steps currentStep={step} />
      </div>
    </EditContext.Provider>
  );
};

export default index;
