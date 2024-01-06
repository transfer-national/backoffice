import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AmountState {
    data: number | null;
  }
  
  const initialState: AmountState = {
    data: null,
  };

export const amountSlice = createSlice({
  name: 'amount',
  initialState,
  reducers: {
    setAmountData: (state, action: PayloadAction<number>) => {
      state.data= action.payload;
    },
    clearAmount: (state) => {
        state.data = null;
      },
  },
});

export const { setAmountData,  clearAmount } = amountSlice.actions;
export default amountSlice.reducer;