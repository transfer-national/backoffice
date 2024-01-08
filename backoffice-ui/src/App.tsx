import React from 'react';

import './App.css';
import { BrowserRouter  , Routes , Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

import TNConsultation from './pages/TNConsultation';
import TransfertDetails from './pages/TransfertDetails';

import AgencyManagement from './pages/AgencyManagement';
import UpdateTransfertState from './pages/UpdateTransfertState';
import AgencyDetails from './pages/AgencyDetails';
import { Provider } from 'react-redux';
import { store , persistor} from './store/store';
import Login from './pages/Login';
import { PersistGate } from 'redux-persist/integration/react';
import FirstSection from './pages/FirstSection';
import SecondSectionGetClient from './pages/SecondSectionGetClient';
import SecondSectionAddClient from './pages/SecondSectionAddClient';
import SecondSectionUpdateClient from './pages/SecondSectionUpdateClient';
import ThirdSection from './pages/ThirdSection';
import FourthSection from './pages/FourthSection';
import FifthSection from './pages/FifthSection';
import ConsultationMLT from './pages/ConsultationMLT';


function App() {
  return (
    <div className="App">
       <Provider  store={store}> 
       <PersistGate loading={null} persistor={persistor}>
       <BrowserRouter>
       <Routes>
       <Route path="/" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/consultation" element={<TNConsultation />}></Route>
        <Route path="/gestion" element={<AgencyManagement />}></Route>
        <Route path="/details du transfert" element={<TransfertDetails />}></Route>
        <Route path="/ajouter transfert" element={<FirstSection />}></Route>
        <Route path="/client" element={<SecondSectionGetClient />}></Route>
        <Route path="/ajouter client" element={<SecondSectionAddClient />}></Route>
        <Route path="/modifier client" element={<SecondSectionUpdateClient/>}></Route>
        <Route path="/beneficiares" element={<ThirdSection/>}></Route>
        <Route path="/infos du transfert" element={<FourthSection/>}></Route>
        <Route path="/finalisation" element={<FifthSection/>}></Route>
        <Route path="/changer etat du transfert" element={<UpdateTransfertState />}></Route>
       
        <Route path="/consultation multiple" element={<ConsultationMLT />}></Route>
        

        </Routes> 
      </BrowserRouter>
      </PersistGate>
      </Provider>   
      
    </div>
  );
}

export default App;
