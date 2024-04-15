import React, { useContext } from "react";
import StaffContext from "../../../context/StaffContxt";

import TableRow from "./TableRow";
import { useNavigate } from "react-router-dom";

const TableBody = () => {
  const { staff } = useContext(StaffContext);
  const navigation = useNavigate();
  return (
    <>
      {staff.map((doc, i) => (
        <div
          className="cursor-pointer"
          onClick={() => navigation(`view/${doc.id}`)}
        >
          <TableRow doc={doc} key={doc.id} i={i} />
        </div>
      ))}
    </>
  );
};

export default TableBody;
