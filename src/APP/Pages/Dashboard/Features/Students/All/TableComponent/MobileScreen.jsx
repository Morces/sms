import React, { useContext, useState } from "react";

import {
  Table,
  TR,
  TC,
  TD,
  TH,
} from "../../../../../../Components/MobileTable";

import { TopBarSearch, Pagination } from "../../../../../../Components/Table";

import StudentsContext from "../../context/StudentsContext";
import Btn from "../../../../../../Components/Button/Btn";
import { convDate } from "../../../../../../Utils/Time";
import { MdAddCircleOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import TableAction from "./TableAction";

const MobileScreen = () => {
  const { students, search, setSearch } = useContext(StudentsContext);

  const navigate = useNavigate();

  const navigation = useNavigate();

  function view() {
    navigation(`view/${doc.id}`);
  }

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
              ex="py-[10px] md:mt-1"
              rounded={false}
              outline={false}
              onClick={() => {
                navigate("./add");
              }}
            >
              <p className="flex items-center gap-x-2">
                <MdAddCircleOutline className="text-xl" />
                <span>Add Student</span>
              </p>
            </Btn>
          </div>
        </div>

        {students.map((doc, index) => (
          <TR key={doc?.id || index} i={index} onClick={() => view()}>
            <TC>
              <TH label="Student Name" />
              <TD>{doc?.first_name + " " + doc?.last_name}</TD>
            </TC>
            <TC>
              <TH label="Admission No" />
              <TD>{doc?.registration_number}</TD>
            </TC>
            <TC>
              <TH label="DOB" />
              <TD>{convDate(doc?.dob)}</TD>
            </TC>
            <TC>
              <TH label="D.O.A" />
              <TD>{convDate(doc?.doa)}</TD>
            </TC>
            <TC>
              <TH label="Gender" />
              <TD>{doc?.gender ==1 ? "Male": "Female"}</TD>
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
