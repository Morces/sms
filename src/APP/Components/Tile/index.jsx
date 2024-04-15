/* eslint-disable react/prop-types */
import { tileVariant } from "../../Utils/config/tile.style";

import bgImage1 from "../../Assets/TileImageBgs/card-bg.png";
import bgImage2 from "../../Assets/TileImageBgs/card-bg-2.png";
import bgImage3 from "../../Assets/TileImageBgs/card-bg-3.png";

function Tile({
  variant = "data",
  sx = "",
  primaryText = "Title",
  secondaryText = "Data",
  onClick = () => {},
  children,
  bgGradient = "bg-gradient-1",
  bgImage = "none",
}) {
  const ImageSrc = {
    none: null,
    "bg-image-1": (
      <img className="absolute -z-10 h-full top-0" src={bgImage1} />
    ),
    "bg-image-2": (
      <img
        className="absolute -z-10 h-[135%] object-cover top-1/2 translate-x-6 -translate-y-1/2 right-0"
        src={bgImage2}
      />
    ),
    "bg-image-3": (
      <img
        className="absolute -z-10 h-[135%] object-cover top-1/2 -translate-x-6 -translate-y-1/2 "
        src={bgImage3}
      />
    ),
  };
  return (
    <div
      onClick={onClick}
      className={` ${tileVariant[variant]} ${bgGradient} ${
        variant === "info" ? "hover:bg-secondary" : ""
      } ${sx} `}
    >
      {ImageSrc[bgImage] ? ImageSrc[bgImage] : ImageSrc["none"]}

      <div
        className={`flex-grow flex flex-col px-5 ${
          variant === "info" ? "gap-3 pb-6 pt-8 " : "pb-[50px] pt-7 gap-5"
        }`}
      >
        <div className=" text-xl font-bold">{primaryText}</div>
        <div
          className={
            variant === "info"
              ? "text-base font-normal"
              : " text-[28px] font-semibold"
          }
        >
          {secondaryText}
        </div>
      </div>
      <div className="w-1/5">{children}</div>
    </div>
  );
}

export default Tile;
