import { Menu } from "antd";
import { useEffect, useState } from "react";
import Profile from "./MyPages/Profile";

const MyPage = () => {
  const [contents, setContents] = useState(null);

  useEffect(() => {
    if (!contents) {
      setContents(<Profile />);
    }
  }, []);

  const onClickHandler = (value) => {
    switch (value.key) {
      case "1":
        setContents(<Profile />);
        break;
      default:
        break;
    }
  };
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
          onClick={onClickHandler}
        />
      </div>
      {contents}
    </>
  );
};

export default MyPage;
