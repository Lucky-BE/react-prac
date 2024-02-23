import AppContent from "./components/AppContnetTest";
import {} from "@ant-design/icons";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./layout/Home";
import MainMenuNav from "./layout/header/MainMenuNav";
import { RecoilRoot } from "recoil";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { Layout } from "antd";

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Layout>
          <header style={{ height: "120px" }}>
            <div style={{ height: "50px" }}>header</div>
            <MainMenuNav />
          </header>
          <Content style={{ margin: "20px" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/appContent1" element={<AppContent />} />
            </Routes>
          </Content>
          <Footer></Footer>
        </Layout>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
