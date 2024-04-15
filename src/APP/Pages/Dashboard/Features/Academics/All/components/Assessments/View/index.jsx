import React, { useState } from "react";
import StudentCard from "./components/StudentCard";
import Mathematics from "./components/AssessmentHistory/Mathematics";
import Kiswahili from "./components/AssessmentHistory/Kiswahili";
import AssessmentContext from "./context/AssessmentContext";
import dummyMath from "./data/dummyMath";

const index = () => {
  const [maths, setMaths] = useState(dummyMath);
  const [search, setSearch] = useState("");
  return (
    <AssessmentContext.Provider
      value={{
        maths,
        setMaths,
        search,
        setSearch,
      }}
    >
      <div className="">
        <div className="w-1/3 m-auto">
          <StudentCard />
        </div>
        <div className="mt-8">
          <Mathematics />
        </div>
        <div className="mt-8">
          <Kiswahili />
        </div>
      </div>
    </AssessmentContext.Provider>
  );
};

export default index;
