const TR = ({ i = 1, children, onClick = () => {} }) => {
  const color = "#EBF9F1";

  return (
    <div
      className="w-full flex flex-row gap-x-5 py-4 px-2 rounded-lg hover:cursor-pointer"
      style={{ backgroundColor: i % 2 === 0 ? "#EBF9F1" : "white" }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default TR;
