import MyPage from "./MyPage";

const Pages = (props) => {
  const { currentMenu } = props;
  return <>{currentMenu.key === "4" ? <MyPage /> : null}</>;
};

export default Pages;
