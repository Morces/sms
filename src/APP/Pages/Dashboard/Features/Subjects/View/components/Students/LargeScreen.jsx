import React, { useContext } from "react";
import {
  Table,
  Pagination,
  TopBarSearch,
} from "../../../../../../../Components/Table";

import Btn from "../../../../../../../Components/Button/Btn";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { MdAddCircleOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const LargeScreen = ({ search, setSearch }) => {
  const navigate = useNavigate();

  return (
    <div className="hidden lg:block">
      <Table>
        <div className="flex justify-between gap-3 flex-wrap w-full">
          <TopBarSearch
            placeholder="Search..."
            stateInput={search}
            setStateInput={setSearch}
          />

        </div>

        <TableHeader />
        <TableBody />

        <Pagination />
      </Table>
    </div>
  );
};

export default LargeScreen;
