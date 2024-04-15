import React, { useContext } from "react";
import StaffContext from "../../context/StaffContext";

import TableRow from "./TableRow";

const TableBody = () => {
  const { staff } = useContext(StaffContext);
  return (
    <>
      {staff.map((doc, i) => (
        <TableRow doc={doc} key={doc.id} i={i} />
      ))}
    </>
  );
};

export default TableBody;
