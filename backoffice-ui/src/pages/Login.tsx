import axios from 'axios'
import React, { ChangeEvent, FormEvent, HtmlHTMLAttributes, useState } from 'react'
import { useAppDispatch } from '../store/store'
import { setLoginData } from '../store/features/LoginSlice'
import { Navigate , Link} from 'react-router-dom'
import '../styles/login.css'

import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';


const Login = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const [formData , setFormData] = useState({
    userId:'',
    password: ''
  })

  

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }
  
  const handleLogin=async(e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    try{
      const response = await axios.post("http://192.168.100.237:8080/auth/login" , formData) ;
      console.log(response.data) ;
      dispatch(setLoginData(response.data)) ;
      if(response.data.role === "BACK_OFFICE"){
        console.log("true") ;
        navigate("dashboard" ,{replace:true})
      }
    }catch(e){
      console.log(e)
    }
    


  }
  return (
    <section className='login-body'> 

        <div className='login-page-content'>
         
          <form onSubmit={handleLogin}>
            <div>
          <div className="input-container"><FontAwesomeIcon icon={faUser} className="icon"/><input  className= "login-field" name="userId" type="text" placeholder='Id utilisateur' defaultValue={formData.userId}  onChange={handleInputChange}  required/></div>
          <div className="input-container"><FontAwesomeIcon icon={faLock}className="icon" /><input  className= "login-field" name="password" type="password" placeholder='Mot de passe'  defaultValue={formData.password} onChange={handleInputChange}  required/></div>
          <input  type="submit"  value="Se connecter"  className='login-button'/>
          </div>
          </form>
          
            
        </div>
      
    </section>
  )
}

export default Login
