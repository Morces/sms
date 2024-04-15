import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import SideBtn from "./SideBtn";

// import Logo from "../../../../Assets/Logo.png";

import { GrClose } from "react-icons/gr";
import { FiUsers } from "react-icons/fi";
import { TbSettingsDollar } from "react-icons/tb";
import { BiHomeAlt2 } from "react-icons/bi";
import { ImProfile } from "react-icons/im";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";
import { MdOutlineViewStream } from "react-icons/md";
import { VscSymbolClass } from "react-icons/vsc";

const SideBar = () => {
  const navigate = useNavigate();

  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <GiHamburgerMenu
        onClick={() => setNavOpen(!navOpen)}
        className={`ham p-3 h-fit w-fit bg-white rounded text-black absolute lg:hidden text-3xl z-40 top-3 left-4 ${
          navOpen && "-left-16"
        } ease-in-out duration-200`}
      />

      <GrClose
        onClick={() => setNavOpen(!navOpen)}
        className={`ham p-3 h-fit w-fit bg-white rounded text-black absolute opacity-100 lg:hidden text-3xl z-40 top-3  ${
          !navOpen ? "-left-16" : "left-4"
        } duration-200`}
      />

      <div
        className={`
      ${navOpen ? "left-[0]" : "-left-[300px]"}
      cursor-pointer absolute z-30 min-w-[210px] px-5 bg-white 
      lg:sticky top-0 h-screen overflow-x-hidden overflow-y-hidden scroll-hidden 
      flex flex-col gap-3 ease-out duration-200`}
      >
        <div
          className="w-full sticky top-0 bg-white pb-5 pt-12 flex justify-center items-center gap-x-2"
          onClick={() => navigate("/dashboard")}
        >
          {/* <img src={Logo} alt="" className="w-1/5" /> */}
          <h1 className="uppercase text-primary font-black  font-poppins">
            schoolar prime
          </h1>
        </div>

        <div className="h-full flex flex-col gap-3 mt-3">
          <SideBtn
            shrink={false}
            link="/dashboard"
            onClickFn={() => setNavOpen(false)}
            label="Dashboard"
          >
            <BiHomeAlt2 className="text-2xl" />
          </SideBtn>

          <SideBtn
            shrink={false}
            link="/dashboard/students"
            onClickFn={() => setNavOpen(false)}
            label="Students"
          >
            <PiStudent className="text-2xl" />
          </SideBtn>

          <SideBtn
            shrink={false}
            link="/dashboard/academics"
            onClickFn={() => setNavOpen(false)}
            label="Academics"
          >
            <ImProfile className="text-2xl" />
          </SideBtn>

          <SideBtn
            shrink={false}
            link="/dashboard/grades"
            onClickFn={() => setNavOpen(false)}
            label="Grades"
          >
            <LiaChalkboardTeacherSolid className="text-2xl font-bold" />
          </SideBtn>
          <SideBtn
            shrink={false}
            link="/dashboard/streams"
            onClickFn={() => setNavOpen(false)}
            label="Streams"
          >
            <VscSymbolClass className="text-2xl font-bold" />
          </SideBtn>

          <SideBtn
            shrink={false}
            link="/dashboard/finance"
            onClickFn={() => setNavOpen(false)}
            label="Finance"
          >
            <TbSettingsDollar className="text-2xl" />
          </SideBtn>

          <SideBtn
            shrink={false}
            link="/dashboard/disciplinary"
            onClickFn={() => setNavOpen(false)}
            label="Disciplinary"
          >
            <MdOutlineViewStream className="text-2xl font-bold" />
          </SideBtn>

          <SideBtn
            shrink={false}
            link="/dashboard/staff"
            onClickFn={() => setNavOpen(false)}
            label="Staff"
          >
            <FiUsers className="text-2xl rotate-90" />
          </SideBtn>

          <SideBtn
            shrink={false}
            link="/dashboard/school-details"
            onClickFn={() => setNavOpen(false)}
            label="School Details"
          >
            <TbSettingsDollar className="text-2xl" />
          </SideBtn>
          {/* <SideBtn
            shrink={false}
            link="/dashboard/BOM"
            onClickFn={() => setNavOpen(false)}
            label="BOM"
          >
            <FiUsers className="text-2xl" />
          </SideBtn> */}
        </div>
      </div>
    </>
  );
};

export default SideBar;
