import React from 'react'
import { Link } from 'react-router-dom'
const FirstSection = () => {
  return (
    <div >
            
           
            <form>
            <div className='form-title'>Accès au transfert national</div>
            
            <div><select className='field'>
              <option value=""  disabled selected>Type de transfert</option>
              <option value="DEBIT">DEBIT</option>
              <option value="EN ESPECE">EN ESPECE</option>
              
            </select></div>
            <div><select className='field'>
              <option value=""  disabled selected>Type d'identité</option>
              <option value="CIN">CIN</option>
              <option value="PASSEPORT">PASSEPORT</option>
             
            </select></div>
            <div><input  className= "field" type="text" placeholder="Numéro d'identité" required/></div>
            
            </form>
            
        </div>
  )
}

export default FirstSection
