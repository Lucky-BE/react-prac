import axios from "axios";

const instance = axios.create({
  // back-end 연결 시에는  http://localhost:3009/api 로 수정
  baseURL: "http://localhost:3001/",
});

export default instance;
