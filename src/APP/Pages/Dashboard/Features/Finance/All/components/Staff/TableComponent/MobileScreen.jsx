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

import StaffContext from "../../../context/StaffContxt";
import Actions from "./Actions";
import Btn from "../../../../../../../../Components/Button/Btn";
import { LuFilter } from "react-icons/lu";
import { MdAddCircleOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const MobileScreen = () => {
  const { staff, search, setSearch } = useContext(StaffContext);

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
                navigate("");
              }}
            >
              <p className="flex items-center gap-x-2">
                <LuFilter className="text-xl" />
                <span>Filter</span>
              </p>
            </Btn>
          </div>
        </div>

        {staff.map((doc, index) => (
          <TR key={index} i={index}>
            <TC>
              <TH label="Check All" />
              <input type="checkbox" name="" id="" />
            </TC>
            <TC>
              <TH label="Staff Name" />
              <TD>{doc.first_name + " " + doc.sir_name}</TD>
            </TC>
            <TC>
              <TH label="Staff No" />
              <TD>{doc.staff_no}</TD>
            </TC>
            <TC>
              <TH label="Role" />
              <TD>{doc.role}</TD>
            </TC>
            <TC>
              <TH label="Phone" />
              <TD>{doc.phone}</TD>
            </TC>
            <TC>
              <TH label="Gender" />
              <TD>{doc.gender}</TD>
            </TC>
            <TC>
              <TH label="Actions" />
              <TD>
                <Actions doc={doc} />
              </TD>
            </TC>
          </TR>
        ))}
        <Pagination />
      </Table>
    </div>
  );
};

export default MobileScreen;
