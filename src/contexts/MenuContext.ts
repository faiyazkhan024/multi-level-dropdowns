import { createContext } from "react";

import { MenuContextType } from "src/types/menuTypes";
import menuData from "src/data/menu";

const MenuContext = createContext<MenuContextType>({
  menu: menuData,
  addMenu: () => {},
});

export default MenuContext;
