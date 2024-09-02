// actions.js
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { loginSuccess, loginFailure } from "./reducers";
import { app } from "../firebase";
const auth = getAuth(app);

export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const signUp = (email, password, username, nickname) => async (dispatch) => {
  try {
    await createUserWithEmailAndPassword(
      auth,
      email,
      password,
      username,
      nickname
    );
    const successAction = {
      type: SIGN_UP_SUCCESS,
      email,
      password,
      username,
      nickname,
    };
    dispatch(successAction);
    return successAction;
  } catch (error) {
    let failureAction;
    if (error.code === "auth/email-already-in-use") {
      failureAction = {
        type: SIGN_UP_FAILURE,
        payload:
          "이미 사용중인 이메일입니다.",
      };
    } else {
      console.error("Error signing up:", error);
      failureAction = { type: SIGN_UP_FAILURE, payload: error.message };
    }
    dispatch(failureAction);
    return failureAction; 
  }
};

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const signIn = (email, password) => async (dispatch) => {
  try {
    await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
     const successLoinAction = { type: LOGIN_SUCCESS, email, password };
     dispatch(loginSuccess(successLoinAction));
     return successLoinAction;
  } catch (error) {
    let failureLoinAction;
    if (error.code === "auth/invalid-credential") {
      failureLoinAction = {
        type: LOGIN_FAILURE,
        payload: "이메일, 비밀번호를 확인해주세요",
      };
    } else {
      console.error("Error signing up:", error);
      failureLoinAction = { type: LOGIN_FAILURE, payload: error.message };
    }
    dispatch(failureLoinAction);
    return failureLoinAction; 
  }
};

export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const logout = () => async (dispatch) => {
  try {
    await signOut(auth);
    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGOUT_FAILURE, payload: error.message });
  }
};