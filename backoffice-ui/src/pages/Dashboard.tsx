import React from 'react'
import '../styles/dashboard.css'
import Navbar from '../components/Navbar'
import  '../assets/money symbol.png' ;
import '../assets/Find.png'
import   "../assets/Customer.png"
import {Link} from 'react-router-dom'
import { useAppSelector } from '../store/store'
const Dashboard = () => {
  
  const user = useAppSelector((state: { login: { data: any; }; })=> state.login.data);
  console.log(user)
  
  return (
    <div>
        <Navbar />
        <div className='dashboard-content'>
        <div>
        <div className='solde'>
        <div className='dashboard-row'>
        
          <div className='column'>
            Solde :  <strong>{user?.agent?.balance} DH</strong>
           </div>
        
        <div className='column'>
           Limite de transfert : <strong>{user?.agent?.threshold}  DH</strong>
           
        </div>
        

      </div>

          </div>
       <div className='dashboard-row'>
        
        <Link to="/ajouter transfert" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className='first-box-column'>
        <div>
            <img  src='../assets/money symbol.png'  alt='error' width="150px" height="90px"/>
            <div className='box-title'>Effectuer un transfert</div>
            </div>
        </div>
        </Link>
        <Link to="/consultation" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className='second-box-column' >
            <div>
            <img  src='../assets/Find.png'  alt='error' width="100px" height="90px" />
            <div className='box-title'>Consultation des TNs</div>
            </div>
        </div>
        </Link>
            
            
        
        </div>
        <div className='dashboard-row'>
        
        <Link to="/gestion" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className='third-box-column' >
        <div>
            <img  src="../assets/Customer.png" alt='error' width="110px" height="90px" />
            <div className='box-title'>Gestion des agences</div>
            </div>
        </div>
        </Link>
        
            
        
        </div>
      
      </div>
      </div>

    </div>
  )
}

export default Dashboard
