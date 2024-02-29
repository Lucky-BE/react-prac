import { Button, Col, Divider, Row } from "antd";

const Profile = () => {
  return (
    <>
      <h1 style={{ marginBottom: "0px" }}>Profile</h1>
      <Divider style={{ marginTop: "5px" }} />
      <div style={{ border: "1px solid black" }}>
        <Row clssName="my-profile-row">
          <Col span={4}>프로필사진 영역</Col>
          <Col span={2}>이름</Col>
          <Col>test</Col>
          <Col>test</Col>
        </Row>
        <Row>
          <Col span={4}></Col>
          <Col span={2}>닉네임</Col>
          <Col>test</Col>
          <Col>test</Col>
        </Row>
        <Row>
          <Col span={4}></Col>
          <Col span={2}>이메일</Col>
          <Col>test</Col>
          <Col>test</Col>
        </Row>
        <Row>
          <Col span={4}></Col>
          <Col span={2}>소속팀</Col>
          <Col>test</Col>
          <Col>test</Col>
        </Row>
        <Row>
          <Col span={4}></Col>
          <Col span={2}>구분</Col>
          <Col>test</Col>
          <Col>test</Col>
        </Row>
        <Row>
          <Col span={4}>
            <Button>IMG Upload</Button>
          </Col>
          <Col span={2}>그룹</Col>
          <Col>test</Col>
          <Col>test</Col>
        </Row>
        <Row>
          <Col span={4}></Col>
          <Col span={2}>그룹 설명</Col>
          <Col>test</Col>
          <Col>test</Col>
        </Row>
        <Row>
          <Col span={4}></Col>
          <Col span={2}>접근 가능 카테고리</Col>
          <Col>test</Col>
          <Col>test</Col>
        </Row>
        <Row>
          <Col span={4}></Col>
          <Col span={2}>그룹 권한</Col>
          <Col>test</Col>
          <Col>test</Col>
        </Row>
      </div>
    </>
  );
};

export default Profile;
