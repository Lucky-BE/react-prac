import React, { useState } from "react";
import MyContent from "./layout/MyContent";
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
  getItem("Option 1", "1", null, <PieChartOutlined />),
  getItem("Option 2", "2", null, <DesktopOutlined />),
  getItem("User", "sub1", null, <UserOutlined />, [
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

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("1");
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [itemPath, setItemPath] = useState([]);

  const setMenu = ({ key, keyPath }) => {
    const selectedItem = items.find(
      (item) =>
        item.key === key || item.children?.find((child) => child.key === key)
    );

    // 선택된 메뉴의 경로를 가져와서 Breadcrumb에 표시하기 위해 경로 설정
    if (selectedItem) {
      const path = getItemPath(selectedItem);
      setItemPath(path);
      setSelectedMenu(selectedItem);
    }
  };

  // 선택된 메뉴의 경로를 가져오는 함수 (재귀적으로 호출)
  const getItemPath = (menuItem) => {
    if (!menuItem.parent) return [menuItem];

    const parentItem = items.find((item) => item.key === menuItem.parent);
    const parentPath = getItemPath(parentItem);

    return [...parentPath, menuItem];
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultselectedmenus={["1"]}
          mode="inline"
          items={items}
          onClick={setMenu}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb
            style={{ margin: "16px 0" }}
            items={itemPath.map((item) => ({
              title: item.label,
              key: item.key,
            }))}
          />
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <MyContent selectedMenu={selectedMenu} />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;
