import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
import Btn from "../../../../../../../../../Components/Button/Btn";
import Details from "./Balances";
import BillModal from "./BillModal";
import InvoiceStudent from "./InvoiceModal";

const StudentBalance = () => {
  const [showBill, setshowBill] = useState(false);
  const [showInvoice, setShowInvoice] = useState(false);
  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="mb-5 mt-5 p-4">
        <div className="flex justify-between mb-5">
          <h5 className="font-bold inline-flex items-center">
            STUDENT BALANCE
          </h5>
          <div className="flex justify-between gap-x-4 max-md:flex-col">
            <Btn btn="primary" onClick={() => setshowBill(true)}>
              <div className="flex flex-nowrap w-full text-[16px] items-center px-2 space-x-2">
                <BiPlus />
                <span>Bill</span>
              </div>
            </Btn>
            <Btn btn="primary" onClick={() => setShowInvoice(true)}>
              <div className="flex flex-nowrap w-full text-[16px] items-center px-2 space-x-2">
                <BiPlus />
                <span>Invoice</span>
              </div>
            </Btn>
          </div>
        </div>

        <hr className="w-full" />
        <Details />
        {showBill && (
          <BillModal setShowModal={setshowBill} showModal={showBill} />
        )}
        {showInvoice && (
          <InvoiceStudent setShowModal={setShowInvoice} showModal={showInvoice} />
        )}
      </div>
    </div>
  );
};

export default StudentBalance;
