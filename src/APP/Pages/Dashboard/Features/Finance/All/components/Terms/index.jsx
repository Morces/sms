import React, { useContext, useRef, useState } from "react";
import StudentsContext from "../../context/TermContxt";
import TableComponent from "./TableComponent";
import dummyData from "./data/dummyData";

import AppContext from "../../../../../../../Context/AppContext";
import { useNavigate } from "react-router-dom";

const index = () => {
  const [terms, setTerms] = useState(dummyData);
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
        terms,
        setTerms,
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
    </StudentsContext.Provider>
  );
};

export default index;
