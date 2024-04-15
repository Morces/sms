import React from "react";
import AddContext from "./AddContext";
import MathsForm from "./components/MathsForm";
import Breadcrumb from "../../../../../../../../../../../../Components/BreadCrumb";

const index = () => {
  return (
    <AddContext.Provider>
        <Breadcrumb />
      <div className="rounded-md bg-white mr-4">
        <MathsForm />
      </div>
    </AddContext.Provider>
  );
};

export default index;
