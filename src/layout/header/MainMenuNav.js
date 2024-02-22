import { Menu } from "antd";
import { useEffect, useState } from "react";
import AXIOS from "../../axiosInstance";
import { useRecoilState } from "recoil";
import { CurrentMenu } from "src/common/atom";

/**
 * 메뉴 정보 가져오기
 * @returns 메뉴 정보 리스트 반환
 */
const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const getMenu = () => {
    return new Promise((resolve, reject) => {
      AXIOS("/menuList").then((res) => {
        console.log("getMenu res: ", res.data);
        resolve(res.data);
      });
    });
  };

  useEffect(() => {
    const setMenus = async () => {
      try {
        const data = await getMenu();
        setMenu(data);
      } catch (e) {
        console.log("Error setMenu: ", e);
      }
    };
    setMenus();
  }, []);

  return menu;
};

const MainMenuNav = () => {
  const menu = useMenu();
  const [currentMenu, setCurrentMenu] = useRecoilState(CurrentMenu);

  return (
    <>
      <Menu
        theme="dark"
        defaultselectedmenus={["1"]}
        mode="horizontal"
        items={menu}
        style={{ alignItems: "center", width: "100%" }}
      />
    </>
  );
};

export default MainMenuNav;
