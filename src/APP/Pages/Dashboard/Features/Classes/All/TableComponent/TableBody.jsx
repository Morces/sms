import React, { useContext } from "react";
import GradeContext from "../../context/ClassContext";

import TableRow from "./TableRow";

const TableBody = () => {
  const { grade } = useContext(GradeContext);
  return (
    <>
      {grade.map((doc, i) => (
        <TableRow doc={doc} key={doc.id} i={i} />
      ))}
    </>
  );
};

export default TableBody;
