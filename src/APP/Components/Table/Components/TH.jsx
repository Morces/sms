const TH = ({ label = "Table Header", w = null, custom = false, children }) => {
  if (custom === false) {
    return (
      <div
        className="uppercase"
        style={{ width: w === null ? "auto" : `${w}%` }}
      >
        {custom === false && (
          <p className=" uppercase text-black font-roboto text-[14px] font-medium ">
            {label}
          </p>
        )}
      </div>
    );
  }

  return <div>{children}</div>;
};

export default TH;
