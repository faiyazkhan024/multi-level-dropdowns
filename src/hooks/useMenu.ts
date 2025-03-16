import { useContext } from "react";

import MenuContext from "src/contexts/MenuContext";

export const useMenu = () => {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error("useMenu must be used within a MenuContextProvider");
  }

  return context;
};
