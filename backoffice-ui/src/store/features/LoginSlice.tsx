import { createSlice  , PayloadAction} from "@reduxjs/toolkit";

import LoginModel from "../../models/LoginModel";


interface LoginState {
    data: LoginModel | null;
  }
  
  const initialState: LoginState = {
    data: null,
  };

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLoginData: (state, action: PayloadAction<LoginModel>) => {
      state.data= action.payload;
    },
    clearLoginData: (state) => {
        state.data = null;
      },
  },
});

export const { setLoginData, clearLoginData } = loginSlice.actions;
export default loginSlice.reducer;