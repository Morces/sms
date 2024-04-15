import React, { useContext } from "react";
import { AiFillEye } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import ProgramContext from "../../../context/ProgramContext";

const TableAction = ({ doc }) => {
  const navigate = useNavigate();
  const { setShowDeleteModal } = useContext(ProgramContext);

  return (
    <div className="flex gap-x-3">
      <p className="cursor-pointer" onClick={() => navigate(`programs/edit/${doc.id}`)}>
        <FaRegEdit className="text-blue" />
      </p>
      <p className="cursor-pointer" onClick={() => setShowDeleteModal(true)}>
        <RiDeleteBin5Line className="text-red" />
      </p>
    </div>
  );
};

export default TableAction;
