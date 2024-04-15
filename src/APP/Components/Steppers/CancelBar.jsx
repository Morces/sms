import { FaTimes } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const CancelBar = ({ mt = 0, mb = 0, click = () => {} }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex w-full bg-bright_grey justify-end items-center px-4 py-2"
      style={{ marginTop: `${mt}em`, marginBottom: `${mb}em` }}
      onClick={() => navigate(-1)}
    >
      <div className="flex flex-row items-center gap-x-3  text-cadet_grey text-xl w-fit cursor-pointer active:text-white">
        <p className=" text-3xl">
          <FaTimes />
        </p>
        <p className=" font-pop-reg">Cancel</p>
      </div>
    </div>
  );
};

export default CancelBar;
