import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Client from "../../models/Client";


interface ClientState {
    data: Client | null;
  }
  
  const initialState: ClientState = {
    data: null,
  };

export const ClientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    setClientData: (state, action: PayloadAction<Client>) => {
      state.data= action.payload;
    },
    clearClientData: (state) => {
        state.data = null;
      },
  },
});

export const { setClientData, clearClientData } = ClientSlice.actions;
export default ClientSlice.reducer;