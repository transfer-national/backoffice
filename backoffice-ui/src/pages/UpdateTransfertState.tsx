import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { useAppSelector } from '../store/store';
import Transfert from '../models/Transfert';
import { useNavigate } from 'react-router-dom';
import TransfertDto from '../models/TransferDto';

const UpdateTransfertState = () => {
  const [etat, setEtat] = useState('');
  const [motifRestitution, setMotifRestitution] = useState('');
  const navigate =useNavigate()
  const transfert1 = useAppSelector((state: { transfert: { data: any } })=> state.transfert.data);
  const [tranDto , setTranDto] = useState<TransfertDto>()
  const [transfert , setTransfert] = useState<Transfert>(transfert1)
  const user = useAppSelector((state: { login: { data: any; }; })=> state.login.data);
    
const headers = {
      'Authorization': user.token, 
 };
  const handleUpdate = async()=>{
    try{
      
      const tr={
        ref:transfert.ref , 
    reason:motifRestitution ,
    actionType: etat,
  
      }
      setTranDto(tr)
      const response = await axios.put(`http://100.94.242.78:8080/transfer/${transfert.ref}/${etat}` ,transfert, {headers} )

      console.log(response.data)
      
      navigate('/consultation', {replace:true})

    }catch(e){

    }

  }

  return (
    <div>
      <Navbar />
      <body>
        <div className='consultation-page-content'>
        <div className='tndetails-content'>
            <div className='form-title'>Changer l'état du transfert</div>
            <div>
              <select className='field' value={etat} onChange={(e)=> setEtat(e.target.value)}>
                <option value="" disabled>Changer l'état</option>
                <option value="REVERT">EXTOURNE</option>
                <option value="CANCEL">RESTITUE</option>
                <option value="BLOCK">BLOQUE</option>
                <option value="UNBLOCK">DEBLOQUE</option>
              </select>
            </div>   
              <div><input  className= "field" type="text" placeholder='Motif de restitution' value={motifRestitution} onChange={(e)=>setMotifRestitution(e.target.value)} required/></div>
            

           
              <input type="submit" value="Modifier" className='consultation-button' onClick={handleUpdate} />
            
         </div> 
        </div>
      </body>
    </div>
  );
};

export default UpdateTransfertState
