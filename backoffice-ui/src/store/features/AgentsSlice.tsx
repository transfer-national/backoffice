import { createSlice  , PayloadAction} from "@reduxjs/toolkit";
import Agent from '../../models/Agent'


interface AgentState {
    data: Agent | null;
  }
  
  const initialState: AgentState = {
    data: null,
  };

export const agentSlice = createSlice({
  name: 'agent',
  initialState,
  reducers: {
    setAgent: (state, action: PayloadAction<Agent>) => {
      state.data= action.payload;
    },
    clearAgent: (state) => {
        state.data = null;
      },
  },
});

export const { setAgent, clearAgent } = agentSlice.actions;
export default agentSlice.reducer;