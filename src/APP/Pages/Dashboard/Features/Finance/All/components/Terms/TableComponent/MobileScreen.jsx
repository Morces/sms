import React, { useContext, useState } from "react";

import {
  Table,
  TR,
  TC,
  TD,
  TH,
} from "../../../../../../../../Components/MobileTable";

import {
  TopBarSearch,
  Pagination,
} from "../../../../../../../../Components/Table";

import TermContext from "../../../context/TermContxt";
import Btn from "../../../../../../../../Components/Button/Btn";

import { MdAddCircleOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import TableAction from "./TableAction";
import { LuFilter } from "react-icons/lu";

const MobileScreen = () => {
  const { terms, search, setSearch } = useContext(TermContext);

  const navigate = useNavigate();

  return (
    <div className="block lg:hidden">
      <Table>
        <div className="flex justify-between gap-3 flex-col lg:flex-row flex-wrap w-full">
          <TopBarSearch
            placeholder="Search..."
            stateInput={search}
            setStateInput={setSearch}
          />

          <div className="md:pt-3 flex flex-wrap h-fit gap-2 mb-4">
            <Btn
              padding="sm"
              ex="py-[10px] mt-1"
              rounded={false}
              outline={false}
              onClick={() => {
                navigate("terms/add");
              }}
            >
              <p className="flex items-center gap-x-2">
                <MdAddCircleOutline className="text-xl" />
                <span>Add Term</span>
              </p>
            </Btn>
          </div>
        </div>

        {terms.map((doc, index) => (
          <TR key={index} i={index}>
            <TC>
              <TH label="Term Name" />
              <TD>{doc?.name}</TD>
            </TC>
            <TC>
              <TH label="Grade" />
              <TD>{doc?.grade}</TD>
            </TC>
            <TC>
              <TH label="Amount" />
              <TD>{doc?.amount}</TD>
            </TC>
            <TC>
              <TH label="Actions" />
              <TableAction doc={doc} />
            </TC>
          </TR>
        ))}
        <Pagination />
      </Table>
    </div>
  );
};

export default MobileScreen;
