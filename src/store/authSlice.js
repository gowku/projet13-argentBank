import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { logUser } from "../api/api";

const initialState = {
  token: "",
  loggedIn: false,
  status: "idle",
  error: null,
};

export const logginUser = createAsyncThunk("auth/logginUser", async ({ ...userInput }) => {
  try {
    const response = await logUser({ ...userInput });
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [logginUser.fulfilled]: (state, action) => {
      state.status = "loggin-succeeded";
      const loadedUser = action.payload;
      console.log(loadedUser);
      state.user = loadedUser;
      state.loggedIn = true;
      console.log(state.loggedIn);
    },
  },
});
export const selectUser = (state) => state.token;
export const selectUserIsLoggedIn = (state) => state.loggedIn;
export default authSlice.reducer;
