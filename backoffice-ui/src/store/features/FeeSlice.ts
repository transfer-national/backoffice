import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FeeState {
    data: number | null;
  }
  
  const initialState: FeeState = {
    data: null,
  };

export const feeSlice = createSlice({
  name: 'fee',
  initialState,
  reducers: {
    setFeeData: (state, action: PayloadAction<number>) => {
      state.data= action.payload;
    },
    clearFee: (state) => {
        state.data = null;
      },
  },
});

export const { setFeeData,  clearFee } = feeSlice.actions;
export default feeSlice.reducer;