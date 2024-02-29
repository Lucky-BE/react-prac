import { atom } from 'recoil';

export const CurrentMenu = atom({
  key: 'currentMenu',
  default: {},
});

export const Menus = atom({
  key: 'menus',
  default: [],
});

export const profileValid = atom({
  key: 'profileValid',
  default: false,
});

export const ChangedUserInfo = atom({
  key: 'ChangedUserInfo',
  default: null,
});
