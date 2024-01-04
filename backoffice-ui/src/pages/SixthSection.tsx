import React from 'react'
import '../styles/sixthsection.css'
const SixthSection = () => {
  return (
    <div className='sixth-section-container'>
        <div className='sixth-section-title'>Finalisation</div>
       <div className='row'>
                <div><strong>nom complete du bébéficiaire</strong></div>
                <div>Mohcine Sahtani</div>
        </div>

        <div className='row'>
                <div><strong>ID du DO</strong></div>
                <div>HH125495</div>
        </div>
        <div className='row'>
                <div><strong>type de transfer</strong></div>
                <div>En Espèce</div>
        </div>
        <div className='row'>
                <div><strong>montant de transfer</strong></div>
                <div>400 DH</div>
        </div>
        <div className='row'>
                <div><strong>frais de transfert</strong></div>
                <div>0 DH</div>
        </div>
        <div className='row'>
                <div><strong>frais de notification</strong></div>
                <div>1 DH</div>
        </div>
        <div className='row'>
                <div><strong>montant total de l'opération</strong></div>
                <div>401 DH</div>
        </div>

    </div>
  )
}

export default SixthSection
