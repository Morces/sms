import React, { useState } from "react";
import AddContext from "./AddContext";
import StreamForm from "./components/StreamForm";
import Breadcrumb from "../../../../../Components/BreadCrumb";

const Stream = () => {
  return (
    <AddContext.Provider value={{}}>
      <Breadcrumb />
      <div className="rounded-md bg-white mr-4">
        <StreamForm />
      </div>
    </AddContext.Provider>
  );
};

export default Stream;
