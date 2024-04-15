import React, { useRef, useState, useContext } from "react";
import SubjectsContext from "../context/SubjectsContext";
import TableComponent from "./TableComponent";
import dummyData from "../data/dummyData";
import DeleteModal from "./TableComponent/DeleteModal";
import AppContext from "../../../../../../../../Context/AppContext";

const index = () => {
  const [subjects, setSubjects] = useState(dummyData);

  const [search, setSearch] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { setIsLoading } = useContext(AppContext);
  const tableRef = useRef();

  return (
    <SubjectsContext.Provider
      value={{
        subjects,
        setSubjects,
        search,
        setSearch,
        tableRef,
        showDeleteModal,
        setShowDeleteModal,
      }}
    >
      <div>
        <TableComponent />
        <DeleteModal
          showDeleteModal={showDeleteModal}
          setShowDeleteModal={setShowDeleteModal}
        />
      </div>
    </SubjectsContext.Provider>
  );
};

export default index;
