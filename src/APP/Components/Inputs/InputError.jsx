const InputError = ({ input = "", message = "", error = true }) => {
  return (
    <small
      className=" text-red-400 "
      style={{ opacity: error ? "100%" : "0%", fontSize: 12 }}
    >
      {input === "" ? "* Field required" : message}
    </small>
  );
};

export default InputError;
