const TD = ({ children, w = null }) => {
  return (
    <div
      style={{ width: w === null ? "auto" : `${w}%` }}
      className="break-words"
    >
      {children}
    </div>
  );
};

export default TD;
