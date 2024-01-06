import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/tndetails.css'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../store/store'
import Transfert from '../models/Transfert'
const TransfertDetails = () => {
    const transfert1 = useAppSelector((state: { transfert: { data: any } })=> state.transfert.data);
    const [transfert , setTransfert] = useState<Transfert>(transfert1)
    const user = useAppSelector((state: { login: { data: any; }; })=> state.login.data);
    console.log(user.token)
    console.log(transfert)
    console.log(transfert.statuses.length)

  return (
    <div>
        <Navbar />
        <body>
        <div className='consultation-page-content'>
        <div className='tndetails-content'>
            <h2>Affichage des informations</h2>
            
            <div className='row'><h4>Les informations du donneur d'ordre</h4></div>
            <div className='row'>
                <div>ID Agent / Wallet du client</div>
                <div>{transfert.sender.idNumber}</div>
            </div>
            <div className='row'>

                <div>nom complète du DO</div>
                <div>{transfert.sender.firstName} {transfert.sender.lastName}</div>
            </div>
            <div className='row'>
                <div>Date d'émission</div>
                <div>{transfert.statuses[transfert.statuses.length -1].updatedAt}</div>
                    
             </div>

            <div className='row'><h4>Les informations de l'opération de transfert</h4></div>

            <div className='row'>
                <div>montant du transfert</div>
                <div>{transfert.amount} DH</div>
            </div>
            <div className='row'>
                <div>nom complète du B</div>
                <div>{transfert.recipient.firstName}  {transfert.recipient.lastName}</div>
            </div>

            <div className='row'>
                <div>Etat du transfert</div>
                <div>{transfert.statuses[transfert.statuses.length -1].status}</div>
            </div>
                    
                    

              
                

            
            <Link to="/changer etat du transfert">
                <button className='update-state-button'>Changer l'état </button>
                <button className='update-state-button'>Exporter </button>
            </Link>
        </div>
        </div>
        </body>
      
    </div>
  )
}

export default TransfertDetails
