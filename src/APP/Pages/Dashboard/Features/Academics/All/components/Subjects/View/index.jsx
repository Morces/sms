import React, { useEffect, useState } from "react";
import SubjectDetails from "./components/SubjectDetails";
import { useNavigate, useParams } from "react-router-dom";
import useAxios from "../../../../../../../../Hooks/useAxios";
import Breadcrumb from "../../../../../../../../Components/BreadCrumb";
import StudentContext from "../../../context/AssessmentContxt";
import DummyStudents from "../data/dummyStudents";

const Index = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [students, setStudents] = useState(DummyStudents);
  const [search, setSearch] = useState("");

  const request = useAxios();

  return (
    <StudentContext.Provider
      value={{
        students,
        setStudents,
        search,
        setSearch,
      }}
    >
      <Breadcrumb />
      <div className="bg-white p-5 mt-5 mr-4 rounded-lg">
        <SubjectDetails />
      </div>
    </StudentContext.Provider>
  );
};

export default Index;
