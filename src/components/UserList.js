import { Avatar, Table } from "antd";
import { useEffect, useState } from "react";
import AXIOS from "../axiosInstance";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Gender",
    dataIndex: "gender",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Team",
    dataIndex: "team",
  },
  {
    title: "Avatar",
    dataIndex: "avatar",
    render: (text) => <Avatar src={text} />,
  },
];

/**
 * 메뉴 셋팅
 * @param {Object} value
 * @returns
 */
const useData = (value) => {
  const [datas, setDatas] = useState();

  useEffect(() => {
    AXIOS.get(value.url).then((res) => {
      console.log(res.data.find((item) => item.menuKey === value.key));
      setDatas(res.data.find((item) => item.menuKey === value.key).data);
    });
  }, [value]);
  return datas;
};

const TeamTable = (props) => {
  const { currentMenu } = props;
  const data = useData(currentMenu);
  // const { data } = props;
  // const datas = useData(data);
  // const columns = [];
  // 첫 번째 데이터의 속성을 기준으로 컬럼을 생성
  // const columns = useColumns(data);

  return (
    <>
      <div className="content-center-flex">
        <Table dataSource={data} columns={columns} />
      </div>
    </>
  );
};

export default TeamTable;
