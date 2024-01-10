import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../../redux/chatSlice";
import { Controller, useForm } from "react-hook-form";
import image from "../../assets/image.svg";
import { useState } from "react";
import FileDisplay from "./FileDisplay";

export default function ChatForm({ upload }) {
  const filename = useSelector((state) => state.ChatSlice.filename);
  const dispatch = useDispatch();
  const { register, reset, handleSubmit, control } = useForm();
  const [uploadedFiles, setUploadedFiles] = useState([]);
  console.log(uploadedFiles);

  function handleFile(event) {
    const file = [...event.target.files];
    console.log("file", ...file);
    console.log(Array.isArray(file));
    setUploadedFiles((prevFile) => [...prevFile, ...file]);
  }
  function handleRemove(index) {
    console.log("index", index);
    setUploadedFiles((prevState) =>
      prevState.filter((value, i) => i !== index)
    );
  }

  function submitHandler(data) {
    const msg = {
      message: data.chatMessage,
      files: uploadedFiles,
    };
    console.log("msg", msg);
    reset();
    upload(msg);
    setUploadedFiles([]);
    dispatch(sendMessage(msg));
  }

  return (
    <>
      <div className="show-file">
        {uploadedFiles.length !== 0 &&
          uploadedFiles.map((file, index) => {
            return (
              <FileDisplay
                key={index}
                name={file.name}
                index={index}
                remove={handleRemove}
              />
            );
          })}
      </div>
      <div className="chat-form">
        <form onSubmit={handleSubmit(submitHandler)}>
          <label>
            <img className="file-image" src={image} />
            <input
              className="file-input"
              type="file"
              {...register("file")}
              onChange={handleFile}
            />
          </label>
          <textarea required {...register("chatMessage")}></textarea>

          <div></div>
          <button className="submit-btn" type="submit">
            Send
          </button>
        </form>
      </div>
    </>
  );
}
