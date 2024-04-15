import TestMobileTable from "./TestMobileTable";

import TestDesktopTable from "./TestDesktopTable";

const TestTable = () => {
  return (
    <div className=" w-screen h-screen">
      <div className=" sm:hidden">
        <TestMobileTable />
      </div>

      <div class="hidden sm:block">
        <TestDesktopTable />
      </div>
    </div>
  );
};

export default TestTable;
