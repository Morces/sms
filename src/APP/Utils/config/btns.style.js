const className =
  "rounded-3xl flex items-center gap-2 align-middle justify-center font-karla text-base ";

const btnClassInitial = className;

const outlineStyle = "border-[1px] border-solid active:bg-opacity-5";

const btnClass = {
  primary: {
    // outline boolean
    false: `${btnClassInitial} 
  w-auto w-auto text-white bg-primary`,

    true: `${btnClassInitial} ${outlineStyle} 
  text-white bg-primary border-primary active:text-white`,
  },
  secondary: {
    // outline boolean
    false: `${btnClassInitial}  
  text-white text-base bg-secondary`,
    true: `${btnClassInitial} ${outlineStyle} 
  text-secondary active:bg-secondary border-secondary`,
  },
  border: {
    true: `border border-primary hover:bg-primary hover:text-white`,
  },
};

const btnSizes = {
  block: `w-full`,
  auto: `w-fit`,
};

const btnPadding = {
  lg: "px-4 py-3",
  sm: "px-3 py-2",
};

const btnNames = ["secondary", "primary"];

const btnSizeNames = ["block", "auto"];

const btnOutlineOptions = ["true", "false"];

const btnPaddingNames = ["lg", "sm"];

export {
  btnClass,
  btnNames,
  btnSizes,
  btnSizeNames,
  btnOutlineOptions,
  btnPadding,
  btnPaddingNames,
};
