import ChatMessage from "../modules/ChatMessage";

export default function ChatHistory({ messages }) {
  // const messages = useSelector((state) => state.ChatSlice.chat);
  return (
    <div className="chat-history-window">
      {messages.map((message, index) => {
        const userActive = message.sender == "user" ? true : false;
        return (
          <ChatMessage key={index} isUser={userActive} message={message} />
        );
      })}
    </div>
  );
}
