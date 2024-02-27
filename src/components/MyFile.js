import { useState } from "react";
import AXIOS from "../axiosInstance";
import { v4 as uuidv4 } from "uuid";

const MyFile = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    console.log("File Changed !!: ", event.target.files[0]);
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      debugger;
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("fileName", selectedFile.name);
      formData.append("path", "src/files/" + selectedFile.name);

      const uuid = uuidv4();

      let temp = {
        file: JSON.stringify(selectedFile),
        fileName: selectedFile.name,
        path: "src/files/" + selectedFile.name,
      };

      // 서버의 엔드포인트 url 지정.
      const ePointURL = "/fileUpload";

      const res = await AXIOS.post(ePointURL, formData);

      console.log("File Upload successfully: ", res.data);
    } catch (e) {
      console.log("File Upload Error => ", e);
    }
  };
  return (
    <>
      <div className="content-center-flex">
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>upload</button>
      </div>
    </>
  );
};

export default MyFile;
