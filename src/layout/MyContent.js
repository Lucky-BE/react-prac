import React, { useEffect, useState } from "react";
import Video from "./video/Player";
import TextContent from "./TextContent";
import TeamTable from "./team/TeamTable";
import axiosInstance from "../axiosInstance";

const useContentSet = (value) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    debugger;
    let menuKey = value.selectedMenu.key;
    switch (menuKey) {
      case "1":
        const fetchData = async () => {
          try {
            const res = await axiosInstance("/userList");

            setContent(<TeamTable data={res.data} />);
          } catch (e) {
            console.log("Error fetching data: ", e);
          }
        };
        fetchData();
        break;
      case "sub1":
        setContent(
          <TextContent
            selectedMenu={value.selectedMenu}
            menuList={value.menuList}
          />
        );
        break;
      case "10":
        setContent(
          <Video
            url={"/playList"}
            selectedMenu={value.selectedMenu}
            index={0}
            style={{ width: "60%", height: "50%" }}
          />
        );
        break;
      default:
        setContent(null);
        break;
    }
  }, [value]);

  return content;
};

const MyContent = (props) => {
  const { selectedMenu, menuList } = props;
  const [playItems, setPlayItems] = useState(null);
  const content = useContentSet(props);
  // const contentList = [
  //   {
  //     idx: ["10"],
  //     contentTag: "video",
  //   },
  //   {
  //     idx: [...menuList.key],
  //     contentTag: "text",
  //   },
  // ];

  // useEffect(() => {
  //   debugger;
  //   if (selectedKey === "10") {
  //     console.log("1010101010");
  //     setContent(VideoContents);
  //   } else {
  //     setContent("<>test</>");
  //   }
  // }, [selectedKey]);

  if (!selectedMenu) {
    return <></>;
  }
  return (
    <>
      {/* {selectedMenu.key === "10" ? (
        //<Video playList={playItems} index={0} />
        <Video
          playList={playItems}
          selectedMenu={selectedMenu}
          index={0}
          style={{ width: "100%", height: "500px" }}
        />
      ) : (
        <TextContent selectedMenu={selectedMenu} menuList={menuList} />
      )} */}
      {content}
    </>
  );
};

export default MyContent;
