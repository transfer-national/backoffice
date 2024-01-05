import { configureStore } from "@reduxjs/toolkit";
import agentReducer from './features/AgentsSlice'
import transfertReducer from './features/TransfertSlice'
import loginReducer from "./features/LoginSlice"
import { TypedUseSelectorHook, useSelector , useDispatch} from "react-redux";
import { persistReducer , persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import ClientReducer from "./features/ClientSlice"
import RecipientsReducer from './features/RecipientsSlice'
const persistConfig = {
  key: 'root',
  storage,
};

const persistedLoginReducer = persistReducer(persistConfig, loginReducer);
const persistedClientReducer = persistReducer(persistConfig, ClientReducer);
const persistedRecipientsReducer = persistReducer(persistConfig, RecipientsReducer);

export const store= configureStore({
    reducer:{
      agent: agentReducer,
      transfert: transfertReducer,
      login:  persistedLoginReducer,
      client: persistedClientReducer,
      recipients:persistedRecipientsReducer
    }
  })


export const useAppDispatch :()=> typeof store.dispatch = useDispatch ;
export const useAppSelector : TypedUseSelectorHook<ReturnType<typeof store.getState>> =useSelector ;


export const persistor = persistStore(store);