import React from "react";
import { TR, TH } from "../../../../../../Components/Table";

const TableHeader = () => {
  const head = ["Grade Name", "Actions"];
  return (
    <div>
      <TR>
        {head.map((v, i) => (
          <TH key={i} w={100 / 4} label={v} />
        ))}
      </TR>
    </div>
  );
};

export default TableHeader;
