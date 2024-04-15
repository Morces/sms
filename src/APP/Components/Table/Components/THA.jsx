import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const THA = ({ w = null, label, click }) => {
  return (
    <div
      className="flex flex-row   items-center font-roboto text-base cursor-pointer"
      onClick={click}
      style={{ width: w === null ? "auto" : `${w}%` }}
    >
      <p className="uppercase text-black font-roboto text-[14px] font-medium ">
        {label}
      </p>
      <div className="flex flex-col ml-4" style={{ color: "#C7CCD0" }}>
        <IoIosArrowUp />
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default THA;
