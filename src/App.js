import { useState } from "react";
import AppContent from "./layout/content/AppContnet";
import { Button, Space } from "antd";
import AppContent2 from "./layout/content/AppContent2";

const App = () => {
  const [content, setContent] = useState(null);

  const clickHandle = (value) => {
    console.log(value);
    switch (value) {
      case "test1":
        setContent(<AppContent />);
        break;
      case "test2":
        setContent(<AppContent2 />);
        break;
      default:
        break;
    }
  };
  // if (!content) {
  //   return <></>;
  // }
  return (
    <>
      <div style={{ padding: "20px" }}>
        <Space>
          <Button
            type="primary"
            name="test1"
            onClick={() => clickHandle("test1")}
          >
            test 1
          </Button>
          <Button
            type="primary"
            name="test2"
            onClick={() => clickHandle("test2")}
          >
            test 2
          </Button>
        </Space>
      </div>
      <main>{content}</main>
    </>
  );
};

export default App;
