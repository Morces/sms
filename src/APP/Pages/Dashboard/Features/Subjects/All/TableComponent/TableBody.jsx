import React, { useContext } from "react";
import SubjectsContext from "../../context/SubjectsContext";

import TableRow from "./TableRow";

const TableBody = () => {
  const { subjects } = useContext(SubjectsContext);
  return (
    <>
      {subjects.map((doc, i) => (
        <TableRow doc={doc} key={doc.id} i={i} />
      ))}
    </>
  );
};

export default TableBody;
