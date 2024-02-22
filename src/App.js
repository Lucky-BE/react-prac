import AppContent from "./layout/content/AppContnetTest";
import {} from "@ant-design/icons";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./layout/Home";
import MainMenuNav from "./layout/header/MainMenuNav";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <header style={{ height: "120px" }}>
          <h1>header</h1>
          <MainMenuNav />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/appContent1" element={<AppContent />} />
          </Routes>
        </main>
        <footer></footer>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
