import React, { useContext } from "react";
import TermContext from "../../../context/TermContxt";

import TableRow from "./TableRow";

const TableBody = () => {
  const { terms } = useContext(TermContext);
  return (
    <>
      {terms.map((doc, i) => (
        <div
          className="cursor-pointer"
          onClick={() => navigation(`/dashboard/finance/term/view/${doc.id}`)}
        >
          <TableRow doc={doc} key={doc.id} i={i} />
        </div>
      ))}
    </>
  );
};

export default TableBody;
