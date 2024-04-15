/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { FiBell } from "react-icons/fi";

import { BsChevronDown } from "react-icons/bs";

import { MdLogout } from "react-icons/md";

import WeatherComponent from "./WeatherComponent";

import defaultImage from "../../../../Assets/default-image.png";

function TopBar({ ping = true }) {
  // const { user, setUser, setToken } = useApp()

  const navigate = useNavigate();

  const location = useLocation();

  const [currentLocation, setCurrentLocation] = useState("");

  const [openChevron, setOpenChevron] = useState(false);

  useEffect(() => {
    const pathname = location.pathname
      .replace("/dashboard/", "")
      .replace("-", " ")
      .replace("_", " ");
    const somethingHere = pathname.split("/")[0];
    const capitalizedSomethingHere =
      somethingHere.charAt(0).toUpperCase() + somethingHere.slice(1);
    setCurrentLocation(capitalizedSomethingHere);
  }, [location]);

  function openChevronFn() {
    setOpenChevron(!openChevron);
  }

  return (
    <div className="sticky right-0 w-full z-20 top-0 bg-white p-7 pr-4 flex flex-col sm:flex-row justify-between font-karla">
      <div className="text-xl md:text-3xl pl-12 lg:pl-0 font-semibold text-gray font-poppins">
        {currentLocation}
      </div>

      <div className="flex flex-col md:flex-row items-center w-full sm:w-fit gap-x-5">
        <WeatherComponent />
        <div className="flex justify-end items-center w-full sm:w-fit gap-x-5">
          <div className="w-10 h-10 flex justify-center items-center cursor-pointer">
            <div className="relative z-0 shadow-lg flex items-center justify-center rounded-full p-3">
              <FiBell className="text-2xl text-auro_metal_saurus font-black" />
              <div
                className={`absolute z-10 h-2 w-2 rounded-full bg-red top-1/4 right-1/3
            ${ping ? " animate-ping" : ""}
            `}
              ></div>
              <div
                className={`absolute z-0 h-2 w-2 rounded-full bg-red top-1/4 right-1/3`}
              ></div>
            </div>
          </div>

          <div className="flex gap-x-5 items-center cursor-pointer">
            <div onClick={() => navigate("/dashboard/profile")}>
              <div
                className="w-[35px] h-[35px] bg-cover bg-center rounded-full"
                style={{
                  backgroundImage: `url(${defaultImage})`,
                }}
              ></div>
            </div>

            <BsChevronDown
              onClick={openChevronFn}
              className={`${openChevron && "rotate-180"} duration-100`}
            />
            <div
              onMouseLeave={() => setOpenChevron(false)}
              className="relative"
            >
              <div
                className={`absolute  px-4 
              right-0 top-10 overflow-hidden ${openChevron ? "h-fit" : "h-0"}
              `}
              >
                <div
                  className={`z-0
                  text-gray-600-2 text-[15px] font-bold
                  duration-200  p-2 w-40 flex flex-col py-5
                  ${openChevron ? "translate-y-0" : "-translate-y-[100%]"}`}
                >
                  <div
                    onClick={() => {}}
                    className="p-2 w-full flex bg-white hover:bg-mint-cream rounded-lg shadow-lg gap-3 items-center"
                  >
                    <MdLogout className="-scale-x-[1]" />
                    Logout
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
