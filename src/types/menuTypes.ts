export interface MenuPayloadType {
  name: string;
  parentID: string;
}

export type RecursiveAddMenuType = (
  menuList: Array<MultiLevelDropdown>,
  parentID: string,
  newMenu: MultiLevelDropdown
) => Array<MultiLevelDropdown>;

export type MenuReducerType = (
  state: Array<MultiLevelDropdown>,
  action: {
    type: string;
    payload?: MenuPayloadType;
  }
) => Array<MultiLevelDropdown>;

export interface MenuContextType {
  menu: Array<MultiLevelDropdown>;
  addMenu: (menu: MenuPayloadType) => void;
}
