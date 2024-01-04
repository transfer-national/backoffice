import React from 'react';

import './App.css';
import { BrowserRouter  , Routes , Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

import TNConsultation from './pages/TNConsultation';
import TransfertDetails from './pages/TransfertDetails';
import AddTransfert from './pages/AddTransfert';
import AgencyManagement from './pages/AgencyManagement';
import UpdateTransfertState from './pages/UpdateTransfertState';
import AgencyDetails from './pages/AgencyDetails';
import { Provider } from 'react-redux';
import store from './store/store';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
       <Provider  store={store}> 
       <BrowserRouter>
       <Routes>
       <Route path="/" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/consultation" element={<TNConsultation />}></Route>
        <Route path="/gestion" element={<AgencyManagement />}></Route>
        <Route path="/details du transfert" element={<TransfertDetails />}></Route>
        <Route path="/ajouter transfert" element={<AddTransfert />}></Route>
        <Route path="/changer etat du transfert" element={<UpdateTransfertState />}></Route>
        <Route path="/details de l'agence" element={<AgencyDetails />}></Route>
        

        </Routes> 
      </BrowserRouter>
      </Provider>   
      
    </div>
  );
}

export default App;
