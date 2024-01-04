import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const UpdateTransfertState = () => {
  const [etat, setEtat] = useState('');
  const [motifRestitution, setMotifRestitution] = useState('');

  const handleChangeEtat = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setEtat(event.target.value);

    // Réinitialiser le motif si l'état est différent de 'RESTITUE'
    if (event.target.value !== 'RESTITUE') {
      setMotifRestitution('');
    }
  };

  return (
    <div>
      <Navbar />
      <body>
        <div className='consultation-page-content'>
          <form>
            <div className='form-title'>Changer l'état du transfert</div>
            <div>
              <select className='field' value={etat} onChange={handleChangeEtat}>
                <option value="" disabled>Changer l'état</option>
                <option value="SERVI">SERVI</option>
                <option value="EXTOURNE">EXTOURNE</option>
                <option value="RESTITUE">RESTITUE</option>
                <option value="BLOQUE">BLOQUE</option>
                <option value="DEBLOQUE">DEBLOQUE</option>
              </select>
            </div>

            
            {etat === 'RESTITUE' && (
              <div><input  className= "field" type="text" placeholder='Motif de restitution' required/></div>
            )}

            <div>
              <input type="submit" value="Modifier" className='button' />
            </div>
          </form>
        </div>
      </body>
    </div>
  );
};

export default UpdateTransfertState
