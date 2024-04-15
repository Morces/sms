import React, {useContext} from "react";
import ViewStreamContext from "../../../context/ViewStreamContext";

import TableRow from "./TableRow";

const TableBody = () => {
  const { students } = useContext(ViewStreamContext);
  return (
    <>
      {students.map((doc, i) => (
        <TableRow doc={doc} key={doc.id} i={i} />
      ))}
    </>
  );
};

export default TableBody;
