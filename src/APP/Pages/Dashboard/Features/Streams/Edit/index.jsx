import React, { useContext, useState } from "react";
import AddContext from "./AddContext";
import Breadcrumb from "../../../../../Components/BreadCrumb";
import { useNavigate } from "react-router-dom";

import StreamForm from "./components/StreamForm";

const index = () => {
  return (
    <AddContext.Provider value={{}}>
      <Breadcrumb />
      <div className="rounded-md bg-white mr-4 mt-4">
        <StreamForm />
      </div>
    </AddContext.Provider>
  );
};

export default index;
