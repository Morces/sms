import { useContext } from "react";
import LargeScreen from "./LargeScreen";
import MobileScreen from "./MobileScreen";
import ViewClassContext from "../../../context/ViewClassContext";

const TableComponent = () => {
  const { search, setSearch } = useContext(ViewClassContext);

  return (
    <div className="mt-5 mr-4">
      <div className="h-full bg-[#FFFFFF] p-5 rounded-md">
        <LargeScreen search={search} setSearch={setSearch} />
        <MobileScreen search={search} setSearch={setSearch} />
      </div>
    </div>
  );
};

export default TableComponent;
