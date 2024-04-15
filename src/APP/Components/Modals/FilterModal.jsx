import Filter from "./Filter";

const FilterModal = ({
  children,
  cancel,
  apply,
  showFilter,
  setShowFilter,
}) => {
  if (showFilter) {
    return (
      <>
        <>
          <div className=" h-screen flex overflow-x-clip overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-fit mx-auto">
              {/*content*/}
              <div className="border-0  shadow-lg relative flex flex-col w-full items-end  outline-none focus:outline-none">
                <div className="relative w-screen    flex-auto h-screen">
                  {/* {children} */}
                  <Filter
                    cancel={cancel}
                    apply={apply}
                    setShowFilter={setShowFilter}
                  >
                    {children}
                  </Filter>
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

export default FilterModal;
