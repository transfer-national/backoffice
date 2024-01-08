import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Transfert from '../models/Transfert'
import axios from 'axios'
import '../styles/consultationmtl.css'

const ConsultationMLT = () => {
    const [etat , setEtat] =useState("")
    const [gsm , setGsm] =useState("")
    const [id, setId] = useState("") ;
    const [from , setFrom] =useState("")
    const [to , setTo] =useState("")
    const [transfers , setTranfers] = useState<Transfert[]>([])
  const url=process.env.REACT_APP_API_URL
    const handleClick=async()=>{
        try{
            console.log(id) ;
            console.log(gsm) ;
            console.log(etat) ;
            console.log(from) ;
            console.log(to)
            const data: {
                identity: string;
                gsm: string;
                status: string;
                fromDate: string;
                toDate: string;
            }={
                identity:id ,
                gsm:gsm ,
                status:etat,
                fromDate:from ,
                toDate:to
            }
            const response = await axios.get(`${url}/transfer?gsm=${gsm}&idNumber=${id}&from=${from}&to=${to}&status=${etat}`)
            console.log(response.data) ;
            setTranfers(response.data)

        }catch(e){

        }

    }
    
  return (


    <div>
        <Navbar />
        <body>
            
           <div className='consultation-page-content'>
            <div>
                <input  type="text"  placeholder='phone' className='consultation-input' value={gsm} onChange={(e)=>setGsm(e.target.value)}/>
                <input  type="text"  placeholder='CIN'className='consultation-input' value={id} onChange={(e)=>setId(e.target.value)}/>
                <select className='consultation-input' value={etat} onChange={(e)=> setEtat(e.target.value)}>
                <option value="" disabled>statut</option>
                <option value="TO_SERVE">EMIS</option>
                <option value="SERVED">servi</option>
                <option value="REVERTED">EXTOURNE</option>
                <option value="CANCELLED">RESTITUE</option>
                <option value="BLOCKED">BLOQUE</option>
                <option value="UNBLOCKED_TO_SERVE">DEBLOQUE</option>
              </select>
                <input  type="text"  placeholder='de: jj-mm-aaaa' className='consultation-input' value={from} onChange={(e)=>setFrom(e.target.value)}/>
                <input  type="text"  placeholder='à: jj-mm-aaaa'className='consultation-input' value={to} onChange={(e)=>setTo(e.target.value)}/>
                <input type="submit" value="rechercher" className='consultation-button' onClick={handleClick}/>
            </div>

            {transfers.map((tran, index)=>(
            
            <div key={index} className='finalisation-container'>
            
    
           <div className='row'>
                    <div><strong>Nom complete du bénéficiaire</strong></div>
                    <div>{tran.recipient.firstName} {tran.recipient.lastName}</div>
            </div>
            <div className='row'>
                    <div><strong>Gsm du bénéficiaire</strong></div>
                    <div>{tran.recipient.phoneNumber}</div>
            </div>
    
            <div className='row'>
                    <div><strong>Cin/Passport du DO</strong></div>
                    <div>{tran.sender.idNumber}</div>
            </div>
            <div className='row'>
                    <div><strong>type de transfer</strong></div>
                    <div>{tran.statuses[tran.statuses.length -1].status}</div>
            </div>
            
            <div className='row'>
                    <div><strong>montant de transfer</strong></div>
                    <div>{tran.amount}</div>
            </div>
            
    
        </div>

            
          ))}


            
           </div>

            </body>
      
    </div>
  )
}

export default ConsultationMLT
