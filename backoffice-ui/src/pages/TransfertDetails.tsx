import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/tndetails.css'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../store/store'
const TransfertDetails = () => {
    const transfert = useAppSelector(state=> state.transfert.data)
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
                <div>{transfert?.client?.idNumber}</div>
            </div>
            <div className='row'>

                <div>nom complète du DO</div>
                <div>{transfert?.client.firstname} + {transfert?.client.lastmail}</div>
            </div>
            <div className='row'>
                <div>Date d'émission</div>
                <div>12 October 2023 10h15</div>
                    
             </div>

            <div className='row'><h4>Les informations de l'opération de transfert</h4></div>

            <div className='row'>
                <div>montant du transfert</div>
                <div>{transfert?.amount} DH</div>
            </div>
            <div className='row'>
                <div>nom complète du B</div>
                <div>{transfert?.recipient.firstname} +{transfert?.recipient.lastname}</div>
            </div>

            <div className='row'>
                <div>Etat du transfert</div>
                <div>SERVI</div>
            </div>
                    
                    

              
                

            
            <Link to="/changer etat du transfert">
                <button className='update-state-button'>Changer l'état </button>
            </Link>
        </div>
        </div>
        </body>
      
    </div>
  )
}

export default TransfertDetails
