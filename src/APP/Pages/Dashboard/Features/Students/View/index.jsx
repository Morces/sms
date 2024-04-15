import React, { useEffect, useState } from "react";
import StudentDetails from "./components/StudentDetails";
import { useNavigate, useParams } from "react-router-dom";
import useAxios from "../../../../../Hooks/useAxios";
import ParentDetails from "./components/ParentDetails";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const index = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({});
  const navigate = useNavigate();
  const { request, urls } = useAxios();

  useEffect(() => {
    getStudent();
  }, []);

  const getStudent = async () => {
    const res = await request({
      req: {
        method: "GET",
        url: urls.students.single_student.url + `/${id}/`,
      },
    });

    if (res !== "error") {
      setStudent(res);
    }
  };

  return (
    <>
      <div className="bg-white p-5 mt-5 mr-4 flex justify-between max-md:flex-col max-sm:flex-col">
        <StudentDetails student={student} />
        <div className="w-1/2 max-md:w-full max-sm:w-full">
          <ParentDetails student={student} />
        </div>
      </div>
      <div
        className="ml-2 mt-5 flex gap-x-2 items-center cursor-pointer"
        onClick={() => navigate("/dashboard/students")}
      >
        <IoArrowBackCircleOutline className="text-4xl" />
        <span className="font-bold">Go Back</span>
      </div>
    </>
  );
};

export default index;
