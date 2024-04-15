import React from "react";
import { TR, TH } from "../../../../../../../../../../../Components/Table";

const TableHeader = () => {
  const head = ["Term", "Topic", "Grade", "Comment", "Score", "Actions"];
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
