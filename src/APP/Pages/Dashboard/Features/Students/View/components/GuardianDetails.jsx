import React from "react";

const Details = ({ student }) => {
  return (
    <>
      {" "}
      <div className=" w-full">
        <div className="mt-5 pl-4">
          <div className="mt-1">
            <h5 className="mb-2 text-xl font-medium tracking-tight text-cadet_grey ">
              NAME : {"  "}
              <span className="mb-3 font-normal text-black ">
                {student?.parent_name}
              </span>
            </h5>
          </div>
          <div className="mt-3">
            <h5 className="mb-2 text-xl font-medium tracking-tight text-cadet_grey ">
              PHONE 1 :{" "}
              <span className="mb-3 font-normal text-black ">
                {student?.parent_phone}
              </span>
            </h5>
          </div>
          <div className="mt-3">
            <h5 className="mb-2 text-xl font-medium tracking-tight text-cadet_grey ">
              PHONE 2:{" "}
              <span className="mb-3 font-normal text-black ">
                {student?.parent_phone2}
              </span>
            </h5>
          </div>
          <div className="mt-3">
            <h5 className="mb-2 text-xl font-medium tracking-tight text-cadet_grey ">
              ID NUMBER :{" "}
              <span className="mb-3 font-normal text-black ">
                {student?.parent_idno}
              </span>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
