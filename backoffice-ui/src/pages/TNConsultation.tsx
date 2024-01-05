import React, { useState } from 'react'
import '../styles/tnconsultation.css'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'
import { useAppDispatch } from '../store/store'
import axios from 'axios'
import { setTransfert } from '../store/features/TransfertSlice'
const TNConsultation = () => {
  const [ref , setRef] = useState("")
  const dispatch = useAppDispatch() ;

  const handleSubmit= async()=>{
    try{

      const response = await axios.get(`http://192.168.100.237:8080/transfer/${ref}`) ;
      console.log(response.data)
      dispatch(setTransfert(response.data));
      

    }catch(error){
      console.log(error) ;
    }

  }
  return (
    <div >
        <Navbar />
        <body>
            
           <div className='consultation-page-content'>
            <form onSubmit={handleSubmit}>
            <div className='form-title'>accès à la transaction</div>
            <div><input  className= "field" type="text" placeholder='Référence du transfert' onChange={(e)=>setRef(e.target.value)} required/></div>
            
            <div>
                <Link to ="/details du transfert">
                <input  type="submit"  value="Consulter"  className='consultation-button'/>
                </Link>
            </div>
            </form>
            </div>
            
        </body>
      
    </div>
  )
}

export default TNConsultation
