import { configureStore } from "@reduxjs/toolkit";
import agentReducer from './features/AgentsSlice'
import transfertReducer from './features/TransfertSlice'
import loginReducer from "./features/LoginSlice"
import { TypedUseSelectorHook, useSelector , useDispatch} from "react-redux";
import { persistReducer , persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 


const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, loginReducer);

export const store= configureStore({
    reducer:{
      agent: agentReducer,
      transfert: transfertReducer,
      login:  persistedReducer
    }
  })


export const useAppDispatch :()=> typeof store.dispatch = useDispatch ;
export const useAppSelector : TypedUseSelectorHook<ReturnType<typeof store.getState>> =useSelector ;


export const persistor = persistStore(store);