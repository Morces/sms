import React, { useEffect, useState } from "react";
import StaffDetails from "./components/StaffDetails";
import { useNavigate, useParams } from "react-router-dom";
import useAxios from "../../../../../Hooks/useAxios";
import Breadcrumb from "../../../../../Components/BreadCrumb";

const Index = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [staff, setStaff] = useState({});
  const request = useAxios();

  return (
    <>
      <Breadcrumb />
      <div className="bg-white p-5 mt-5 mr-4 rounded-lg">
        <StaffDetails />
      </div>
    </>
  );
};

export default Index;
