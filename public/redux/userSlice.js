import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null, // Store user data
  },
  reducers: {
    saveUserData: (state, action) => {
      state.userInfo = action.payload; // Update user data
    },
    updatePassword: (state, action) => {
      if (state.userInfo) {
        state.userInfo.password = action.payload; // Update password
      }
    },
    clearUserData: (state) => {
      state.userInfo = null; // Clear user data (logout)
    },
  },
});

export const { saveUserData, updatePassword, clearUserData } = userSlice.actions; // Export actions together
export default userSlice.reducer;
