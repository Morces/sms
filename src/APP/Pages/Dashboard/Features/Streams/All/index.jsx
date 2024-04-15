import React, { useRef, useState, useEffect, useContext } from "react";
import StreamContext from "../context/StreamContext";
import TableComponent from "./TableComponent";
import dummyStudents from "../data/dummyStudents";
import DeleteModal from "./TableComponent/DeleteModal";
import useAxios from "../../../../../Hooks/useAxios";
import { useNavigate } from "react-router-dom";
import AppContext from "../../../../../Context/AppContext";
import DummyStreams from "../data/dummyData";

const index = () => {
  const [streams, setStreams] = useState(DummyStreams);
  const [students, setStudents] = useState(dummyStudents);
  const [search, setSearch] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { request, urls } = useAxios();
  const navigate = useNavigate();
  const [docId, setDocId] = useState(null);
  const { setShowSuccessModal } = useContext(AppContext);

  const tableRef = useRef();

  // useEffect(() => {
  //   getStreams();
  // }, []);

  // async function getStreams() {
  //   const res = await request({
  //     req: urls.grades.get_streams,
  //   });

  //   if (res !== "error") {
  //     setStreams(res);
  //   }
  // }

  async function handleDelete(docId) {
    const res = await request({
      req: {
        url: urls.grades.delete_stream.url + `${docId}/`,
        method: "DELETE",
      },
      show_success: true,
      success_message: "Stream Deleted successully",
    });

    if (res !== "error") {
      setShowDeleteModal(false);
      setShowSuccessModal(true);
      handleUpdate();
    }
  }

  function handleUpdate() {
    getStreams();
  }

  return (
    <StreamContext.Provider
      value={{
        streams,
        setStreams,
        students,
        setStudents,
        search,
        setSearch,
        tableRef,
        showDeleteModal,
        setShowDeleteModal,
        docId,
        setDocId,
        handleDelete,
      }}
    >
      <div>
        <TableComponent />
        <DeleteModal
          showDeleteModal={showDeleteModal}
          setShowDeleteModal={setShowDeleteModal}
        />
      </div>
    </StreamContext.Provider>
  );
};

export default index;
