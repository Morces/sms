import React, {useContext} from "react";
import ViewClassContext from "../../../context/ViewClassContext";

import TableRow from "./TableRow";

const TableBody = () => {
  const { students } = useContext(ViewClassContext);
  return (
    <>
      {students.map((doc, i) => (
        <TableRow doc={doc} key={doc.id} i={i} />
      ))}
    </>
  );
};

export default TableBody;
