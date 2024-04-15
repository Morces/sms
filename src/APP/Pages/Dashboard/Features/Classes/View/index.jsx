import React, { useEffect, useState } from "react";
import ClassDetails from "./components/ClassDetails";
import { useNavigate, useParams } from "react-router-dom";
import useAxios from "../../../../../Hooks/useAxios";
import Breadcrumb from "../../../../../Components/BreadCrumb";
import ViewClassContext from "../context/ViewClassContext";
import DummyStudents from "../data/dummyStudents";
import DeleteModal from "../All/TableComponent/DeleteModal";

const Index = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [students, setStudents] = useState(DummyStudents);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const request = useAxios();

  return (
    <ViewClassContext.Provider
      value={{
        students,
        setStudents,
        showDeleteModal,
        setShowDeleteModal,
      }}
    >
      <Breadcrumb />
      <div className="bg-white p-5 mt-5 mr-4 rounded-lg">
        <ClassDetails />
        <DeleteModal
          showDeleteModal={showDeleteModal}
          setShowDeleteModal={setShowDeleteModal}
        />
      </div>
    </ViewClassContext.Provider>
  );
};

export default Index;
