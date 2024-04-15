import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import AppContext from "../../Context/AppContext"; // Adjust the import path

const Breadcrumb = () => {
  const location = useLocation();
  const { breadcrumbItems, setBreadcrumbItems } = useContext(AppContext);

  useEffect(() => {
    const pathname = location.pathname;
    const parts = pathname.split("/").filter((part) => part);
    const newBreadcrumbItems = parts.map((part, index) => ({
      label: part.replace("-", " "),
      to: `/${parts.slice(0, index + 1).join("/")}`,
    }));

    setBreadcrumbItems([
      { label: "Home", to: "/dashboard" },
      ...newBreadcrumbItems.slice(1),
    ]);
  }, [location.pathname, setBreadcrumbItems]);

  return (
    <div className="flex items-center text-gray-600 bg-white mr-4 p-4 rounded-md font-poppins">
      {breadcrumbItems.map((item, index) => (
        <div key={index} className="flex items-center font-medium">
          {index > 0 && (
            <FaLongArrowAltRight className="mx-2 text-xl text-gray" />
          )}
          {item.to ? (
            <Link
              to={item.to}
              className={`${
                index === breadcrumbItems.length - 1
                  ? "text-primary"
                  : "text-gray"
              }`}
            >
              {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
