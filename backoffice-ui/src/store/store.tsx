import { configureStore } from "@reduxjs/toolkit";
import agentReducer from './features/AgentsSlice'
import transfertReducer from './features/TransfertSlice'
import loginReducer from "./features/LoginSlice"
import { TypedUseSelectorHook, useSelector , useDispatch} from "react-redux";

const store= configureStore({
    reducer:{
      agent: agentReducer,
      transfert: transfertReducer,
      login:  loginReducer
    }
  })


export const useAppDispatch :()=> typeof store.dispatch = useDispatch ;
export const useAppSelector : TypedUseSelectorHook<ReturnType<typeof store.getState>> =useSelector ;

export default store ;