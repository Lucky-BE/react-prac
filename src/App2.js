import React, { useState } from 'react';
import { Button, Form, Input, Layout, Menu, Table } from 'antd';
import 'App.css';

const { Sider, Content } = Layout;

const UserInfo = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return <Table></Table>;
};
// 회원가입 페이지에 해당하는 입력 폼
const SignUp = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    <Form name="signup" onFinish={onFinish}>
      <Form.Item
        label="아이디"
        name="username"
        rules={[{ required: true, message: '아이디를 입력해주세요' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="비밀번호"
        name="password"
        rules={[{ required: true, message: '비밀번호를 입력해주세요' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="비밀번호 확인"
        name="confirmPassword"
        dependencies={['password']}
        rules={[
          { required: true, message: '비밀번호를 다시 입력해주세요' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject('비밀번호가 일치하지 않습니다');
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          가입하기
        </Button>
      </Form.Item>
    </Form>
  );
};

// 로그인 페이지에 해당하는 입력 폼
const Login = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    <Form name="signin" onFinish={onFinish}>
      <Form.Item
        label="아이디"
        name="username"
        rules={[{ required: true, message: '아이디를 입력해주세요' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="비밀번호"
        name="password"
        rules={[{ required: true, message: '비밀번호를 입력해주세요' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          로그인
        </Button>
      </Form.Item>
    </Form>
  );
};

// 회원정보 찾기 페이지에 해당하는 입력 폼
const FindUsername = () => {
  return <>{/* 아이디 찾기, 비밀번호 찾기 등의 입력 폼을 작성합니다. */}</>;
};
const FindPassword = () => {
  return <>{/* 아이디 찾기, 비밀번호 찾기 등의 입력 폼을 작성합니다. */}</>;
};
const App = () => {
  const [selectedMenu, setSelectedMenu] = useState('userInfo');

  const handleMenuClick = ({ key }) => {
    setSelectedMenu(key);
  };

  const renderContent = () => {
    switch (selectedMenu) {
      case 'userInfo':
        return <UserInfo />;
      case 'signUp':
        return <SignUp />;
      case 'login':
        return <Login />;
      // case "findUserInfo":
      //   return <FindUserInfo />;
      case 'findUsername':
        return <FindUsername />;
      case 'findPassword':
        return <FindPassword />;
      default:
        return null;
    }
  };

  return (
    <Layout>
      <Sider>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedMenu]}
          onClick={handleMenuClick}
        >
          <Menu.Item key="userInfo">회원정보</Menu.Item>
          <Menu.Item key="signUp">회원가입</Menu.Item>
          <Menu.Item key="login">로그인</Menu.Item>
          <Menu.SubMenu key="findUserInfo" title="회원정보 찾기">
            <Menu.Item key="findUsername">아이디 찾기</Menu.Item>
            <Menu.Item key="findPassword">비밀번호 찾기</Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ padding: '24px', minHeight: '100vh' }}>
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
