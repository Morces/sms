import React, { useContext } from "react";
import { AiFillEye } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import GradeContext from "../../context/ClassContext";
import useAxios from "../../../../../../Hooks/useAxios";

const Actions = ({ doc }) => {
  const navigate = useNavigate();
  const { setShowDeleteModal } = useContext(GradeContext);
  const { request, urls } = useAxios();

  async function deleteGrade() {
    const res = await request({
      req: {
        method: "DELETE",
        url: urls.grades.delete_grade.url + `${doc.id}/`,
      },
    });

    if (res !== "error") {
      navigate("/dashboard/grades");
    }
  }

  return (
    <div className="flex gap-x-3">
      {/* <p className="cursor-pointer" onClick={() => navigate(`view/${doc.id}`)}>
        <AiFillEye className="text-primary" />
      </p> */}
      <p className="cursor-pointer" onClick={() => navigate(`edit/${doc.id}`)}>
        <FaRegEdit className="text-blue" />
      </p>
      <p className="cursor-pointer" onClick={() => deleteGrade()}>
        <RiDeleteBin5Line className="text-red" />
      </p>
    </div>
  );
};

export default Actions;
