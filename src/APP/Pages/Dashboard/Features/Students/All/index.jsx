import React, { useContext, useEffect, useRef, useState } from "react";
import StudentsContext from "../context/StudentsContext";
import TableComponent from "./TableComponent";
import dummyData from "../data/dummyData";
import DeleteModal from "./TableComponent/DeleteModal";
import AppContext from "../../../../../Context/AppContext";
import { useNavigate } from "react-router-dom";
import useAxios from "../../../../../Hooks/useAxios";
import useApp from "../../../../../Hooks/useApp";

const index = () => {
  const [students, setStudents] = useState(dummyData);
  const [search, setSearch] = useState("");
  const { request, urls } = useAxios();
  const tableRef = useRef();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // getStudents();
  }, []);

  const getStudents = async () => {
    const res = await request({
      req: urls.students.all_students,
    });
    if (res !== "error") {
      setStudents(res.students);
    }
  };

  const handleDelete = () => {
    setShowDeleteModal(false);
    navigate(`/dashboard/students`);
  };
  return (
    <StudentsContext.Provider
      value={{
        students,
        setStudents,
        search,
        setSearch,
        tableRef,
        setShowDeleteModal,
        showDeleteModal,
        handleDelete,
      }}
    >
      <div>
        <TableComponent />
        <DeleteModal />
      </div>
    </StudentsContext.Provider>
  );
};

export default index;
