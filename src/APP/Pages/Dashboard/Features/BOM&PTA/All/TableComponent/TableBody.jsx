import React, { useContext } from "react";
import BomContext from "../../context/BomContext";

import TableRow from "./TableRow";

const TableBody = () => {
  const { bom } = useContext(BomContext);
  return (
    <>
      {bom.map((doc, i) => (
        <TableRow doc={doc} key={doc.id} i={i} />
      ))}
    </>
  );
};

export default TableBody;
