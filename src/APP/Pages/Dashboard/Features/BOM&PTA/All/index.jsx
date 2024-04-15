import React, { useRef, useState, useContext } from "react";
import BomContext from "../context/BomContext";
import TableComponent from "./TableComponent";
import dummyData from "../data/dummyData";
import DeleteModal from "./TableComponent/DeleteModal";
import AppContext from "../../../../../Context/AppContext";

const index = () => {
  const [bom, setBom] = useState(dummyData);
  const [search, setSearch] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { setIsLoading } = useContext(AppContext);
  const tableRef = useRef();
  return (
    <BomContext.Provider
      value={{
        bom,
        setBom,
        search,
        setSearch,
        tableRef,
        showDeleteModal,
        setShowDeleteModal,
      }}
    >
      <div>
        <TableComponent />
        <DeleteModal />
      </div>
    </BomContext.Provider>
  );
};

export default index;
