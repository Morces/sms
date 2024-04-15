import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({
  page = 1,
  hasNextPage = true,
  hasPrevPage = false,
  nextClick = () => {},
  prevClick = () => {},
}) => {
  function handlePrevClick() {
    if (page === 1 || hasPrevPage === false) return;
    prevClick();
  }

  function handleNextClick() {
    if (hasNextPage) {
      nextClick();
      return;
    }
  }

  return (
    <div className="flex w-full items-center justify-center mt-4">
      <div className="flex gap-x-4 items-center">
        <button
          className="text-xs text-gray font-karla flex justify-center items-center hover:text-primary "
          style={{
            opacity: hasPrevPage === false || page === 1 ? 0.2 : 100,
            cursor: hasPrevPage ? "pointer" : "",
          }}
          disabled={hasPrevPage === false || page === 1 ? true : false}
          onClick={handlePrevClick}
        >
          Previous
        </button>
        <button
          className={` rounded-md w-8 h-8 border-[1px] border-gray-200 text-[16px] flex justify-center items-center hover:bg-primary hover:text-white hover:border-primary`}
        >
          {page}
        </button>
        <button
          className="text-xs text-gray font-karla flex justify-center items-center hover:text-primary"
          style={{
            opacity: hasNextPage === false ? 0.2 : 100,
            cursor: hasNextPage ? "pointer" : "",
          }}
          disabled={hasNextPage === false ? true : false}
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
