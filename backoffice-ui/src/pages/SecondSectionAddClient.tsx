import React, { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Client from '../models/Client';
import { useAppDispatch, useAppSelector } from '../store/store';
import axios from 'axios';
import { setClientData } from '../store/features/ClientSlice';






const SecondSectionAddClient = () => {
    const user = useAppSelector((state: { login: { data: any; }; })=> state.login.data);
    const navigate= useNavigate();
    const [nom , setNom] = useState("")
    const [prenom , setPrenom] = useState("")
    const [email , setEmail] = useState("")
    const [expiration , setExpiration] = useState("")
    const [type , setType] = useState("")
    const [nationalite , setNatioanlite] = useState("")
    const [adresse, setAdresse] = useState("")
    const [gsm , setGsm] = useState("")
    const [number , setNumber] = useState("")
    const [prof , setProf] = useState("")
    const [titre , setTitre] = useState("")
    const [dob , setDob] = useState("")
    const [pays , setPays] = useState("")
    const [ville , setVille] = useState("")
    const [paysEm, setPaysEm] = useState("")
    const [newClient , setNewClient] = useState<Client>()
    const dispatch= useAppDispatch();
  const url=process.env.REACT_APP_API_URL
    
    const headers = {
      'Authorization': localStorage.getItem('token'), 
    };

    const handleSearch = async() => {
        try{
           

              const cl={
                title :titre,
          firstName: prenom,
          lastName: nom,
          emitCountry : paysEm,
          idType :type,
          idNumber : number,
          idExpiration : expiration,
          dob : dob,
          profession : prof,
          nationality: nationalite,
          address :adresse,
          city :  ville,
          country : pays,
          gsm : gsm,
          email : email,
          byAgentId: null,
              }
              
              console.log(cl)
            const response = await axios.post(`${url}/client`, cl, {headers})
            console.log(response.data);
            dispatch(setClientData(response.data))
            const clientString = JSON.stringify(response.data);
            localStorage.setItem('client', clientString);
            navigate('/beneficiares',{replace:true});

        }catch(e){
            console.log(e)
        }
        
      }
    
      const handleBack = () => {
        navigate('/ajouter transfert');
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
        
    <div className='form-title'>Informations du KYC</div>
    
    <div className='form-row'>
      
    <input  className= "second-section-field" type="text" placeholder="Titre" value={titre} onChange={(e)=>setTitre(e.target.value)}/>
    <input  className= "second-section-field" type="text" placeholder="GSM"  value={gsm} onChange={(e)=>setGsm(e.target.value)} />
    
    </div>

    <div className='form-row' >
    <input  className= "second-section-field" type="text" placeholder="Nom" value={nom} onChange={(e)=>setNom(e.target.value)} />
    <input  className= "second-section-field" type="text" placeholder="Pays de nationalité" value={nationalite} onChange={(e)=>setNatioanlite(e.target.value)} />
    </div>

    <div className='form-row'>
    <input  className= "second-section-field" type="text" placeholder="Prénom" value={prenom} onChange={(e)=>setPrenom(e.target.value)} />
    <input  className= "second-section-field" type="text" placeholder="Pays d'adresse" />
    </div>

    <div className='form-row'>
    <input  className= "second-section-field" type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
    <input  className= "second-section-field" type="text" placeholder="Ville"  />
    </div>

    <div className='form-row'>
    <input  className= "second-section-field" type="text" placeholder="Date de naissance" value={dob} onChange={(e)=>setDob(e.target.value)} />
    <input  className= "second-section-field" type="text" placeholder="Adresse" value={adresse} onChange={(e)=>setAdresse(e.target.value)} />
    </div>

    <div className='form-row'>
    <input  className= "second-section-field" type="text" placeholder="Type de pièce d'identité"  value={type} onChange={(e)=>setType(e.target.value)} />
    <input  className= "second-section-field" type="text" placeholder="Profession" value={prof} onChange={(e)=>setProf(e.target.value)} />
    </div>

    <div className='form-row'>
    <input  className= "second-section-field" type="text" placeholder="Num pièce d'identité"  value={number} onChange={(e)=>setNumber(e.target.value)} />
    <input  className= "second-section-field" type="text" placeholder="Pays d'émission" />
    </div>


    <div className='form-row'>
    <input  className= "second-section-field" type="text" placeholder="Validité de pièce d'identité" value={expiration} onChange={(e)=>setExpiration(e.target.value)} />
    
    </div>
    
    
    
  
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
