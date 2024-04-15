const TR = ({ i = 1, children, onClick = () => {} }) => {
  return (
    <div
      className="w-full flex flex-col gap-x-5 py-4 px-2 rounded-lg"
      style={{ backgroundColor: i % 2 === 0 ? "#EBF9F1" : "white" }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default TR;
