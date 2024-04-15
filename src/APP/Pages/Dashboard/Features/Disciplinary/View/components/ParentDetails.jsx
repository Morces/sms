import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
import Btn from "../../../../../../Components/Button/Btn";
import Details from "./GuardianDetails";
import AddKin from "./AddKin";

const ParentDetails = () => {
  const [showAdd, setshowAdd] = useState(false);
  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="mb-5 mt-5 p-4">
        <div className="flex justify-between mb-5">
          <h5 className="font-bold inline-flex items-center">
            GUARDIAN DETAILS
          </h5>
          <div className="pl-5">
            <Btn btn="primary" onClick={() => setshowAdd(true)}>
              <div className="flex flex-nowrap w-full text-[16px] items-center px-2 space-x-2">
                <BiPlus />
                <span>Add New</span>
              </div>
            </Btn>
          </div>
        </div>

        <hr className="w-full" />
        <Details
        //   kins={kins}
        //   setKins={setKins}
        //   activeKin={activeKin}
        //   setActiveKin={setActiveKin}
        //   relations={relations}
        //   init={init}
        />
        {showAdd && (
          <AddKin
            setShowModal={setshowAdd}
            showModal={showAdd}
            // setKins={setKins}
            // activeKin={activeKin}
            // setActiveKin={setActiveKin}
            // relations={relations}
            // init={init}
          />
        )}
      </div>
    </div>
  );
};

export default ParentDetails;
