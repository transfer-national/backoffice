import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import MultipleTransfer from "../../models/MultipleTransfer";


interface MultipleTransferState {
    data: MultipleTransfer | null;
  }
  
  const initialState: MultipleTransferState = {
    data: null,
  };

export const MultipleTransferState = createSlice({
  name: 'multipletransfer',
  initialState,
  reducers: {
    setMultipleTransferData: (state, action: PayloadAction<MultipleTransfer>) => {
      state.data= action.payload;
    },
    clearMultipleTransferData: (state) => {
        state.data = null;
      },
  },
});

export const { setMultipleTransferData, clearMultipleTransferData } = MultipleTransferState.actions;
export default MultipleTransferState.reducer;