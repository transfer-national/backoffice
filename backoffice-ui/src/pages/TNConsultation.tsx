import React from 'react'
import '../styles/tnconsultation.css'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'
import { useAppDispatch } from '../store/store'
import axios from 'axios'
import { setTransfert } from '../store/features/TransfertSlice'
const TNConsultation = () => {
  const dispatch = useAppDispatch() ;

  const handleSubmit= async()=>{
    try{

      const response = await axios.get("") ;
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
            <div><input  className= "field" type="text" placeholder='Référence du transfert' required/></div>
            
            <div>
                <Link to ="/details du transfert">
                <input  type="submit"  value="Consulter"  className='button'/>
                </Link>
            </div>
            </form>
            </div>
            
        </body>
      
    </div>
  )
}

export default TNConsultation
