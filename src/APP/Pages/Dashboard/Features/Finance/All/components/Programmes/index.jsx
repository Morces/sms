import React, { useContext, useRef, useState } from "react";
import ProgramContext from "../../context/ProgramContext";
import TableComponent from "./TableComponent";
import dummyData from "./data/dummyData";
import DeleteModal from "./TableComponent/DeleteModal";
import AppContext from "../../../../../../../Context/AppContext";
import { useNavigate } from "react-router-dom";

const index = () => {
  const [programs, setPrograms] = useState(dummyData);
  const [search, setSearch] = useState("");
  const tableRef = useRef();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { setIsLoading } = useContext(AppContext);
  const navigate = useNavigate();

  const handleDelete = () => {
    // setIsLoading(true)
    setShowDeleteModal(false);
    navigate(`/dashboard/finance`);
  };
  return (
    <ProgramContext.Provider
      value={{
        programs,
        setPrograms,
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
    </ProgramContext.Provider>
  );
};

export default index;
