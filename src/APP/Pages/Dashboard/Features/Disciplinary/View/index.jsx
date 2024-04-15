import React, { useEffect, useState } from "react";
import StudentDetails from "./components/StudentDetails";
import { useNavigate, useParams } from "react-router-dom";
import useAxios from "../../../../../Hooks/useAxios";
import ParentDetails from "./components/ParentDetails";

const index = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [students, setStudents] = useState({});
  const [kins, setKins] = useState([]);

  const [relations, setRelations] = useState([]);

  const [activeKin, setActiveKin] = useState(null);
  const request = useAxios();

  //   async function init() {
  //     let res = await request({
  //       method: "GET",
  //       url: ``,
  //     });

  //     if (res === "error") {
  //       navigate("../");
  //       return;
  //     }

  //     setStudents(res.students);
  //     setKins(res.kins);

  //   let relations = res.relationships.map((doc) => ({
  //     value: doc.id,
  //     label: doc.name,
  //   }));
  //   setRelations([{ label: "Select Relationship", value: "" }, ...relations]);
  //   if (res.kins.length !== 0) {
  //     setActiveKin(0);
  //   }
  //   }

  //   useEffect(() => {
  //     init();
  //   }, []);

  return (
    <>
      <div className="bg-white p-5 mt-5 mr-4 flex justify-between max-md:flex-col max-sm:flex-col">
        <StudentDetails />
        <div className="w-1/2 max-md:w-full max-sm:w-full">
          <ParentDetails
            // kins={kins}
            // setKins={setKins}
            // activeKin={activeKin}
            // setActiveKin={setActiveKin}
            // relations={relations}
            // init={init}
          />
        </div>
      </div>
    </>
  );
};

export default index;
