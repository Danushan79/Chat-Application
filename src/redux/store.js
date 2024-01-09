import { configureStore } from "@reduxjs/toolkit";
import ChatSlice from "./chatSlice";

const store = configureStore({
  reducer: { ChatSlice },
});

export default store;
