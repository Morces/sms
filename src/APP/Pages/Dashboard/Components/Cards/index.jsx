import React from "react";
import Tile from "../../../../Components/Tile";
import CardsContainer from "./CardsContainer";

const Cards = ({ data }) => {
  return (
    <CardsContainer>
      {data?.map((data, i) => (
        <Tile
          key={i}
          primaryText={data.primaryText}
          bgGradient={data.bgGradient}
          bgImage={data.bgImage}
          secondaryText={data.secondaryText}>
          <p className="absolute top-[50%] left-[30%] text-sm">
            {data.helperSecondary}
          </p>
          <img className="absolute top-3" src={data.childrenIcon} />
          <div className="flex absolute top-[50%]">
            <span className="underline text-sm">{data.childrenText}</span>
            <img src={data.childIcon} />
          </div>
        </Tile>
      ))}
    </CardsContainer>
  );
};

export default Cards;
