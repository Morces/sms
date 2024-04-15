const className = "py-2 px-3 text-xs font-karla rounded-xl flex w-fit";

const badgeClassInitial = className;

const badgeClass = {
  success: `${badgeClassInitial} bg-gradient-to-b from-[#45C837] to-[#7ADE74] text-white`,
  error: `${badgeClassInitial} bg-off-white-3 text-white`,
  warning: `${badgeClassInitial} bg-gradient-to-b from-[#940000] to-[#CC4141] text-white`,
  disabled: `${badgeClassInitial} bg-dark-gray-whisper text-dark-gray-opaque `,
};

const badgeClassNames = ["success",  "error",  "warning",  "disabled"];

export { badgeClass, badgeClassNames };
