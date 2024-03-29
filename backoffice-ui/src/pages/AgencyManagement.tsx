import React, { useEffect, useState , ChangeEvent} from 'react'
import Navbar from '../components/Navbar'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import '../styles/agencymanagement.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useAppSelector } from '../store/store'
import Agent from '../models/Agent'




const AgencyManagement = () => {
  const [agents , setAgents] = useState<Agent[]>([])
  const [open, setOpen] = React.useState(false);
  const [nameOrId , setNameOrId] = useState(""); 
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [showMsg , setShowMsg] = useState(false)
  const [newAgent , setNewAgent] = useState({
    name: "",
   email: "",
   phoneNumber: "",
  balance: "",
  threshold: ""
  })

  const user = useAppSelector((state: { login: { data: any; }; })=> state.login.data);
  const headers = {
    'Authorization': localStorage.getItem('token'), 
  };
  const url = process.env.REACT_APP_API_URL

  
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
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewAgent({
      ...newAgent,
      [name]: value
    });
  }



  const handleAddAgent = async()=>{
    try{
       const response = await axios.post(`${url}/agent` ,newAgent , {headers});
       console.log(response.data) ;
       setShowMsg(true) ;
       setNewAgent({
        name: "",
   email: "",
   phoneNumber: "",
  balance: "",
  threshold: ""

       })

    }catch(e){
      console.log(e) ;
    }
  }
 
 

  useEffect(()=>{
    async function getAgents(){
      try{
        const response = await axios.get<Agent[]>(`${url}/agent`) ;
        const filteredAgents= response.data.filter(
          (rec : Agent) =>
            rec.name.toLowerCase().includes(nameOrId.toLowerCase()) 
            
            
        );

        setAgents(filteredAgents)
        

      }catch(e){
        console.log(e)
      }
    }
    getAgents() ;
  } , [nameOrId])

  return (
    <div>
         <Navbar />
        <body>
            
           <div className='consultation-agents-page-content'>
            <div>
            <div className='form-title' >Liste des agents<br/></div>
            <div className='seach-row'>
            <input  className= "field" type="text" placeholder='Rechercher par nom' onChange={(e)=> setNameOrId(e.target.value)} required/>
            <input   onClick={handleOpen} type="submit"  value="Ajouter agent"  className='consultation-button'/>
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
        <h2 style={{ paddingBottom: '20px', marginLeft: '200px' }}>Ajouter un agent</h2>
      <div className="divS">
        
        <input type="text" placeholder= "Nom Complet" name="name" required className='field' defaultValue={newAgent.name} onChange={handleInputChange} />
      </div>
      
      <div className="divS">
        
        <input type="text" placeholder= "Email" name="email" required className='field' defaultValue={newAgent.email} onChange={handleInputChange}/>
      </div>
      <div className="divS">
        
        <input type="text" placeholder= "GSM" name="phoneNumber"  className='field' defaultValue={newAgent.phoneNumber} onChange={handleInputChange} />
      </div>
      <div className="divS">
        
        <input type="text"  placeholder= "Balance" name="balance"  className='field' defaultValue={newAgent.balance} onChange={handleInputChange} />
      </div>
      <div className="divS">
        
        <input type="text" placeholder= "Plafond" name="threshold"  className='field' defaultValue={newAgent.threshold} onChange={handleInputChange}/>
      </div>
     
      <button className='button' style={{marginLeft:"250px"}} onClick={handleAddAgent}>Ajouter</button>
      {showMsg ? <p style={{paddingBottom: '20px', marginLeft: '200px', fontSize:'12px' , fontWeight:'bold'}}>Agent ajouté avec succès</p> : <p></p>}
     </div>
        </Typography>
      </Box>
    </Modal>
            
            
          
            </div>
            <div className='consultation-agents-page-content'>
            <table className='agents-table'>
            <thead>
          <tr>
            
            <th>Nom Complet</th>
            <th>Email</th>
            <th>GSM</th>
            
            <th>Balance</th>
            
            <th>Threshold</th>
            
          </tr>
        </thead>
              <tbody>
                {agents.map((a , index)=>(
                  <tr key={index}>
                    <td>{a.name}</td>
                    <td>{a.email}</td>
                    <td>{a.phoneNumber}</td>
                    <td>{a.balance}</td>
                    <td>{a.threshold}</td>
                    
                  </tr>
                ))
                  
                }
              </tbody>
            </table>
            </div>
           
            
        </body>
      
    </div>
  )
}

export default AgencyManagement
