import React, { useContext } from "react";
import ProgramContext from "../../../context/ProgramContext";

import TableRow from "./TableRow";

const TableBody = () => {
  const { programs } = useContext(ProgramContext);
  return (
    <>
      {programs.map((doc, i) => (
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
