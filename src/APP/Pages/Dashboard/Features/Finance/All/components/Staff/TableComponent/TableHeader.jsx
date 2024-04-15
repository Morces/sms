import React from "react";
import { TR, TH } from "../../../../../../../../Components/Table";

const TableHeader = () => {
  const head = ["Staff Name", "Staff No", "Role", "Phone", "Gender"];
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
