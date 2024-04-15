import React, { useContext } from "react";
import StudentsContext from "../../../context/StudentContext";

import TableRow from "./TableRow";

const TableBody = () => {
  const { students } = useContext(StudentsContext);
  return (
    <>
      {students.map((doc, i) => (
        <div
          className="cursor-pointer"
          onClick={() => navigation(`student/view/${doc.id}`)}
        >
          <TableRow doc={doc} key={doc.id} i={i} />
        </div>
      ))}
    </>
  );
};

export default TableBody;
