import React from "react";
import Tile from "../../../../Components/Tile";
import CardContainters from "../../Components/Cards/CardsContainer";

const TileAnalytics = () => {
  return (
    <CardContainters>
      <Tile
        primaryText={`All Staff`}
        bgImage="bg-image-1"
        bgGradient="bg-green-gradient"
        onClick={() => {}}
        secondaryText={"Total: 80"}
      />
      <Tile
        primaryText={`All Teachers`}
        bgImage="bg-image-3"
        bgGradient="bg-yellow-gradient"
        onClick={() => {}}
        secondaryText={"Total: 50"}
      />
      <Tile
        primaryText={`All Students`}
        bgImage="bg-image-2"
        bgGradient="bg-primary-gradient"
        onClick={() => {}}
        secondaryText={"Total: 500"}
      />
      <Tile
        primaryText={`BOM & PTA`}
        bgImage="bg-image-1"
        bgGradient="bg-primary"
        onClick={() => {}}
        secondaryText={"Total: 20"}
      />
      <Tile
        primaryText={`Non-Teaching Staff`}
        bgImage="bg-image-1"
        bgGradient="bg-primary"
        onClick={() => {}}
        secondaryText={"Total: 20"}
      />
    </CardContainters>
  );
};

export default TileAnalytics;
