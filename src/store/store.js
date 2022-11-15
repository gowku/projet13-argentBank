import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
// const logger = createLogger()

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
export default store;
