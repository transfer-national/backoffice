import { Checkbox } from '@mui/material';
import React, { useEffect, useState } from 'react'
import '../styles/forthsection.css'
import Navbar from '../components/Navbar';
import { useAppSelector } from '../store/store';
import Recipient from '../models/Recipient';

const ForthSection = () => {
 
  
  const user = useAppSelector((state: { login: { data: any; }; })=> state.login.data);
  const liste =  useAppSelector((state: { recipients: { data: any; }; })=> state.recipients.data);
  const [listeRecipients, setListRecipients] = useState<Recipient[]>(liste);

 
  console.log(listeRecipients)
  console.log(user.token)
  return (
    <div>
      <Navbar />
      <body>
      <div className='container-home'>
        <div className='header1'>
            <div className='cercleStyle'>1</div>
            <div className='ligneStyle' />
            <div className='cercleStyle '>2</div>
            <div className='ligneStyle' />
            <div className='cercleStyle '>3</div>
            <div className='ligneStyle' />
            <div className='cercleStyle select'>4</div>
            <div className='ligneStyle' />
            <div className='cercleStyle'>5</div>
        </div>

        <div>
          <div>Remplir les informations</div>
          
           {
            listeRecipients.map((rec,index)=>(
              <div key={index} className='form-container'>
              <form>
                <div className='form-title'>{rec.firstName}</div>
                <div><input  className= "field" type="text" placeholder="Montant" required/></div>
            <div><select className='field'>
              <option value=""  disabled selected>Motif de transfert</option>
              <option value="Soutien familial">Soutien familial</option>
              <option value="Epargne/investissement">Epargne/investissement</option>
              <option value="Cadeau">Cadeau</option>
              <option value="Paiement de biens et de services">Paiement de biens et de services</option>
              <option value="Frais de dépassement ">Frais de dépassement </option>
              <option value="Frais d'éducation">Frais d'éducation</option>
              <option value="Location/Hypothèque ">Location/Hypothèque </option>
              <option value="Aide de secours/Médicale">Aide de secours/Médicale</option>
              <option value="Revenu d'un site internet">Revenu d'un site internet</option>
              <option value="Frais de loterie ou récompense/taxes">Frais de loterie ou récompense/taxes</option>
              <option value="Prêt">Prêt</option>
              <option value="Commerce sur internet">Commerce sur internet</option>
              <option value="Donation">Donation</option>
              <option value="Autres">Autres (à préciser)</option>
              </select></div>
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
            ))
           }
          
        </div>


        </div>



      </body>
            
           
            
            
    </div>
  ) ;
}

export default ForthSection
