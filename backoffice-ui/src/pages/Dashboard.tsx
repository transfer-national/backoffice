import React from 'react'
import '../styles/dashboard.css'
import Navbar from '../components/Navbar'
import moneySymbol from '../assets/money symbol.png'
import Find from '../assets/Find.png'
import Customer from '../assets/Customer.png'
import {Link} from 'react-router-dom'
import { useAppSelector } from '../store/store'
const Dashboard = () => {
  
  const user = useAppSelector(state=> state.login.data);
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
            <img  src={moneySymbol}  alt='error' width="150px" height="90px"/>
            <div className='box-title'>Effectuer un transfert</div>
            </div>
        </div>
        </Link>
        <Link to="/consultation" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className='second-box-column' >
            <div>
            <img  src={Find}  alt='error' width="100px" height="90px" />
            <div className='box-title'>Consultation des TNs</div>
            </div>
        </div>
        </Link>
            
            
        
        </div>
        <div className='dashboard-row'>
        
        <Link to="/gestion" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className='third-box-column' >
        <div>
            <img  src={Customer}  alt='error' width="110px" height="90px" />
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