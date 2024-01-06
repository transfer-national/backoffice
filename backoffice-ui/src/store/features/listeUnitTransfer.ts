import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import UnitTransfer from "../../models/UnitTransfer";

interface UnitTransferState {
    data: UnitTransfer[] | null;
  }
  
  const initialState: UnitTransferState = {
    data: null,
  };

export const UnitTransferState = createSlice({
  name: 'unittransfers',
  initialState,
  reducers: {
    setUnitTransfersData: (state, action: PayloadAction<UnitTransfer[]>) => {
      state.data= action.payload;
    },
    clearUnitTransfersData: (state) => {
        state.data = null;
      },
  },
});

export const { setUnitTransfersData, clearUnitTransfersData } = UnitTransferState.actions;
export default UnitTransferState.reducer;