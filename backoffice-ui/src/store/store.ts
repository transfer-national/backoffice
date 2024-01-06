import { AnyAction, Dispatch, Middleware, MiddlewareAPI, configureStore } from "@reduxjs/toolkit";
import agentReducer from './features/AgentsSlice'
import transfertReducer from './features/TransfertSlice'
import loginReducer from "./features/LoginSlice"
import { TypedUseSelectorHook, useSelector , useDispatch} from "react-redux";
import { persistReducer , persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import ClientReducer from "./features/ClientSlice"
import RecipientsReducer from './features/RecipientsSlice'
import TransferTypeReducer from './features/TransferType'
import UnitTransfersReducer from './features/listeUnitTransfer'
import amountReducer from './features/AmountSlice'
import FeeReducer from './features/FeeSlice'

const persistConfig = {
  key: 'root',
  storage,
};

const persistedLoginReducer = persistReducer(persistConfig, loginReducer);
const persistedClientReducer = persistReducer(persistConfig, ClientReducer);
const persistedRecipientsReducer = persistReducer(persistConfig, RecipientsReducer);
const persistedTransferTypeReducer = persistReducer(persistConfig, TransferTypeReducer);
const persistedTransferReducer = persistReducer(persistConfig, transfertReducer);
const persistedUnitTransfersReducer = persistReducer(persistConfig, UnitTransfersReducer);
const persistedAmountReducer = persistReducer(persistConfig, amountReducer);
const persistedFeeReducer = persistReducer(persistConfig, FeeReducer);


export const store= configureStore({
    reducer:{
      agent: agentReducer,
      transfert: persistedTransferReducer,
      login:  persistedLoginReducer,
      client: persistedClientReducer,
      recipients:persistedRecipientsReducer,
      transfertype:persistedTransferTypeReducer,
      unittransfers:persistedUnitTransfersReducer,
      amount:persistedAmountReducer ,
      fee:persistedFeeReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        
        ignoredActions: ['your/action/type'],
        
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        
        ignoredPaths: ['items.dates'],
      },
    }),
  })


export const useAppDispatch :()=> typeof store.dispatch = useDispatch ;
export const useAppSelector : TypedUseSelectorHook<ReturnType<typeof store.getState>> =useSelector ;


export const persistor = persistStore(store);