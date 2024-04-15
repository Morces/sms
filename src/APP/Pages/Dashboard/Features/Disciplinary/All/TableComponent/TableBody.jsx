import React, {useContext} from "react";
import StudentsContext from "../../context/StudentsContext";

import TableRow from "./TableRow";

const TableBody = () => {
  const { students } = useContext(StudentsContext);
  return (
    <>
      {students.map((doc, i) => (
        <TableRow doc={doc} key={doc.id} i={i} />
      ))}
    </>
  );
};

export default TableBody;
