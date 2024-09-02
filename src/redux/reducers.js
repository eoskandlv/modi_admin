import { createSlice } from "@reduxjs/toolkit";

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("user");
    if (serializedState === null) {
      return null;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return null;
  }
};

// 초기 상태 설정
const initialState = {
  user: loadStateFromLocalStorage() || null,
  error: null,
};
// 슬라이스 생성
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUpSuccess: (state, action) => {
      state.user = action.payload;
      state.error = null;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    signUpFailure: (state, action) => {
      state.user = null;
      state.error = action.payload;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.error = null;
      localStorage.setItem("user", JSON.stringify(action.payload)); 
    },
    loginFailure: (state, action) => {
      state.user = null;
      state.error = action.payload;
    },
    logoutSuccess: (state) => {
      state.user = null;
      state.error = null;
      localStorage.removeItem("user"); 
    },
    logoutFailure: (state, action) => {
      state.user = null;
      state.error = action.payload;
    },
  },
});

export const {
  signUpSuccess,
  signUpFailure,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
} = authSlice.actions;
export default authSlice.reducer;
