import { createSlice } from "@reduxjs/toolkit";

const sampleChatHistory = [
  {
    sender: "user",
    message: "Hi There!",
    filename: "",
  },
  {
    sender: "bot",
    message: "Hi There!",
    filename: "",
  },
  {
    sender: "user",
    message: "Hi There!",
    filename: "",
  },
  {
    sender: "bot",
    message: "Hi There!",
    filename: "",
  },
  {
    sender: "user",
    message: "Hi There!",
    filename: "",
  },
  {
    sender: "bot",
    message: "Hi There!",
    filename: "",
  },
];
let initialState = {
  chat: [],
  filename: "",
  // file: JSON.stringify({}),
};
if (localStorage.getItem("chatState") === null) {
  console.log("local storage is null");
  localStorage.setItem("chatState", JSON.stringify(initialState));
} else {
  initialState = JSON.parse(localStorage.getItem("chatState"));
}
console.log(JSON.parse(localStorage.getItem("chatState")));
export const ChatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      const obj = {
        sender: "user",
        message: action.payload,
        filename: state.filename,
      };
      state.chat = [...state.chat, obj];
      state.filename = "";
      // state.file = JSON.stringify({});
      localStorage.setItem("chatState", JSON.stringify(state));
    },
    addFile: (state, action) => {
      const file = action.payload;
      console.log(file);
      console.log(JSON.stringify(file));
      state.filename = file.name;
      // state.file = JSON.stringify(file);
      localStorage.setItem("chatState", JSON.stringify(state));
      console.log("state", JSON.stringify(file));
    },
    removeFile: (state) => {
      // state.file = JSON.stringify({});
      state.filename = "";
      localStorage.setItem("chatState", JSON.stringify(state));
    },
    clearState: (state) => {
      // state.file = JSON.stringify({});
      state.chat = [];
      state.filename = "";
      localStorage.setItem("chatState", JSON.stringify(state));
    },
    responseMessage: (state, action) => {
      const obj = {
        sender: "bot",
        message: action.payload,
        filename: "",
      };
      state.chat = [...state.chat, obj];
      state.filename = "";
      // state.file = JSON.stringify({});
      localStorage.setItem("chatState", JSON.stringify(state));
    },
  },
});

export const { sendMessage, addFile, removeFile, clearState, responseMessage } =
  ChatSlice.actions;
export default ChatSlice.reducer;
