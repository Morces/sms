import React, { useEffect } from "react";

const Input = ({ children, mt = 0, mb = 0 }) => {
  return (
    <div className="w-full flex flex-col gap-[10px]" style={{ marginTop: mt, marginBottom: mb }}>
      {children}
    </div>
  );
};

export default Input;
