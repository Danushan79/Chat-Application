import FileDisplay from "./FileDisplay";
import { useDispatch, useSelector } from "react-redux";
import { addFile, removeFile } from "../../redux/chatSlice";

export default function ChatField({ register, image }) {
  const filename = useSelector((state) => state.ChatSlice.filename);
  const dispatch = useDispatch();
  // const [filename, setFilename] = useState(filename);

  function handleFile(event) {
    console.log(event.target.files[0].name);
    const uploadedFile = event.target.files[0];
    dispatch(addFile(uploadedFile));
    // setFilename(event.target.files[0].name);
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
          {...register("file", {
            onChange: (e) => {
              handleFile(e);
            },
          })}
        />
        {/* <input type="file" src={image} /> */}
      </label>
      <textarea required {...register("chatMessage")}></textarea>
      <button className="submit-btn" type="submit">
        Send
      </button>
    </div>
  );
}
