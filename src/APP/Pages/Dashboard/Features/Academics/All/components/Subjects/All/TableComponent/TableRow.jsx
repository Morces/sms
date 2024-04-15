/* eslint-disable react/prop-types */
import React from "react";
import { TR, TD, TT } from "../../../../../../../../../Components/Table";
import Actions from "./Actions";

const TableRow = ({ doc, i }) => {
  return (
    <TR key={doc?.id} i={i}>
      <TD w={100 / 5}>
        <TT label={doc.name} />
      </TD>
      <TD w={100 / 5}>
        <TT label={doc.subject_type} />
      </TD>
      <TD w={100 / 5}>
        <TT label={doc.department} />
      </TD>
      <TD w={100 / 5}>
        <Actions doc={doc} />
      </TD>
    </TR>
  );
};

export default TableRow;
