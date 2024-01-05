import React, { ChangeEvent, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../store/store';
import { setClientData } from '../store/features/ClientSlice';
import Navbar from '../components/Navbar';
import '../styles/firstsection.css'
const FirstSection = () => {
  const [cin, setCin] = useState(""); 
  const dispatch = useAppDispatch()
  const navigate=useNavigate()

  const user = useAppSelector((state: { login: { data: any; }; })=> state.login.data);
  const handleSearch = async() => {
    try{
      const response = await axios.get(`http://192.168.100.237:8080/client/cin/${cin}`)
      console.log(response.data) ;
      console.log(response.status)
      if(response.status === 200){
        console.log('hello' )
        dispatch(setClientData(response.data))
        console.log('hello2' )
        console.log(response.data.expired)
        if(response.data.expired){
          console.log(response.data.expired)
          navigate("/modifier client" ,{replace:true})
        }else{
          
          navigate("/client" ,{replace:true})
        }
      }else if(response.status=== 204){
        console.log(response.status)
          navigate("/ajouter client" ,{replace:true})
      }
     

    }catch(e){
      console.log(e)
    }

   
  };

  const handleBack = () => {
    navigate('/');
  };

  
  return (
    <div >
      <Navbar />
            <body>
            <div  className='container-home'>

            <div className='header1'>
            <div className='cercleStyle select'>1</div>
            <div className='ligneStyle' />
            <div className='cercleStyle'>2</div>
            <div className='ligneStyle' />
            <div className='cercleStyle'>3</div>
            <div className='ligneStyle' />
            <div className='cercleStyle'>4</div>
            <div className='ligneStyle' />
            <div className='cercleStyle'>5</div>
            </div>
            <form>
            <div className='form-title'>Accès au transfert national</div>
            
            <div><select className='field'>
              <option value=""  disabled selected>Type de transfert</option>
              <option value="DEBIT">DEBIT</option>
              <option value="EN ESPECE">EN ESPECE</option>
              
            </select></div>
            <div><select className='field'>
              <option value=""  disabled selected>Type d'identité</option>
              <option value="CIN">CIN</option>
              <option value="PASSEPORT">PASSEPORT</option>
             
            </select></div>
            <div><input  className= "field" type="text" placeholder="Numéro d'identité"   onChange={(e)=> setCin(e.target.value)} required/></div>
            
            </form>
            <div className='containerButton'>
        <div className='button retour' onClick={handleBack}>
            <label>Retour</label>
        </div>
        <div className='button'onClick={handleSearch}>
            <label>Recherche</label>
        </div>
      </div>

            </div>
            </body>
           
            
            
        </div>
  )

}

export default FirstSection
