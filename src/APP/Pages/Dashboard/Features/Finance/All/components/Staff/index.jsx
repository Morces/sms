import React, { useRef, useState, useContext } from "react";
import StaffContext from "../../context/StaffContxt";
import TableComponent from "./TableComponent";
import dummyData from "./data/dummyData";
import AppContext from "../../../../../../../Context/AppContext";

const index = () => {
  const [staff, setStaff] = useState(dummyData);
  const [search, setSearch] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { setIsLoading } = useContext(AppContext);
  const tableRef = useRef();
  return (
    <StaffContext.Provider
      value={{
        staff,
        setStaff,
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
    </StaffContext.Provider>
  );
};

export default index;
