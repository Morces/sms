import React from "react";
import FeatureContext from "./Features/Context/FeatureContext";
import { Outlet } from "react-router-dom";
import SideBar from "./Components/SideBar/Sidebar";
import TopBar from "./Components/TopBar";

const Dashboard = () => {
  return (
    <FeatureContext.Provider value={{}}>
      <div className="main flex h-fit">
        <SideBar />
        <div className="sticky top-0 flex-grow min-h-screen">
          <TopBar />
          <div className="h-fit bg-anti-flash-white pt-7 pl-3 md:pl-7">
            <Outlet />
          </div>
        </div>
      </div>
    </FeatureContext.Provider>
  );
};

export default Dashboard;
