const className =
  "relative z-0 rounded-2xl flex items-center text-white overflow-hidden";
const initialTileVariant = className;

const tileVariant = {
  info: `w-[300px] h-[100px] ${initialTileVariant} `,
  data: `w-[350px] h-[150px] ${initialTileVariant} `,
};

const bgGradientNames = [ "bg-dark-gray-opaque" , "bg-gradient-green", "bg-gradient-1", "bg-gradient-2", "bg-gradient-3", "bg-gradient-4", "bg-gradient-5", "bg-gradient-6", "bg-secondary" ];

const tileVariantNames = ["info", "data"];

export { tileVariant, tileVariantNames, bgGradientNames};
