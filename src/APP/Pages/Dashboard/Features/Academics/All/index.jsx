import React from "react";
import CardTab from "./CardTab";
import Assessments from "./components/Assessments";
import Subjects from "./components/Subjects/All";

const Academics = () => {
  const cardData = [
    {
      id: 1,
      primaryText: "Total Subjects",
      secondaryText: `Total 10`,
      childrenIcon: "total",
      bgGradient: "bg-primary",
      component: <Subjects />,
    },
    {
      id: 2,
      primaryText: "All Assessments",
      secondaryText: ``,
      childrenIcon: "pending",
      bgGradient: "bg-gradient-5",
      component: <Assessments />,
    },
  ];

  return (
    <div className="">
      <CardTab data={cardData} />
    </div>
  );
};

export default Academics;
