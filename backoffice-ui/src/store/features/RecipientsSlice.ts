import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Recipient from "../../models/Recipient";


interface RecipientsState {
    data: Recipient[] | null;
  }
  
  const initialState: RecipientsState = {
    data: null,
  };

export const RecipientsSlice = createSlice({
  name: 'recipients',
  initialState,
  reducers: {
    setRecipientsData: (state, action: PayloadAction<Recipient[]>) => {
      state.data= action.payload;
    },
    clearRecipientsData: (state) => {
        state.data = null;
      },
  },
});

export const { setRecipientsData, clearRecipientsData } = RecipientsSlice.actions;
export default RecipientsSlice.reducer;