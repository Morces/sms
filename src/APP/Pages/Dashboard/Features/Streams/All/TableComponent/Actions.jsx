import React, { useContext } from "react";
import { AiFillEye } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import StreamContext from "../../context/StreamContext";

const Actions = ({ doc }) => {
  const navigate = useNavigate();
  const { setShowDeleteModal, setDocId, docId } = useContext(StreamContext);

  function deletStream() {
    setDocId(doc.id);
    setShowDeleteModal(true);
  }

  return (
    <div className="flex gap-x-3">
      <p className="cursor-pointer" onClick={() => navigate(`edit/${doc.id}`)}>
        <FaRegEdit className="text-blue" />
      </p>
      <p className="cursor-pointer" onClick={() => deletStream()}>
        <RiDeleteBin5Line className="text-red" />
      </p>
    </div>
  );
};

export default Actions;
