import React, { useEffect, useState } from "react";
import Video from "./Player";

const setPlayList = (index, url, vName) => {
  return {
    index,
    url,
    vName,
  };
};

const playItems = [
  setPlayList(
    0,
    "https://youtu.be/6GECT2Jrr_g?si=5upBc9dQ3q2giIH3",
    "한시간 만에 끝내는 React.js 입문"
  ),
  setPlayList(
    1,
    "https://youtu.be/bbI-cyE5_Sg?si=vIMcDF3FtgSovzF_",
    "79,000원 가성비 풀알루 커스텀 키보드 SPM AL87A 과연 어떨까요?"
  ),
  setPlayList(
    2,
    "https://www.youtube.com/watch?v=E-PzX2mKGUQ",
    "자바스크립트 기초 입문 강의 30분 완성"
  ),
];

const MyContent = ({ menuNum, menuList }) => {
  const [content, setContent] = useState(null);

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

  useEffect(() => {
    debugger;
    console.log(menuList);
  });

  // useEffect(() => {
  //   debugger;
  //   if (selectedKey === "10") {
  //     console.log("1010101010");
  //     setContent(VideoContents);
  //   } else {
  //     setContent("<>test</>");
  //   }
  // }, [selectedKey]);
  return (
    <>{menuNum === "10" ? <Video playList={playItems} index={0} /> : <></>}</>
  );
};

export default MyContent;
