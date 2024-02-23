import { atom } from "recoil";

export const CurrentMenu = atom({
  key: "currentMenu",
  default: {},
});

export const Menus = atom({
  key: "menus",
  default: [],
});
