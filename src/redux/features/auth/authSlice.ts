import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { ROLE } from "@/types";

export type TUser = {
  email: string;
  role: ROLE;
  id: string;
  iat: number;
  exp: number;
};

type TAuthState = {
  user: null | TUser;
  token: null | string;
};

const initialState: TAuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    authLogout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, authLogout } = authSlice.actions;

export default authSlice.reducer;

export const useCurrentToken = (state: RootState) => state.auth.token;
export const selectCurrentUser = (state: RootState) => state.auth.user;
