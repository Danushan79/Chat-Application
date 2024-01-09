import FileDisplay from "./FileDisplay";
import { useDispatch, useSelector } from "react-redux";
import { addFile, removeFile } from "../../redux/chatSlice";
import { useState } from "react";

export default function ChatField({ register, image }) {
  const filename = useSelector((state) => state.ChatSlice.filename);
  const dispatch = useDispatch();
  const [file, setFile] = useState();
  // const [filename, setFilename] = useState(filename);

  // function handleFile(event) {
  //   console.log(event.target.files[0].name);
  //   const uploadedFile = event.target.files[0];
  //   dispatch(addFile(uploadedFile));
  //   // setFilename(event.target.files[0].name);
  // }

  function handleChange(event) {
    console.log("handleChange", event.target.files[0]);
    setFile(event.target.files[0]);
  }

  function handleRemove() {
    // setFilename("");
    dispatch(removeFile());
  }

  return (
    <div className="chat-field">
      {filename !== "" && <FileDisplay name={filename} remove={handleRemove} />}
      <label>
        <img className="file-image" src={image} />
        <input
          className="file-input"
          type="file"
          {...register("uploadFile")}
          onChange={handleChange}
          value={file}
        />
      </label>
      <textarea required {...register("chatMessage")}></textarea>
      <button className="submit-btn" type="submit">
        Send
      </button>
    </div>
  );
}
