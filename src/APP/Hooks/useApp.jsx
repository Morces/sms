import React, { useContext } from "react";

import AppContext from "../Context/AppContext";

const useApp = () => {
  const doc = useContext(AppContext);

  return doc;
};

export default useApp;
