import AppContent from 'components/AppContnetTest';
import {} from '@ant-design/icons';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'layout/Home';
import MainMenuNav from 'layout/header/MainMenuNav';
import { Content, Footer } from 'antd/es/layout/layout';
import { ConfigProvider, Empty, Layout } from 'antd';
import 'App.css';
import dayjs from 'dayjs';
import locale from 'antd/es/locale/ko_KR';

dayjs.locale('ko');

const App = () => {
  return (
    <ConfigProvider
      locale={locale}
      renderEmpty={() => (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="데이터가 없습니다."
        />
      )}
    >
      <BrowserRouter>
        <Layout>
          <header style={{ height: '120px' }}>
            <div style={{ height: '50px' }}>header</div>
            <MainMenuNav />
          </header>
          <Content style={{ margin: '20px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/appContent1" element={<AppContent />} />
            </Routes>
          </Content>
          <Footer></Footer>
        </Layout>
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;
