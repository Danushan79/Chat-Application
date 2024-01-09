import { useForm } from "react-hook-form";
import ChatField from "../Components/modules/ChatField";
import ChatHistory from "../Components/organisms/ChatHistory";
import image from "../assets/image.svg";
import { useDispatch } from "react-redux";
import { sendMessage, clearState, responseMessage } from "../redux/chatSlice";
import { useSelector } from "react-redux";
import { uploadFile } from "../http/http.js";

export default function Chat() {
  const { register, reset, handleSubmit } = useForm();
  const messages = useSelector((state) => state.ChatSlice.chat);
  const dispatch = useDispatch();

  async function upload(data) {
    const response = await uploadFile(data);
    console.log("bot respone", response);
    dispatch(responseMessage(response));
  }

  function submitHandler(data) {
    console.log("chat data", data);
    const msg = {
      sender: "user",
      message: data.chatMessage,
    };
    console.log("msg", msg);
    upload(data);
    reset();
    dispatch(sendMessage(data.chatMessage));
  }
  function handleClear() {
    dispatch(clearState());
  }
  return (
    <>
      <div>
        <button className="clear-btn" onClick={handleClear} type="button">
          Start New Conversation
        </button>
      </div>

      <div className="chat-window">
        <div>
          <ChatHistory messages={messages} />
          <form onSubmit={handleSubmit(submitHandler)}>
            <ChatField register={register} image={image} />
          </form>
        </div>
      </div>
    </>
  );
}
