import React from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../store/store'
const Navbar = () => {
  const user = useAppSelector(state=> state.login.data)
  return (
    <header>
      <div className='navbar-row'>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className='title-column'>
            Transfert National
        </div>
        </Link>
        
        <div className='navbar-column'>
           <div className='informations-row'>
            <div className='navbar-column'>{user?.role}</div>
            <div className='role-column'>{user?.role}</div>
           </div>
           
        </div>
        

      </div>
    </header>
  )
}

export default Navbar
