import { atom } from "recoil";

const CurrentMenu = atom({
  key: "currentMenu",
  default: "1",
});

export default CurrentMenu;
