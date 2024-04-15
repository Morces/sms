import { btnClass, btnSizes, btnPadding } from "../../Utils/config/btns.style";

const Btn = ({
  btn = "primary",
  outline = false,
  ex = "",
  rounded = false,
  size = "auto",
  disabled = false,
  onClick = () => {},
  padding = "lg",
  children,
}) => {
  function clickBtn() {
    if (!disabled) {
      onClick();
    }
  }

  return (
    <div
      onClick={clickBtn}
      className={`${
        btnClass[btn] ? btnClass[btn][outline] : btnClass["primary"][outline]
      } 
        ${
          disabled
            ? "cursor-not-allowed bg-gray-300 bg-opacity-50"
            : "cursor-pointer hover:shadow active:shadow-none active:bg-opacity-70 duration-100"
        }
        ${btnSizes[size] ? btnSizes[size] : btnSizes["auto"]}
        ${rounded ? "rounded-3xl" : "rounded-lg"} 
        ${btnPadding[padding] ? btnPadding[padding] : btnPadding["lg"]}
        ${ex} `}
    >
      {children}
    </div>
  );
};

export default Btn;
