import ReactPlayer from "react-player";
import { useEffect, useRef, useState } from "react";
import { Button, InputNumber, Space } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

const handleVideo = () => {
  alert("동영상 재생 끝");
};
/**
 * @TODO : 비디오 사이즈 조절 기능
 * @param {*} param0
 * @returns
 */
const Video = ({ playList, index, style }) => {
  const [playLists, setPlayLists] = useState(playList);
  const [currentIdx, setCurrentIdx] = useState(index);
  const inputNum = useRef();

  useEffect(() => {
    inputNum.current.value = currentIdx + 1;
  }, [currentIdx]);

  if (playLists === null) {
    return <p>Now Loading...</p>;
  }

  /**
   * 다음 비디오 재생
   */
  const nextVideo = () => {
    if (playLists.length - 1 === currentIdx) {
      setCurrentIdx(0);
    } else {
      setCurrentIdx(currentIdx + 1);
    }
  };

  const onChange = (value) => {
    if (value > playLists.length) {
      this.value = playLists.length;
    }
  };

  /**
   * 이전 비디오 재생
   */
  const prevVideo = () => {
    if (currentIdx === 0) {
      setCurrentIdx(playLists.length - 1);
    } else {
      setCurrentIdx(currentIdx - 1);
    }
    idxChg();
  };

  /**
   * 입력한 인덱스 비디오로 이동
   */
  const moveIdx = () => {
    let idx = inputNum.current.value;
    setCurrentIdx(idx - 1);
  };

  const idxChg = (idx) => {
    inputNum.current.value = idx;
  };

  return (
    <>
      <h2>{playLists[currentIdx].vName}</h2>
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={playLists[currentIdx].url}
          width={style.width}
          height="500px"
          playing={false}
          muted={true}
          controls={true}
          light={false}
          pip={true}
          poster={""}
          onEnded={() => handleVideo()}
        />
      </div>
      <br />

      <Space>
        <Button type="text" shape="round" onClick={() => prevVideo()}>
          {"< "}이전 영상
        </Button>
        <div>
          {currentIdx + 1} / {playLists.length}
        </div>
        <Button type="text" shape="round" onClick={() => nextVideo()}>
          다음 영상{" >"}
        </Button>
        <InputNumber
          min={1}
          max={playLists.length}
          defaultValue={currentIdx + 1}
          onChange={onChange}
          ref={inputNum}
        />
        <Button type={"primary"} onClick={() => moveIdx()}>
          이동
        </Button>
      </Space>
    </>
  );
};

export default Video;
