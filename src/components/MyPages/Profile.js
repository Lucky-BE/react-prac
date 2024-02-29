import { ExclamationCircleOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Col,
  Divider,
  Flex,
  Image,
  Input,
  Row,
  Spin,
  Modal,
} from "antd";
import { useEffect, useRef, useState } from "react";
import { ColData, ColTitle } from "styles/StyledComps";
const { confirm } = Modal;

const menuList = [
  { key: "name", label: "이름", editable: false },
  { key: "nickname", label: "닉네임", editable: true },
  { key: "email", label: "이메일", editable: true },
  { key: "team", label: "소속팀", editable: false },
  { key: "gubun", label: "구분", editable: false },
  { key: "group", label: "그룹", editable: false },
  { key: "groupDesc", label: "그룹 설명", editable: false },
  { key: "acsContents", label: "접근 가능 카테고리", editable: false },
  { key: "groupAuth", label: "그룹 권한", editable: false },
];
const userInfos = {
  id: "hong1234",
  name: "홍길동",
  nickname: "hong",
  email: "hong@naver.com",
  teamNm: "전략마케팅",
  gubun: "일반 사용자",
  group: "LV1",
  groupDesc: "전략마케팅 그룹",
  acsContents: ["카테고리 1", "카테고리 2", "카테고리 3", "카테고리 4"],
  groupAuth: [true, true, true, true],
  profileImg:
    "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
};

const Profile = () => {
  const [userInfo, setUserInfo] = useState();
  const [changedUserInfo, setChangedUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const [dupChecked, setDupChecked] = useState(false);
  const [imgSrc, setImgSrc] = useState();
  const [changedNickname, setChangedNickname] = useState();
  const [isConfirm, setIsConfirm] = useState(false);
  const [isImgChange, setIsImgChange] = useState(false);
  const [isNicknameChange, setIsNickname] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const nicknameRef = useRef();
  const imgRef = useRef();

  const initPage = (option) => {
    if (option === 1) {
      setUserInfo(userInfos);
      setImgSrc(userInfos.profileImg);
    }
    setIsEdit(false);
    setDupChecked(false);
    setChangedUserInfo(null);
    setIsImgChange(false);
    setIsNickname(false);
    setIsValid(false);
  };

  useEffect(() => {
    initPage(1);
    setLoading(false);
  }, []);

  const onEditClickHandler = () => {
    setIsEdit(true);
  };

  /**
   * 저장버튼 이벤트
   */
  const onSaveClickHandler = async () => {
    // let changedInfo = { ...userInfo };
    // if (!dupChecked) {
    //   alert('중복 체크를 해주세요');
    //   nicknameRef.current.focus();
    //   setIsValid(false);
    //   return;
    // }
    // if (isNicknameChange) {
    //   changedInfo.nickname = changedNickname;
    // }
    // if (isImgChange) {
    //   const uploadImg = imgRef.current.files[0];
    //   const formData = new FormData();
    //   formData.append('file', uploadImg);
    //   formData.append('userId', userInfo.id);

    //   //테스트용 로직
    //   changedInfo.profileImg = imgSrc;
    //   //axios 관련 로직
    // }
    await saveValidCheck();
    console.log(isValid);

    if (!isValid) {
      initPage(1);
      return;
    }

    console.log("변경된 사용자 정보: ", changedUserInfo);

    // if (!saveValidCheck()) {
    //   return;
    // }

    const check = confirm({
      title: "프로필 수정",
      content: "정말로 수정하시겠습니까?",
      okText: "수정하기",
      cancelText: "취소",
      onOk() {
        setIsConfirm(true);
      },
      onCancel() {
        setIsConfirm(false);
      },
    });

    if (check) {
      setUserInfo(changedUserInfo);
      setIsEdit(false);
      initPage(2);
    }
  };

  /**
   * 중복체크
   * @returns 중복체크 결과
   */
  const onDupChkClickHandler = (e) => {
    let input = nicknameRef.current.input;
    if (input.value.length < 1) {
      alert("닉네임을 입력해주세요.");
      return;
    }
    if (userInfo.nickname === input.value) {
      alert("기존 닉네임과 동일합니다.");
      return;
    } else {
      alert("사용 가능합니다.");
      input.disabled = true;
      e.currentTarget.disabled = true;
      setChangedNickname(input.value);
      setIsNickname(true);
      setDupChecked(true);
      console.log("dupChecked in onDupChkClickHandler: ", dupChecked);
    }
  };

  /**
   * 저장버튼 유효성 체크 변경 사항 있는지 확인
   * @param {*} orginalInfo 원본 데이터
   * @param {*} changedInfo 변경된 데이터
   */
  const saveValidCheck = async () => {
    //저장하기 버튼 클릭 시 유효성 체크
    //변경내용 감지, 변경된 내용이 없으면 변경 사항이 없다는 내용 alert
    //변경되는 항목은 이미지, 닉네임
    debugger;
    let flag = false;
    if (!isImgChange && !isNicknameChange) {
      alert("변경 사항이 없습니다.");
      flag = false;
    } else {
      let changedInfo = { ...userInfo };

      if (isNicknameChange && !dupChecked) {
        alert("중복 체크를 해주세요");
        nicknameRef.current.focus();
        flag = false;
      }
      if (isNicknameChange && dupChecked) {
        changedInfo.nickname = changedNickname;
        flag = true;
      }

      //이미지 변경 여부
      if (isImgChange) {
        const uploadImg = imgRef.current.files[0];
        const formData = new FormData();
        formData.append("file", uploadImg);
        formData.append("userId", userInfo.id);

        //테스트용 로직
        changedInfo.profileImg = imgSrc;
        //axios 관련 로직

        flag = true;
      }

      console.log("changedInfo in saveValidCheck:", changedInfo);
      console.log("flag in saveValidCheck:", flag);
      console.log("isValid in saveValidCheck:", isValid);
      setIsValid(flag, () => {
        return;
      });
      setChangedUserInfo(changedInfo, () => {
        return;
      });
    }
  };

  /**
   * 이미지 첨부 이벤트
   */
  const onImgChangHandler = () => {
    let flag = false;
    const maxSize = 5 * 1024 * 1024;
    const file = imgRef.current.files[0];
    if (file.size < maxSize) {
      const reader = new FileReader();
      reader.onload = () => {
        setImgSrc(reader.result);
      };
      reader.readAsDataURL(file);
      flag = true;
    } else {
      alert("사진은 최대 5MB 까지만 업로드 가능합니다.");
      flag = false;
    }
    if (flag) {
      setIsImgChange(true);
    }
  };

  const onNicknameChangHandler = (e) => {
    const currentNickname = nicknameRef.current.value;
    if (currentNickname === userInfo.nickname) {
      setIsNickname(false);
    } else {
      setIsNickname(true);
    }
  };

  return (
    <>
      <h1 style={{ marginBottom: "0px" }}>Profile</h1>
      <Divider dashed style={{ marginTop: "5px" }} />
      {loading ? (
        <Spin size="large" />
      ) : (
        <>
          <Flex gap="middle" style={{ border: "1px solid #dfdfdf" }}>
            <div
              style={{
                border: "1px solid #dfdfdf",
                margin: "10px",
                padding: "10px",
                minWidth: "230px",
                width: "230px",
                height: "270px",
              }}
              className="profilImgArea"
            >
              <Image style={{ marginBottom: "10px" }} src={imgSrc} />
              {isEdit ? (
                <div>
                  <input
                    ref={imgRef}
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={onImgChangHandler}
                  />
                  <Button
                    onClick={() => {
                      imgRef.current.click();
                    }}
                    style={{ width: "209px" }}
                  >
                    IMG Upload
                  </Button>
                </div>
              ) : (
                ""
              )}
            </div>
            <div
              style={{ width: "1000px", minWidth: "475px", padding: "10px" }}
            >
              <Row>
                <ColTitle span={4} name="name">
                  이름
                </ColTitle>
                <ColData span={20}>{userInfo.name}</ColData>
              </Row>
              <Row>
                <ColTitle span={4} name="nickname">
                  닉네임
                </ColTitle>
                <ColData span={20}>
                  {isEdit ? (
                    <Col style={{ height: "30px" }} span={20}>
                      <Input
                        ref={nicknameRef}
                        defaultValue={userInfo.nickname}
                        style={{
                          width: "30%",
                          height: "30px",
                          padding: "0 5px",
                          left: "-5px",
                        }}
                        onChange={(e) => onNicknameChangHandler(e)}
                      />
                      <Button
                        style={{ height: "30px" }}
                        onClick={(e) => {
                          onDupChkClickHandler(e);
                        }}
                      >
                        중복체크
                      </Button>
                    </Col>
                  ) : (
                    <span>{userInfo.nickname}</span>
                  )}
                </ColData>
              </Row>
              <Row>
                <ColTitle span={4} name="email">
                  이메일
                </ColTitle>
                <ColData span={20}>{userInfo.email}</ColData>
              </Row>
              <Row>
                <ColTitle span={4} name="teamNm">
                  소속팀
                </ColTitle>
                <ColData span={20}>{userInfo.teamNm}</ColData>
              </Row>
              <Row>
                <ColTitle span={4} name="gubun">
                  구분
                </ColTitle>
                <ColData span={20}>{userInfo.gubun}</ColData>
              </Row>
              <Row>
                <ColTitle span={4} name="group">
                  그룹
                </ColTitle>
                <ColData span={20}>{userInfo.group}</ColData>
              </Row>
              <Row>
                <ColTitle span={4} name="groupDesc">
                  그룹 설명
                </ColTitle>
                <ColData span={20}>{userInfo.groupDesc}</ColData>
              </Row>
              <Row>
                <ColTitle span={4} name="acsContents">
                  접근 가능 카테고리
                </ColTitle>
                <ColData span={20}>{userInfo.acsContents.join(", ")}</ColData>
              </Row>
              <Row>
                <ColTitle span={4} name="groupAuth">
                  그룹 권한
                </ColTitle>
                <ColData span={20}>
                  <Checkbox
                    style={{ cursor: "initial" }}
                    indeterminate={userInfo.groupAuth[0]}
                    disabled
                  >
                    <span style={{ color: "black" }}>읽기</span>
                  </Checkbox>
                  <Checkbox
                    style={{ cursor: "initial" }}
                    indeterminate={userInfo.groupAuth[1]}
                    disabled
                  >
                    <span style={{ color: "black" }}>쓰기</span>
                  </Checkbox>
                  <Checkbox
                    style={{ cursor: "initial" }}
                    indeterminate={userInfo.groupAuth[2]}
                    disabled
                  >
                    <span style={{ color: "black" }}>인쇄</span>
                  </Checkbox>
                  <Checkbox
                    style={{ cursor: "initial" }}
                    indeterminate={userInfo.groupAuth[3]}
                    disabled
                  >
                    <span style={{ color: "black" }}>파일다운로드</span>
                  </Checkbox>
                </ColData>
              </Row>
            </div>
          </Flex>
          <Divider dashed style={{ marginTop: "5px" }} />
          {isEdit ? (
            <>
              <Button onClick={onSaveClickHandler}> 저장 </Button>
              <Button
                onClick={() => {
                  initPage(1);
                }}
              >
                취소
              </Button>
            </>
          ) : (
            <Button onClick={onEditClickHandler}> 수정 </Button>
          )}
        </>
      )}
      {isConfirm ? "" : ""}
    </>
  );
};

export default Profile;
