import React, { useState, useEffect } from "react";
import { SlArrowRightCircle } from "react-icons/sl";

import { FaUserEdit } from "react-icons/fa";

import { MdDelete } from "react-icons/md";

import EditKin from "./EditKin";
import DeleteKin from "./DeleteKin";

const Details = ({
  activeKin,
  setActiveKin,
  kins,
  setKins,
  relations,
  init,
}) => {
  const [showEdit, setShowEdit] = useState(false);
  const [showDel, setShowDel] = useState(false);

  function handleNext() {
    if (activeKin + 1 > kins.length - 1) {
      setActiveKin(0);
      return;
    }
    setActiveKin((c) => c + 1);
  }

  //   if (kins[activeKin] == null) return null;

  return (
    <>
      {" "}
      <div className=" w-full">
        <div className="mt-5 pl-4">
          <h6 className="font-medium">NEXT OF KIN {activeKin + 1}</h6>
          <div className="mt-1">
            <h5 className="mb-2 text-xl font-medium tracking-tight text-cadet_grey ">
              NAME :
              <span className="mb-3 font-normal text-black ">
                {/* {kins[activeKin].name} */} Moses Karani
              </span>
            </h5>
          </div>
          <div className="mt-3">
            <h5 className="mb-2 text-xl font-medium tracking-tight text-cadet_grey ">
              PHONE :{" "}
              <span className="mb-3 font-normal text-black ">
                {/* {kins[activeKin].phone} */}0712345678
              </span>
            </h5>
          </div>
          <div className="mt-3">
            <h5 className="mb-2 text-xl font-medium tracking-tight text-cadet_grey ">
              ID NUMBER :{" "}
              <span className="mb-3 font-normal text-black ">
                {/* {kins[activeKin].parent_idno} */}123456
              </span>
            </h5>
          </div>
          <div className="mt-3">
            <h5 className="mb-2 text-xl font-medium tracking-tight text-cadet_grey ">
              GENDER :{" "}
              <span className="mb-3 font-normal text-black ">
                {/* {kins[activeKin].gender} */}Male
              </span>
            </h5>
          </div>
          <div className="mt-3">
            <h5 className="mb-2 text-xl font-medium tracking-tight text-cadet_grey ">
              RELATIONSHIP :{" "}
              <span className="mb-3 font-normal text-black ">
                {/* {kins[activeKin].relationships == null
                ? ""
                : kins[activeKin].relationships.name} */}
                Father
              </span>
            </h5>
          </div>
        </div>
        <div className="flex  justify-between w-full items-center ">
          <div className=" flex gap-x-2 ">
            <span
              onClick={() => setShowEdit(true)}
              className="text-primary cursor-pointer active:opacity-50  text-3xl pl-2"
            >
              <FaUserEdit />
            </span>
            <span
              onClick={() => setShowDel(true)}
              className="text-red active:opacity-50 cursor-pointer  text-3xl pl-2"
            >
              <MdDelete />
            </span>
          </div>
          <div
            className=" flex active:opacity-50 cursor-pointer"
            onClick={handleNext}
          >
            <p className="font-bold text-xl underline">NEXT</p>
            <span className="text-primary text-3xl pl-2">
              <SlArrowRightCircle />
            </span>
          </div>
        </div>
        {showEdit && (
          <EditKin
            showModal={showEdit}
            setShowModal={setShowEdit}
            // setKins={setKins}
            // kin={kins[activeKin]}
            // relations={relations}
            // init={init}
          />
        )}
        {showDel && (
          <DeleteKin
            setShowModal={setShowDel}
            showModal={showDel}
            // setKins={setKins}
            // kins={kins}
            // activeKin={activeKin}
            // setActiveKin={setActiveKin}
          />
        )}
      </div>
    </>
  );
};

export default Details;
