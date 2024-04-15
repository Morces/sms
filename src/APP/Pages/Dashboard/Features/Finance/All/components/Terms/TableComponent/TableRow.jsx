/* eslint-disable react/prop-types */
import React from "react";
import { TR, TD, TT } from "../../../../../../../../Components/Table";
import TableAction from "./TableAction";

const TableRow = ({ doc, i }) => {
  return (
    <TR key={doc?.id} i={i}>
      <TD w={100 / 6}>
        <TT label={doc?.name} />
      </TD>

      <TD w={100 / 6}>
        <TT label={doc?.grade} />
      </TD>
      <TD w={100 / 6}>
        <TT label={doc?.amount} />
      </TD>

      <TD w={100 / 6}>
        <TableAction doc={doc} />
      </TD>
    </TR>
  );
};

export default TableRow;
