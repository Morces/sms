/* eslint-disable react/prop-types */
import React from "react";
import { TR, TD, TT } from "../../../../../../Components/Table";
import Actions from "./Actions";

const TableRow = ({ doc, i }) => {
  return (
    <>
      <TR key={doc?.id} i={i}>
        <TD w={100 / 4}>
          <TT label={doc?.name} />
        </TD>

        <TD w={100 / 4}>
          <Actions doc={doc} />
        </TD>
      </TR>
    </>
  );
};

export default TableRow;
