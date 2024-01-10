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
  filename: [],
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
      const filenames = [];
      const files = action.payload.files;
      // console.log(action.payload.files);
      files.forEach((element) => {
        filenames.push(element.name);
      });
      console.log(filenames);
      const obj = {
        sender: "user",
        message: action.payload.message,
        filename: filenames,
      };
      state.chat = [...state.chat, obj];
      state.filename = "";
      // state.file = JSON.stringify({});
      localStorage.setItem("chatState", JSON.stringify(state));
    },
    addFile: (state, action) => {
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
