import React, { useState } from "react";

import { Table, TD, TH, THA, TR, TT, Pagination, TopBarSearch } from "./index";

import data from "./data";

const TestDesktopTable = () => {
  const hw = 100;
  const tdw = 100 / 5;

  const [search, setSearch] = useState("");

  return (
    <div className=" w-screen h-screen ">
      <Table>
        <TopBarSearch stateInput={search} setStateInput={setSearch} />
        <TR>
          <THA w={hw / 5} label="Name" />
          <TH w={hw / 5} label="Cost">
            Cost
          </TH>
          <TH w={hw / 5} label="Qty" />
          <TH w={hw / 5} label="Description" />
          <TH w={hw / 5} label="Vendor" />
        </TR>
        {data.map((doc, i) => (
          <TR key={i} i={i}>
            <TD w={tdw}>
              <TT label={doc.name} />
            </TD>
            <TD w={tdw}>
              <TT label={doc.cost} />
            </TD>
            <TD w={tdw}>
              <TT label={doc.qty} />
            </TD>
            <TD w={tdw}>
              <TT label={doc.description} />
            </TD>
            <TD w={tdw}>
              <TT label={doc.vendor} />
            </TD>
          </TR>
        ))}
        <Pagination />
      </Table>
    </div>
  );
};

export default TestDesktopTable;
