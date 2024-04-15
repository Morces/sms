import React, { useEffect, useState } from "react";
import AddContext from "./AddContext";
import Breadcrumb from "../../../../../Components/BreadCrumb";
import { useNavigate, useParams } from "react-router-dom";

import ClassForm from "./components/ClassForm";
import useAxios from "../../../../../Hooks/useAxios";

const index = () => {
  const [grade, setGrade] = useState("");
  const navigate = useNavigate();
  const { request, urls } = useAxios();
  const { id } = useParams();

  async function getGrade(){
    let res = await request({
      req: {
        url: urls.grades
      }
    })
  }

  return (
    <AddContext.Provider
      value={{
        grade,
        setGrade,
      }}
    >
      <Breadcrumb />
      <div className="rounded-md bg-white mr-4 mt-4">
        <ClassForm />
      </div>
    </AddContext.Provider>
  );
};

export default index;
