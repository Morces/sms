import React, { useContext } from "react";
import StreamContext from "../../context/StreamContext";

import TableRow from "./TableRow";

const TableBody = () => {
  const { streams } = useContext(StreamContext);
  return (
    <>
      {streams.map((doc, i) => (
        <TableRow doc={doc} key={doc.id} i={i} />
      ))}
    </>
  );
};

export default TableBody;
