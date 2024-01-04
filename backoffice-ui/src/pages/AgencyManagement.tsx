import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import '../styles/agencymanagement.css'

import Agent from '../models/Agent'

const AgencyManagement = () => {
  const [agents , setAgents] = useState<Agent[]>([])
  const [nameOrId , setNameOrId] = useState("")
  
 
  const handleSearch= async()=>{
    try{ 
      setAgents([])
      const response = await axios.get<Agent[]>(`http://100.94.242.43:8080/agent?user=${nameOrId}`) ;
      console.log(response.data)
        setAgents(response.data)

    }catch(e){
      console.log(e)
    }
  }

  useEffect(()=>{
    async function getAgents(){
      try{
        const response = await axios.get<Agent[]>("http://100.94.242.43:8080/agent") ;
        setAgents(response.data)
        

      }catch(e){
        console.log(e)
      }
    }
    getAgents() ;
  } , [])

  return (
    <div>
         <Navbar />
        <body>
            
           <div className='consultation-page-content'>
            <form onSubmit={handleSearch}>
            <div className='form-title' >Rechercher un agent</div>
            <div className='seach-row'>
            <input  className= "field" type="text" placeholder='Rechercher par nom' onChange={(e)=> setNameOrId(e.target.value)} required/>
            
           

            
            <input  type="submit"  value="Rechercher"  className='button'/>
            
            <input  type="submit"  value="Add User"  className='button'/>
            
            </div>
            </form>
            </div>
            <div className='consultation-page-content'>
            <table className='agents-table'>
            <thead>
          <tr>
            
            <th>Nom Complet</th>
            <th>Email</th>
            <th>GSM</th>
            
            <th>Balance</th>
            
            <th>Threshold</th>
            
          </tr>
        </thead>
              <tbody>
                {agents.map((a , index)=>(
                  <tr key={index}>
                    <td>{a.name}</td>
                    <td>{a.email}</td>
                    <td>{a.phoneNumber}</td>
                    <td>{a.balance}</td>
                    <td>{a.threshold}</td>
                    
                  </tr>
                ))
                  
                }
              </tbody>
            </table>
            </div>
           
            
        </body>
      
    </div>
  )
}

export default AgencyManagement
