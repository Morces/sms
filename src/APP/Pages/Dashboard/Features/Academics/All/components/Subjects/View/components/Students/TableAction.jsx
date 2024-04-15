import React, { useContext } from "react";
import { AiFillEye } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const TableAction = ({ doc }) => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-x-3">
      <p
        className="cursor-pointer"
        onClick={() => navigate(`/dashboard/students/view/${doc.id}`)}
      >
        <AiFillEye className="text-primary" />
      </p>
      <p
        className="cursor-pointer"
        onClick={() => navigate(`/dashboard/students/edit/${doc.id}`)}
      >
        <FaRegEdit className="text-blue" />
      </p>
    </div>
  );
};

export default TableAction;
