import { Button, FloatButton, Space } from "antd";
import { useState } from "react";
import AppContent from "./content/AppContnet";
import AppContent2 from "./content/AppContent2";
import AXIOS from "../axiosInstance";
const Home = () => {
  const [content, setContent] = useState(null);

  const getItem = (label, key, parent, icon, children) => {
    return {
      key,
      icon,
      children,
      label,
      parent,
    };
  };

  const clickHandle = (value) => {
    console.log(value);
    switch (value) {
      case "test1":
        setContent(<AppContent />);
        break;
      case "test2":
        setContent(<AppContent2 />);
        break;
      case "test3":
        let test = {
          id: 2,
          name: "Tim",
          age: "21",
        };
        AXIOS.post("/test", test).then((res) => {
          console.log("### test response data ==> ", res.data);
        });

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
            href="/appContent1"
            // onClick={() => clickHandle("test1")}
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
          <Button
            type="primary"
            name="test3"
            onClick={() => clickHandle("test3")}
          >
            test3
          </Button>
        </Space>
      </div>
      <main>{content}</main>
      <FloatButton.BackTop />
    </>
  );
};

export default Home;
