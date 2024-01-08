import React, { ChangeEvent, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Box, Modal, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Recipient from '../models/Recipient'
import axios from 'axios'
import { useAppDispatch, useAppSelector } from '../store/store'
import { setRecipientsData } from '../store/features/RecipientsSlice'





const ThirdSection = () => {
  const navigate = useNavigate()
  const dispatch= useAppDispatch()
  const [showMsg , setShowMsg] = useState(false)
  const [open, setOpen] = React.useState(false);
  const [nameOrId , setNameOrId] = useState(""); 
  const [newRecipient , setNewRecipient] = useState({
    firstName: '' ,
    lastName: '' ,
    phoneNumber: ''  

  })
  const url= process.env.REACT_APP_API_URL
  const [prenom , setPrenom] = useState('')
  const [nom , setNom] = useState('')
  const [phone , setPhone] = useState('')
  const [choisenRecipients , setChoisenRecipients] = useState<Recipient[]>([])
  const user = useAppSelector((state: { login: { data: any; }; })=> state.login.data);
  const headers = {
    'Authorization': localStorage.getItem('token'), 
  };
  const [recipients , setRecipients] = useState<Recipient[]>([])
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  
  const client= useAppSelector((state: { client: { data: any; }; })=> state.client.data)
  

  const handleAddRecipient = async()=>{
    try{
      const rec1= {
        firstName: prenom ,
        lastName: nom ,
        phoneNumber: phone  ,
        clientRef:client.ref

      }
       const response = await axios.post(`${url}/client/${client.ref}/recipient` ,rec1 , {headers});
       console.log(response.data) ;
       setShowMsg(true) ;
      

    }catch(e){
      console.log(e) ;
    }
  }

  console.log(choisenRecipients)

  const handleClick = () => {
    dispatch(setRecipientsData(choisenRecipients))
    navigate('/infos du transfert' , {replace:true});
  };

  const handleBack = () => {
    navigate('/client');
  };

  useEffect(()=>{
    async function getRecipients(){
      try{
        const response = await axios.get<Recipient[]>(`${url}/client/${client.ref}/recipient`) ;
        console.log(response.data)
        const filteredRecipients= response.data.filter(
          (rec : Recipient) =>
            rec.firstName.toLowerCase().includes(nameOrId.toLowerCase()) ||
            rec.lastName.toLowerCase().includes(nameOrId.toLowerCase())
            
            
        );

        setRecipients(filteredRecipients)
        


      }catch(e){
        console.log(e)
      }
    }
    getRecipients() ;
  } , [nameOrId])


  const handleRecipientClick = (index: number) => {
    const selectedRecipient = recipients[index];

   
    const isRecipientSelected = choisenRecipients.some(rec => rec.id === selectedRecipient.id);

    
    if (!isRecipientSelected) {
      setChoisenRecipients([...choisenRecipients, selectedRecipient]);
    }
  };
  
  return (
    <div >
      <Navbar />
      <body>
      <div className='container-home'>
        <div className='header1'>
            <div className='cercleStyle'>1</div>
            <div className='ligneStyle' />
            <div className='cercleStyle '>2</div>
            <div className='ligneStyle' />
            <div className='cercleStyle select'>3</div>
            <div className='ligneStyle' />
            <div className='cercleStyle'>4</div>
            <div className='ligneStyle' />
            <div className='cercleStyle'>5</div>
        </div>
      

          <div className='consultation-agents-page-content'>
            <div>
            <div className='form-title' >Liste des bénéficiares<br/></div>
            <div className='seach-row'>
            <input  className= "field" type="text" placeholder='Rechercher par nom' onChange={(e)=> setNameOrId(e.target.value)} required/>
            <input   onClick={handleOpen} type="submit"  value="Add recipient"  className='consultation-button'/>
            </div>
          </div>
            
            
            
            
            <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        <div className="containerDiv">
        <h2 style={{ paddingBottom: '20px', marginLeft: '200px' }}>Ajouter un Bénéficiare</h2>
      <div className="divS">
        
        <input type="text" placeholder= "Nom"  required className='field' defaultValue={prenom} onChange={(e)=>setPrenom(e.target.value)} />
      </div>
      
      <div className="divS">
        
        <input type="text" placeholder= "Prénom" required className='field' defaultValue={nom} onChange={(e)=>setNom(e.target.value)}/>
      </div>
      <div className="divS">
        
        <input type="text" placeholder= "GSM"   className='field' defaultValue={phone} onChange={(e)=>setPhone(e.target.value)} />
      </div>
      
     
      <button className='button' style={{marginLeft:"250px"}} onClick={handleAddRecipient}>Ajouter</button>
      {showMsg ? <p style={{paddingBottom: '20px', marginLeft: '200px', fontSize:'12px' , fontWeight:'bold'}}>Bénéficiare ajouté avec succès</p> : <p></p>}
     </div>
        </Typography>
      </Box>
    </Modal>
       </div>

       <div >
        {
          recipients.map((rec, index)=>(
            <div key={index} className='elemStyle'>
              <div>
              <input type="radio" onChange={() => handleRecipientClick(index)} />
              {rec.firstName} {rec.lastName}
               </div>
               <div>{rec.phoneNumber}</div>
            </div>
          ))
        }
        </div>

          <div className='containerButton'>
          <div className='button retour' onClick={handleBack}>
            <label >Retour</label >
          </div>
          <div className='button' onClick={handleClick}>
            <label >Suivant</label >

          </div>
        </div>
        </div>
      </body>
      
      </div>
  )
}

export default ThirdSection
