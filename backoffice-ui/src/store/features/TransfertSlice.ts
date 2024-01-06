import { createSlice  , PayloadAction} from "@reduxjs/toolkit";
import Transfert from "../../models/Transfert";


interface TransfertState {
    data: Transfert | null;
  }
  
  const initialState: TransfertState = {
    data: null,
  };

export const transfertSlice = createSlice({
  name: 'transfert',
  initialState,
  reducers: {
    setTransfertData: (state, action: PayloadAction<Transfert>) => {
      state.data= action.payload;
    },
    clearTransfertData: (state) => {
        state.data = null;
      },
  },
});

export const { setTransfertData, clearTransfertData } = transfertSlice .actions;
export default transfertSlice.reducer;