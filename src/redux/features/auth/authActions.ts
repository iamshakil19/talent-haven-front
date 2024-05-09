// import { logout as authLogout } from "./authSlice";
import { Dispatch } from "@reduxjs/toolkit";
import { baseApi } from "@/redux/api/baseApi";
import { authLogout } from "./authSlice";

const logout = (): any => async (dispatch: Dispatch) => {
  try {
    dispatch(authLogout());
    dispatch(baseApi.util.resetApiState());
  } catch (error) {
    console.error("Error during logout:", error);
  }
};

export default logout;
