import { useSelector } from "react-redux";
import userImage from "../../assets/user.svg";

export default function ChatMessage({ isUser, message }) {
  return (
    <div className={isUser ? "reverse-box" : "message-box"}>
      <div className="profile-image">
        <img src={userImage} />
      </div>
      <div className="message-body">
        <p>{message.message}</p>
        {message.filename !== "" && (
          <label className="file-display">{message.filename}</label>
        )}
      </div>
    </div>
  );
}
