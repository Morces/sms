import React, { useContext } from "react";
import AssessmentContext from "../../../context/AssessmentContext";

import TableRow from "./TableRow";

const TableBody = () => {
  const { maths } = useContext(AssessmentContext);
  return (
    <>
      {maths.map((doc, i) => (
        <TableRow doc={doc} key={doc.id} i={i} />
      ))}
    </>
  );
};

export default TableBody;
