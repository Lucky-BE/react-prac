import React, { useState } from "react";
import MyContent from "../MyContent";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  PlaySquareOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, parent, icon, children) {
  return {
    key,
    icon,
    children,
    label,
    parent,
  };
}

const items = [
  getItem("User List", "1", null, <DesktopOutlined />),
  getItem("Option 2", "2", null, <PieChartOutlined />),
  getItem("Profile", "sub1", null, <UserOutlined />, [
    getItem("Tom", "3", "sub1"),
    getItem("Bill", "4", "sub1"),
    getItem("Alex", "5", "sub1"),
  ]),
  getItem("Team", "sub2", null, <TeamOutlined />, [
    getItem("Team 1", "6", "sub2"),
    getItem("Team 2", "8", "sub2"),
  ]),
  getItem("Files", "9", null, <FileOutlined />),
  getItem("Video", "10", null, <PlaySquareOutlined />),
];

const AppContent = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [menuList, setMenuList] = useState(items);
  const [selectedMenu, setSelectedMenu] = useState("1");
  const [itemPath, setItemPath] = useState([{ title: "" }]);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const setMenu = ({ key, keyPath }) => {
    debugger;
    // const selectedItem = items.find((item) => item.key === key);
    const selectedItem = items.find(
      (item) =>
        item.key === key || item.children?.find((child) => child.key === key)
    );
    let childItem = selectedItem.children?.find((item) => item.key === key);

    let path;
    if (childItem) {
      setSelectedMenu(childItem);
      path = getItemPath(childItem);
    } else {
      setSelectedMenu(selectedItem);
      path = getItemPath(selectedItem);
    }
    setItemPath(path);
  };

  /**
   * 선택된 메뉴의 경로를 가져오는 함수(재귀적으로 호출)
   * @param {*} menuItem
   * @returns path
   */
  const getItemPath = (menuItem) => {
    //menuItem 객체에 parent가 없으면 menuItem.label 리턴
    if (!menuItem.parent) return [{ title: menuItem.label }];

    const parentItem = items.find((item) => item.key === menuItem.parent);
    const parentPath = getItemPath(parentItem);

    return [...parentPath, { title: menuItem.label }];
  };

  return (
    <>
      <div>test</div>
    </>
  );
};
export default AppContent;
