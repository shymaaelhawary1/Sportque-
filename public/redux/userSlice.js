import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null, // تخزين بيانات المستخدم
  },
  reducers: {
    saveUserData: (state, action) => {
      state.userInfo = action.payload; // تحديث البيانات
    },
    updatePassword: (state, action) => {
      if (state.userInfo) {
        state.userInfo.password = action.payload; // تحديث كلمة المرور
      }
    },
  },
});

export const { saveUserData } = userSlice.actions; // تصدير الـ action
export const { updatePassword } = userSlice.actions;
export default userSlice.reducer;
