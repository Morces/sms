import { useContext } from "react";
import LargeScreen from "./LargeScreen";
import MobileScreen from "./MobileScreen";
import ViewStreamContext from "../../../context/ViewStreamContext";

const TableComponent = () => {
  const { search, setSearch } = useContext(ViewStreamContext);

  return (
    <div className="mt-5 mr-4">
      <h3 className="text-center font-bold my-3 text-xl">STUDENTS</h3>
      <div className="h-full bg-[#FFFFFF] px-5 rounded-md">
        <LargeScreen search={search} setSearch={setSearch} />
        <MobileScreen search={search} setSearch={setSearch} />
      </div>
    </div>
  );
};

export default TableComponent;
