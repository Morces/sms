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

import StudentsContext from "../../../context/StudentContext";
import Btn from "../../../../../../../../Components/Button/Btn";

import { MdAddCircleOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import TableAction from "./TableAction";
import { LuFilter } from "react-icons/lu";

const MobileScreen = () => {
  const { students, search, setSearch } = useContext(StudentsContext);

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
              onClick={() => setOpenFilter(true)}
            >
              <p className="flex items-center gap-x-2">
                <LuFilter className="text-xl" />
                <span>Filter</span>
              </p>
            </Btn>
          </div>
        </div>

        {students.map((doc, index) => (
          <TR key={index} i={index}>
            <TC>
              <TH label="Student Name" />
              <TD>{doc.first_name + " " + doc.sir_name}</TD>
            </TC>
            <TC>
              <TH label="Admission No" />
              <TD>{doc?.admission_no}</TD>
            </TC>
            <TC>
              <TH label="Grade" />
              <TD>{doc?.grade}</TD>
            </TC>
            <TC>
              <TH label="Balance" />
              <TD>{doc?.balance}</TD>
            </TC>
            <TC>
              <TH label="Gender" />
              <TD>{doc.gender}</TD>
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
