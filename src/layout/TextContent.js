import { useEffect, useState } from "react";

const useMenuName = (selectedMenu, menuList) => {
  const [menuName, setMenuName] = useState("");

  useEffect(() => {
    setMenuName(selectedMenu.label);
  }, [selectedMenu, menuList]);

  return menuName;
};

const TextContent = (props) => {
  const { selectedMenu, menuList } = props;
  const menuName = useMenuName(selectedMenu, menuList);
  const [mainContent, setMainContent] = useState(null);

  useEffect(() => {
    if (selectedMenu.key === "1") {
    }
  }, [selectedMenu]);

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
