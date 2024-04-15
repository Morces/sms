import React from "react";
import CardTab from "./CardTab";
import Students from "./components/Students";
import Staff from "./components/Staff";
import Programmes from "./components/Programmes";
import Terms from "./components/Terms";

const Finance = () => {
  const cardData = [
    {
      id: 1,
      primaryText: "Total Students",
      secondaryText: `Total 500`,
      childrenIcon: "total",
      bgGradient: "bg-primary",
      component: <Students />,
    },
    {
      id: 2,
      primaryText: "Total Staff",
      secondaryText: `Total 50`,
      childrenIcon: "pending",
      bgGradient: "bg-gradient-5",
      component: <Staff />,
    },
    {
      id: 3,
      primaryText: "Terms & ",
      secondaryText: `School Fees`,
      childrenIcon: "pending",
      bgGradient: "bg-gradient-5",
      component: <Terms />,
    },
    {
      id: 4,
      primaryText: "Programmes",
      secondaryText: ``,
      childrenIcon: "pending",
      bgGradient: "bg-gradient-5",
      component: <Programmes />,
    },
  ];

  return (
    <div className="">
      <CardTab data={cardData} />
    </div>
  );
};

export default Finance;
