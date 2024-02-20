import { Avatar, Table } from "antd";
import { useEffect, useState } from "react";
import axiosInstance from "../../axiosInstance";

// const useData = (value) => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     if (value !== undefined) {
//       setData(value);
//     }
//     // axiosInstance({
//     //   method: "get",
//     //   url: "/userList",
//     //   responseType: "json",
//     // }).then((response) => {
//     //   setData(response.data);
//     // });
//   }, []);

//   return data;
// };

const useColumns = (data) => {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    debugger;
    if (data !== undefined) {
      let tmp =
        data.length > 0
          ? Object.keys(data[0])
              .filter((key) => key !== "key")
              .map((key) => ({
                title: key.toUpperCase(),
                dataIndex: key,
                key: key,
                render: (text) =>
                  key === "avatar" ? <Avatar src={text} /> : text,
              }))
          : [];
      setColumns(tmp);
    }
  }, [data]);
  return columns;
};

const TeamTable = (props) => {
  const { data } = props;
  // const datas = useData(data);
  // const columns = [];
  // 첫 번째 데이터의 속성을 기준으로 컬럼을 생성
  const columns = useColumns(data);

  return (
    <>
      <Table dataSource={data} columns={columns} />
    </>
  );
};

export default TeamTable;
