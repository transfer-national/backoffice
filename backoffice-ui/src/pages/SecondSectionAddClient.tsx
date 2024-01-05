import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Client from '../models/Client';
import { useAppDispatch, useAppSelector } from '../store/store';
import axios from 'axios';
import { setClientData } from '../store/features/ClientSlice';

const SecondSectionAddClient = () => {
    const user = useAppSelector((state: { login: { data: any; }; })=> state.login.data);
    const navigate= useNavigate();
    const [newClient , setNewClient] = useState<Client>({
    firstName: "",
   lastName: "",
    email: "",
    idExpiration: "",
    idType: "",
    nationality: "",
    address: "",
    gsm: "",
    idNumber: "",
    profession: "",
    title: "",
    dob: ""
    })
    const dispatch= useAppDispatch();


    const handleSearch = async() => {
        try{
            const headers = {
                'Authorization': user.token, 
              };
            const response = await axios.post(`http://192.168.100.237:8080/client`, newClient, {headers})
            console.log(response.data);
            dispatch(setClientData(response.data))
            navigate('/beneficiares',{replace:true});

        }catch(e){
            console.log(e)
        }
        
      };
    
      const handleBack = () => {
        navigate('/');
      };


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
      
    <input  className= "second-section-field" type="text" placeholder="Titre" />
    <input  className= "second-section-field" type="text" placeholder="GSM"   />
    
    </div>

    <div className='form-row' >
    <input  className= "second-section-field" type="text" placeholder="Nom"  />
    <input  className= "second-section-field" type="text" placeholder="Pays de nationalité"  />
    </div>

    <div className='form-row'>
    <input  className= "second-section-field" type="text" placeholder="Prénom"  />
    <input  className= "second-section-field" type="text" placeholder="Pays d'adresse" />
    </div>

    <div className='form-row'>
    <input  className= "second-section-field" type="text" placeholder="Email" />
    <input  className= "second-section-field" type="text" placeholder="Ville"  />
    </div>

    <div className='form-row'>
    <input  className= "second-section-field" type="text" placeholder="Date de naissance"  />
    <input  className= "second-section-field" type="text" placeholder="Adresse"  />
    </div>

    <div className='form-row'>
    <input  className= "second-section-field" type="text" placeholder="Type de pièce d'identité"   />
    <input  className= "second-section-field" type="text" placeholder="Profession" />
    </div>

    <div className='form-row'>
    <input  className= "second-section-field" type="text" placeholder="Num pièce d'identité"   />
    <input  className= "second-section-field" type="text" placeholder="Pays d'émission" />
    </div>


    <div className='form-row'>
    <input  className= "second-section-field" type="text" placeholder="Validité de pièce d'identité" />
    
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

export default SecondSectionAddClient
