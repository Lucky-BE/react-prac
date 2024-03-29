import { useRecoilState } from "recoil";
import { CurrentMenu, Menus } from "../common/atom";
import { useEffect, useState } from "react";
import UserList from "./UserList";
import MyPlayer from "./MyPlayerTest";
import MyFile from "./MyFile";
import Pages from "./Pages";

const AppContent = () => {
  const [currentMenu, setCurrentMenu] = useRecoilState(CurrentMenu);
  const [menus, setMenus] = useRecoilState(Menus);
  const [contentArea, setContentArea] = useState(null);

  useEffect(() => {
    console.log("AppContentTest currentMenu::::", currentMenu);
    console.log("AppContentTest menus::::", menus);
    debugger;
    switch (currentMenu.type) {
      case "T":
        setContentArea(<UserList currentMenu={currentMenu} />);
        break;
      case "F":
        setContentArea(<MyFile />);
        break;
      case "V":
        setContentArea(
          <MyPlayer
            url={currentMenu.url}
            selectedMenu={currentMenu.key}
            index={0}
            style={{ width: "60%", height: "50%" }}
          />
        );
        break;
      case "P":
        setContentArea(<Pages currentMenu={currentMenu} />);
        break;
      default:
        setContentArea(null);
        break;
    }
  }, [currentMenu, menus]);

  return <>{contentArea}</>;
};
export default AppContent;
