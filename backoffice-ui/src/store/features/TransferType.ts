import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import TransferType from "../../models/TransferType";




interface transferTypeState {
    data: string | null;
  }
  
  const initialState: transferTypeState = {
    data: null,
  };

export const transferTypeSlice = createSlice({
  name: 'transfertype',
  initialState,
  reducers: {
    setTransferTypeData: (state, action: PayloadAction<string>) => {
      state.data= action.payload;
    },
    clearTransferType: (state) => {
        state.data = null;
      },
  },
});

export const { setTransferTypeData,  clearTransferType } = transferTypeSlice.actions;
export default transferTypeSlice.reducer;