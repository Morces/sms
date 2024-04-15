import React, { useContext, useRef, useState } from "react";
import AssessmentContext from "../../context/AssessmentContxt";
import TableComponent from "./TableComponent";
import dummyData from "./data/dummyData";

import AppContext from "../../../../../../../Context/AppContext";
import { useNavigate } from "react-router-dom";

const index = () => {
  const [students, setStudents] = useState(dummyData);
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
    <AssessmentContext.Provider
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
      </div>
    </AssessmentContext.Provider>
  );
};

export default index;
