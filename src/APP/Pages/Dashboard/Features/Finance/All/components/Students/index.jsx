import React, { useContext, useRef, useState } from "react";
import StudentsContext from "../../context/StudentContext";
import TableComponent from "./TableComponent";
import dummyData from "./data/dummyData";
import Filter from "./TableComponent/Filter";
import AppContext from "../../../../../../../Context/AppContext";
import { useNavigate } from "react-router-dom";

const index = () => {
  const [students, setStudents] = useState(dummyData);
  const [openFilter, setOpenFilter] = useState(false);
  const [search, setSearch] = useState("");
  const tableRef = useRef();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { setIsLoading } = useContext(AppContext);
  const navigate = useNavigate();

  const handleDelete = () => {
    // setIsLoading(true)
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
        openFilter,
        setOpenFilter,
      }}
    >
      <div>
        <TableComponent />
        {openFilter && (
          <Filter showFilter={openFilter} setShowFilter={setOpenFilter} />
        )}
      </div>
    </StudentsContext.Provider>
  );
};

export default index;
