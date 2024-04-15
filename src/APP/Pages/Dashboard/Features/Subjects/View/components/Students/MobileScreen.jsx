import React, { useContext, useState } from "react";

import {
  Table,
  TR,
  TC,
  TD,
  TH,
} from "../../../../../../../Components/MobileTable";

import {
  TopBarSearch,
  Pagination,
} from "../../../../../../../Components/Table";

import ViewStreamContext from "../../../context/ViewStreamContext";
import Btn from "../../../../../../../Components/Button/Btn";

import { MdAddCircleOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import TableAction from "./TableAction";

const MobileScreen = ({ search, setSearch }) => {
  const { students } = useContext(ViewStreamContext);

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
        </div>

        {students.map((doc, index) => (
          <TR key={index} i={index}>
            <TC>
              <TH label="Student Name" />
              <TD>{doc.first_name + " " + doc.sir_name}</TD>
            </TC>
            <TC>
              <TH label="Admission No" />
              <TD>{doc.admission_no}</TD>
            </TC>
            <TC>
              <TH label="DOB" />
              <TD>{doc.dob}</TD>
            </TC>
            <TC>
              <TH label="Religion" />
              <TD>{doc.religion}</TD>
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
