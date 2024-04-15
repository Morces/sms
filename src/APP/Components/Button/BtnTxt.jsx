/* eslint-disable react/prop-types */
import { btnClass, btnSizes, btnPadding } from "../../Util/config/btns.style";
// size<block,auto>

// btn= primary,secondary

// outline=(false)

// ex=>

// diabled=>
const BtnTxt = ({
  text = "Vedi",
  btn = "primary",
  outline = false,
  ex = "",
  rounded = false,
  size = "auto",
  disabled = false,
  onClick = () => { },
  padding="lg",
}) => {
  function clickBtn (){
    if(!disabled){
      onClick();
    }
  }
  return (
    <div
      onClick={clickBtn}
      className={`${btnClass[btn] ? btnClass[btn][outline] : btnClass["primary"][outline] } 
      ${disabled ? "cursor-not-allowed bg-gray-300 bg-opacity-50" : "cursor-pointer hover:shadow active:shadow-none active:bg-opacity-70 duration-100"}
      ${btnSizes[size] ? btnSizes[size] : btnSizes["auto"]}
      ${rounded ? "rounded-3xl" : "rounded-lg"} 
      ${btnPadding[padding] ? btnPadding[padding] : btnPadding["lg"] }
      ${ex} 
    `}
    >
      <p>{text}</p>
    </div>
  );
};

export default BtnTxt;
