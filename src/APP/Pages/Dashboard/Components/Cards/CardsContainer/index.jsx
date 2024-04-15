import React from "react";

const CardsContainer = ({ children }) => {
  return (
    <div className="flex w-[calc(100vw-50px)] md:w-[calc(100vw-50px)] cursor-pointer lg:w-[calc(100vw-310px)] scroll-hidden overflow-x-auto">
      <div className=" flex gap-2 w-fit">{children}</div>
    </div>
  );
};

export default CardsContainer;
