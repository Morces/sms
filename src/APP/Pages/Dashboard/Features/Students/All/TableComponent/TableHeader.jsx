import React from "react";
import { TR, TH } from "../../../../../../Components/Table";

const TableHeader = () => {
  const head = [
    "Student Name",
    "Admission No",
    "D.O.B",
    "D.O.A",
    "Gender",
    "Actions",
  ];
  return (
    <div>
      <TR>
        {head.map((v, i) => (
          <TH key={i} w={100 / 6} label={v} />
        ))}
      </TR>
    </div>
  );
};

export default TableHeader;
