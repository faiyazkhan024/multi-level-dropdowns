import { v4 } from "uuid";
import { MenuReducerType, RecursiveAddMenuType } from "src/types/menuTypes";

const recursiveAddMenu: RecursiveAddMenuType = (
  menuList,
  parentID,
  newMenu
) => {
  return menuList.map((menu) => {
    if (menu.id === parentID) {
      return {
        ...menu,
        children: [...(menu.children ?? []), newMenu],
      };
    }
    if (menu.children) {
      return {
        ...menu,
        children: recursiveAddMenu(menu.children, parentID, newMenu),
      };
    }
    return menu;
  });
};

const menuReducer: MenuReducerType = (state, action) => {
  if (action.type !== "add" || !action.payload) return state;

  const { parentID, name } = action.payload;
  const newMenu = { id: v4(), name, children: [] };

  return recursiveAddMenu(state, parentID, newMenu);
};

export default menuReducer;
