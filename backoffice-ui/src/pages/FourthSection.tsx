import { Checkbox } from '@mui/material';
import React from 'react'
import '../styles/forthsection.css'

const ForthSection = () => {
  return (
    <div>
            
           
            <form>
            <div className='form-title'>Notification & Frais du transfert</div>
            <div className='radio-row'>
            <input type="checkbox"  /> <label>Notification du transfert</label>
            </div>

            <div className='fee-row'><h4>Frais du transfert</h4></div>
            <div className='radio-row'>
              <input type="radio" /><label>Frais à la charge du client donneur d'ordre</label>
            </div>
            <div className='radio-row'> 
              <input type="radio" /><label>Frais à la charge du client bénéficiaire</label>
            </div>
            <div className='radio-row'>
              <input type="radio" /><label>Frais partagés entre les clients</label>
            </div>
           
           
            
            </form>
            
        </div>
  ) ;
}

export default ForthSection
