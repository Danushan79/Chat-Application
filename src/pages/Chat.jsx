import { useForm } from "react-hook-form";
import ChatField from "../Components/modules/ChatForm.jsx";
import ChatHistory from "../Components/organisms/ChatHistory";
import { useDispatch } from "react-redux";
import { sendMessage, clearState, responseMessage } from "../redux/chatSlice";
import { useSelector } from "react-redux";
import { useState } from "react";
import { uploadFile } from "../http/http.js";
import ChatForm from "../Components/modules/ChatForm.jsx";

export default function Chat() {
  const { register, reset, handleSubmit } = useForm();
  const messages = useSelector((state) => state.ChatSlice.chat);
  const files = useSelector((state) => state.ChatSlice.files);
  const dispatch = useDispatch();

  async function upload(data) {
    console.log("before upload, data", data);
    const response = await uploadFile(data);
    console.log("bot respone", response);
    dispatch(responseMessage(response));
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
          <ChatForm upload={upload} />
        </div>
      </div>
    </>
  );
}
