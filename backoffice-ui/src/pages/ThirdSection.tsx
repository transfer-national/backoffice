import React from 'react'

const ThirdSection = () => {
  return (
    <div >
            
           
            <form>
            <div className='form-title'>La saisie du montant du transfert</div>
            
            <div><input  className= "field" type="text" placeholder="Numéro d'identité" required/></div>
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
            
            </form>
            
        </div>
  )
}

export default ThirdSection
