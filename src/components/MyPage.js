import { Menu } from "antd";

const MyPage = () => {
  return (
    <>
      <div align="center" width="100%">
        <h1>MyPage</h1>
        <Menu
          style={{ width: "100%" }}
          defaultSelectedKeys={["1"]}
          mode="horizontal"
          items={[
            {
              key: "1",
              label: "Profile",
            },
          ]}
        />
      </div>
    </>
  );
};

export default MyPage;
