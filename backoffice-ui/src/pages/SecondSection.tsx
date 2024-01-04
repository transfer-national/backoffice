import React from 'react'
import '../styles/secondsection.css'
const SecondSection = () => {
  return (
    <div >
            
     
    <form>
    <div className='form-title'>Informations du KYC</div>
    
    <div className='form-row'>
      
    <input  className= "second-section-field" type="text" placeholder="Titre" required/>
    <input  className= "second-section-field" type="text" placeholder="GSM" required/>
    
    </div>

    <div className='form-row' >
    <input  className= "second-section-field" type="text" placeholder="Nom" required/>
    <input  className= "second-section-field" type="text" placeholder="Pays de nationalité" required/>
    </div>

    <div className='form-row'>
    <input  className= "second-section-field" type="text" placeholder="Prénom" required/>
    <input  className= "second-section-field" type="text" placeholder="Pays d'adresse" required/>
    </div>

    <div className='form-row'>
    <input  className= "second-section-field" type="text" placeholder="Email" required/>
    <input  className= "second-section-field" type="text" placeholder="Ville" required/>
    </div>

    <div className='form-row'>
    <input  className= "second-section-field" type="text" placeholder="Date de naissance" required/>
    <input  className= "second-section-field" type="text" placeholder="Adresse" required/>
    </div>

    <div className='form-row'>
    <input  className= "second-section-field" type="text" placeholder="Type de pièce d'identité" required/>
    <input  className= "second-section-field" type="text" placeholder="Profession" required/>
    </div>

    <div className='form-row'>
    <input  className= "second-section-field" type="text" placeholder="Num pièce d'identité" required/>
    <input  className= "second-section-field" type="text" placeholder="Pays d'émission" required/>
    </div>


    <div className='form-row'>
    <input  className= "second-section-field" type="text" placeholder="Validité de pièce d'identité" required/>
    
    </div>
    
    
    </form>
    
</div>
  )
}

export default SecondSection
