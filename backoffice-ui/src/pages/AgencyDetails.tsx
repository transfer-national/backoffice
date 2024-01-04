import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/agencydetails.css'

import axios from 'axios'
import { useSelector } from 'react-redux'
import { useAppSelector } from '../store/store'
const AgencyDetails = () => {

   

  const agent = useAppSelector(state=> state.agent.data)
  console.log(agent)
  return (
    <div>
        <Navbar />
        <body >
        <div className='consultation-page-content'>
        <div className='agency-details-container'>
            <h2>Affichage des informations de l'agent</h2>
            
            
            <div className='row'>
                <div><strong>Nom Agent</strong></div>
                <div>{agent?.name}</div>
            </div>
            <div className='row'>
                <div><strong>Email</strong></div>
                <div>{agent?.email}</div>
            </div>
            <div className='row'>
                <div><strong>Téléphone</strong></div>
                <div>{agent?.phoneNumber}</div>
            </div>
            
            <div className='row'>
                <div><strong>Balance</strong></div>
                <div>{agent?.balance}</div>
            </div>
            <div className='row'>
                <div><strong>Plafond</strong></div>
                <div>{agent?.threshold}</div>
            </div>
            </div>
        </div>
        </body>
      
    </div>
  )
}

export default AgencyDetails
