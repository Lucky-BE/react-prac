import { Menu } from "antd";
import { useEffect, useState } from "react";
import AXIOS from "../../axiosInstance";
import { useRecoilState } from "recoil";
import { CurrentMenu, Menus } from "../../common/atom";

/**
 * 메뉴 정보 가져오기
 * @returns 메뉴 정보 리스트 반환
 */
const useMenu = () => {
  const [menu, setMenu] = useRecoilState(Menus);
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
  const menus = useMenu();
  const [currentMenu, setCurrentMenu] = useRecoilState(CurrentMenu);

  const menuClick = (value) => {
    debugger;
    setCurrentMenu(() => menus.find((item) => item.key === value.key));
  };

  return (
    <>
      <Menu
        theme="dark"
        defaultselectedmenus={["1"]}
        mode="horizontal"
        items={menus}
        style={{
          display: "flex", // 플렉스 박스로 설정
          justifyContent: "center", // 가로 방향으로 가운데 정렬
          alignItems: "center",
          width: "100%",
          height: "70px",
        }}
        onClick={menuClick}
        alignItems="center"
      />
    </>
  );
};

export default MainMenuNav;
