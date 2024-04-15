import React from "react";
import { Bars } from "react-loader-spinner";
import { colors } from "../../Utils/colors";

const Loading = ({
  showModal,
  setShowModal,
  showModalCloseBtn = false,
  loadingText = null,
}) => {
  if (showModal) {
    return (
      <>
        <>
          <div className="justify-center items-center flex overflow-x-clip overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-fit my-6 mx-auto ">
              {/*content*/}
              <div
                className="border-0   relative flex flex-col w-full  outline-none focus:outline-none"
                style={{
                  borderRadius: "20px",
                }}
              >
                {/*header*/}
                {showModalCloseBtn ? (
                  <div className="w-full flex flex-row justify-end ">
                    <span
                      onClick={() => setShowModal(false)}
                      className=" mr-4 mt-4 text-xl font-bold hover:font-extrabold hover:text-red-500 cursor-pointer text-slate-400"
                    >
                      X
                    </span>
                  </div>
                ) : null}
                {/*body*/}
                <div className="relative  px-6 flex-auto flex flex-col bg-transparent items-center w-fit ">
                  <Bars
                    height="80"
                    width="80"
                    color={colors.primary}
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                  <span className=" animate-pulse  mt-6 text-white text-2xl font-DM-Bold ">
                    {loadingText || "Loading ..."}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      </>
    );
  }

  return null;
};

export default Loading;
