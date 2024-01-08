import React, { useState } from 'react'
import '../styles/tnconsultation.css'
import Navbar from '../components/Navbar'
import {Link, useNavigate} from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store/store'
import axios from 'axios'
import {  setTransfertData } from '../store/features/TransfertSlice'




const TNConsultation = () => {
  const [ref , setRef] = useState("")
  const dispatch = useAppDispatch() ;
  const navigate= useNavigate()
  const user = useAppSelector((state: { login: { data: any; }; })=> state.login.data);
  console.log(user.token)
  console.log(ref)
  const url=process.env.REACT_APP_API_URL

  const handleSubmit= async()=>{
    try{
      
      const response = await axios.get(`${url}/transfer/${ref}`) ;
      console.log(response.data)
      
        
        if(response.status === 200){
          navigate("/details du transfert", {replace:true})
          dispatch(setTransfertData(response.data));
          
        }else{
          console.log("erreur de transfert")
        }
        

      
      
      

    }catch(error){
      console.log(error) ;
    }

  }
  return (
    <div >
        <Navbar />
        <body>
            
           <div className='consultation-page-content'>
           <div className='tndetails-content'>
            <div className='form-title'>accès à la transaction</div>
            <div><input  className= "field" type="text" placeholder='Référence du transfert' value={ref} onChange={(e)=>setRef(e.target.value)} required/></div>
            <input  type="submit"  value="Consulter" onClick={handleSubmit} className='consultation-button'/>
            
            
           
                
                
               
           </div>
            </div>
            
        </body>
      
    </div>
  )
}

export default TNConsultation
