import { useReducer, FC, ReactNode } from "react";

import MenuContext from "src/contexts/MenuContext";
import menuReducer from "src/reducers/MenuReducer";
import { MenuPayloadType } from "src/types/menuTypes";
import menuData from "src/data/menu";

interface MCPPT {
  children: ReactNode;
}

export const MenuContextProvider: FC<MCPPT> = ({ children }) => {
  const [menu, dispatch] = useReducer(menuReducer, menuData);

  const addMenu = (menu: MenuPayloadType) => {
    dispatch({ type: "add", payload: menu });
  };

  return (
    <MenuContext.Provider value={{ menu, addMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
