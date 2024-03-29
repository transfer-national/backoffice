import React, { ChangeEvent, useEffect, useState } from 'react'
import '../styles/secondsection.css'
import { useAppDispatch, useAppSelector } from '../store/store';
import Client from '../models/Client';
import axios from 'axios';
import { setClientData } from '../store/features/ClientSlice';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';


const SecondSectionGetClient = () => {
  const navigate = useNavigate()
  const user = useAppSelector((state: { login: { data: any; }; })=> state.login.data);

  const handleSearch = () => {
    navigate('/beneficiares',{replace:true});
  };

  const handleBack = () => {
    navigate('/ajouter transfert');
  };

 
 
  
  const storedClientString = localStorage.getItem('client');
  let client: Client | null = null;
  if(storedClientString !== null){
     client = JSON.parse(storedClientString);
  }else{
    console.log("item empty")
  }
 
  
  


  return (
    <div  >
      <Navbar />
      <body>
        <div className='container-home'>
        <div className='header1'>
            <div className='cercleStyle'>1</div>
            <div className='ligneStyle' />
            <div className='cercleStyle select'>2</div>
            <div className='ligneStyle' />
            <div className='cercleStyle'>3</div>
            <div className='ligneStyle' />
            <div className='cercleStyle'>4</div>
            <div className='ligneStyle' />
            <div className='cercleStyle'>5</div>
            </div>
       
            
     
    <form >
    <div className='form-title'>Informations du KYC</div>
    
    <div className='form-row'>
      
    <input  className= "second-section-field" type="text" placeholder="Titre" value={client?.title} />
    <input  className= "second-section-field" type="text" placeholder="GSM" value={client?.gsm}  />
    
    </div>

    <div className='form-row' >
    <input  className= "second-section-field" type="text" placeholder="Nom" value={client?.lastName}  />
    <input  className= "second-section-field" type="text" placeholder="Pays de nationalité" value={client?.nationality} />
    </div>

    <div className='form-row'>
    <input  className= "second-section-field" type="text" placeholder="Prénom" value={client?.firstName} />
    <input  className= "second-section-field" type="text" placeholder="Pays d'adresse" />
    </div>

    <div className='form-row'>
    <input  className= "second-section-field" type="text" placeholder="Email" value={client?.email} />
    <input  className= "second-section-field" type="text" placeholder="Ville"  />
    </div>

    <div className='form-row'>
    <input  className= "second-section-field" type="text" placeholder="Date de naissance" value={client?.dob}  />
    <input  className= "second-section-field" type="text" placeholder="Adresse" value={client?.address} />
    </div>

    <div className='form-row'>
    <input  className= "second-section-field" type="text" placeholder="Type de pièce d'identité" value={client?.idType}  />
    <input  className= "second-section-field" type="text" placeholder="Profession" value={client?.profession}/>
    </div>

    <div className='form-row'>
    <input  className= "second-section-field" type="text" placeholder="Num pièce d'identité" value={client?.idNumber}  />
    <input  className= "second-section-field" type="text" placeholder="Pays d'émission" />
    </div>


    <div className='form-row'>
    <input  className= "second-section-field" type="text" placeholder="Validité de pièce d'identité" value={client?.idExpiration}/>
    
    </div>
    
    
    </form>
    <div className='containerButton'>
        <div className='button retour' onClick={handleBack}>
            <label>Retour</label>
        </div>
        <div className='button'onClick={handleSearch}>
            <label>Suivant</label>
        </div>
      </div>
      </div>
      </body>
    
</div>
  )
}

export default SecondSectionGetClient
