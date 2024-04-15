import React, { useRef, useState, useContext, useEffect } from "react";
import ClassContext from "../context/ClassContext";
import TableComponent from "./TableComponent";
import dummyStudents from "../data/dummyStudents";
import grade from "../data/grades";
import DeleteModal from "./TableComponent/DeleteModal";
import useAxios from "../../../../../Hooks/useAxios";
import { useNavigate } from "react-router-dom";

const index = () => {
  // const [grade, setGrade] = useState([]);
  const navigate = useNavigate();
  const [students, setStudents] = useState(dummyStudents);
  const [search, setSearch] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const tableRef = useRef();
  const { request, urls } = useAxios();

  useEffect(() => {
    // getGrades();
  }, []);

  // async function getGrades() {
  //   const res = await request({
  //     req: urls.grades.all_grades,
  //   });

  //   if (res !== "error") {
  //     setGrade(res);
  //   }
  // }

  return (
    <ClassContext.Provider
      value={{
        grade,
        // setGrade,
        students,
        setStudents,
        search,
        setSearch,
        tableRef,
        showDeleteModal,
        setShowDeleteModal,
      }}
    >
      <div>
        <TableComponent />
      </div>
    </ClassContext.Provider>
  );
};

export default index;
