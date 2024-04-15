/* eslint-disable react/prop-types */
import React from "react";
import { TR, TD, TT } from "../../../../../../../Components/Table";
import TableAction from "./TableAction";

const TableRow = ({ doc, i }) => {
  return (
    <TR key={doc?.id} i={i}>
      <TD w={100 / 6}>
        <div className="inline-flex justify-between items-center gap-x-2">
          <img
            src={doc.image}
            alt="avatar"
            className="w-[45px] h-[45px] rounded-full"
          />
          <TT label={doc.first_name + " " + doc.sir_name} />
        </div>
      </TD>
      <TD w={100 / 6}>
        <TT label={doc?.admission_no} />
      </TD>
      <TD w={100 / 6}>
        <TT label={doc?.dob} />
      </TD>
      <TD w={100 / 6}>
        <TT label={doc?.religion} />
      </TD>
      <TD w={100 / 6}>
        <TT label={doc?.gender} />
      </TD>
      <TD w={100 / 6}>
        <TableAction doc={doc} />
      </TD>
    </TR>
  );
};

export default TableRow;
