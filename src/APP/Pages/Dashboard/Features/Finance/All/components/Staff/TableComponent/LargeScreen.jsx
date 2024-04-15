import React, { useContext } from "react";
import {
  Table,
  Pagination,
  TopBarSearch,
} from "../../../../../../../../Components/Table";
import { LuFilter } from "react-icons/lu";
import Btn from "../../../../../../../../Components/Button/Btn";
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

          <div className="pt-3 flex flex-wrap h-fit gap-2 ">
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

        <TableHeader />
        <TableBody />

        <Pagination />
      </Table>
    </div>
  );
};

export default LargeScreen;
