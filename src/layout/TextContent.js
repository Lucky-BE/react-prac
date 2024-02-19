import { useEffect, useState } from "react";

const useMenuName = (selectedMenu, menuList) => {
  const [menuName, setMenuName] = useState("");

  useEffect(() => {
    debugger;
    setMenuName(selectedMenu.label);
    // let tmp;
    // if (selectedMenu.key != null && menuList != null) {
    //   if (
    //     selectedMenu.parent !== undefined &&
    //     selectedMenu.parent !== null &&
    //     selectedMenu.parent !== ""
    //   ) {
    //     tmp = menuList.find((menu) => menu.key === selectedMenu.parent);
    //     tmp = tmp.children.find((menu) => menu.key === selectedMenu.key);
    //   } else {
    //     tmp = menuList.find((menu) => menu.key === selectedMenu.key);
    //   }
    //   if (tmp !== undefined) {
    //     setMenuName(tmp.label);
    //   }
    // }
  }, [selectedMenu, menuList]);

  return menuName;
};

const TextContent = ({ selectedMenu, menuList }) => {
  const menuName = useMenuName(selectedMenu, menuList);

  return (
    <>
      <header>
        <h1>{menuName}</h1>
      </header>
      <main>
        <p>여기는 main 영역입니다.</p>
      </main>
      <footer>
        <p>여기는 footer 영역입니다.</p>
      </footer>
    </>
  );
};

export default TextContent;
