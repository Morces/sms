import React, { useContext, useState } from "react";

import {
  Table,
  TR,
  TC,
  TD,
  TH,
} from "../../../../../../../../../Components/MobileTable";

import {
  TopBarSearch,
  Pagination,
} from "../../../../../../../../../Components/Table";

import SubjectsContext from "../../context/SubjectsContext";
import Actions from "./Actions";
import Btn from "../../../../../../../../../Components/Button/Btn";

import { MdAddCircleOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const MobileScreen = () => {
  const { subjects, search, setSearch } = useContext(SubjectsContext);

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
              ex="py-[10px] md:mt-1"
              rounded={false}
              outline={false}
              onClick={() => {
                navigate("/dashboard/academics/subjects/add");
              }}
            >
              <p className="flex items-center gap-x-2">
                <MdAddCircleOutline className="text-xl" />
                <span>Add Subject</span>
              </p>
            </Btn>
          </div>
        </div>

        {subjects.map((doc, index) => (
          <TR key={index} i={index}>
            <TC>
              <TH label="Subject Name" />
              <TD>{doc.name}</TD>
            </TC>
            <TC>
              <TH label="Subject Type" />
              <TD>{doc.subject_type}</TD>
            </TC>
            <TC>
              <TH label="Department" />
              <TD>{doc.department}</TD>
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
