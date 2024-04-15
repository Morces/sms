import React from "react";

const Steppers = ({ steps, currentStep }) => {
  return (
    <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 sm:text-base">
      {steps.map((step, index) => (
        <li
          key={index}
          className={`flex ${
            index === steps.length - 1 ? "" : "md:w-full"
          } items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-black after:border-1 after:hidden sm:after:inline-block after:mx-4 xl:after:mx-6 ${
            index < currentStep ? "text-primary" : "text-black"
          }`}
        >
          <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray">
            {index < currentStep ? (
              <svg
                className="w-8 h-8 sm:w-6 sm:h-6 mr-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
            ) : (
              <span className="mr-2 rounded-full border px-2 ">
                {index + 1}
              </span>
            )}
            {step}
          </span>
        </li>
      ))}
    </ol>
  );
};

export default Steppers;
