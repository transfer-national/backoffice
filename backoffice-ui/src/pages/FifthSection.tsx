import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useAppDispatch, useAppSelector } from '../store/store';
import UnitTransfer from '../models/UnitTransfer';
import MultipleTransfer from '../models/MultipleTransfer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Recipient from '../models/Recipient';
import Client from '../models/Client';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'; 
import { setLoginData } from '../store/features/LoginSlice';
import Agent from '../models/Agent';
import ResponseTransfert from '../models/ResponseTransfer';


const FifthSection = () => {

 const navigate=useNavigate()
  const user = useAppSelector((state: { login: { data: any; }; })=> state.login.data);
  const liste  = useAppSelector((state: { unittransfers: { data: any; }; })=> state.unittransfers.data);
  const [transfers , setTransfers] = useState<UnitTransfer[]>(liste)
  const transfertype = useAppSelector((state: { transfertype: { data: any; }; })=> state.transfertype.data);
  const amount = useAppSelector((state)=> state.amount.data);
  const frais = useAppSelector((state)=> state.fee.data);
  const client1= useAppSelector((state: { client: { data: any; }; })=> state.client.data)
  const storedClientString = localStorage.getItem('client');
  const [transferResult,setTransferResult] =useState<ResponseTransfert[]>([])
  let client: Client | null = null;
  if(storedClientString !== null){
     client = JSON.parse(storedClientString);
  }else{
    console.log("item empty")
  }

  const [sender , setSender] = useState<Client|null>(client)
  const [transferFinal , setTranser] = useState<MultipleTransfer>({
    senderRef:client1.ref, 
    transferType:transfertype ,
    unitTransfers:transfers
  })
  console.log(transfers)
  console.log(transfertype)

  const liste2 =  useAppSelector((state: { recipients: { data: any; }; })=> state.recipients.data);
  const [listeRecipients, setListRecipients] = useState<Recipient[]>(liste2);
  const [Fees , setFees] = useState(0)
  const [loggedUser  , setLoggedUser] =useState<Agent>() ;
  const headers = {
    'Authorization': localStorage.getItem('token'), 
  };
 
  const calculateFees = () => {
    let totalFees = 0;
  
    for (let i = 0; i < transfers.length; i++) {
      if (transfers[i].feeType === "RECIPIENT") {
        totalFees += 0;
      } else if (transfers[i].feeType === "SENDER") {
        totalFees += 20;
      } else {
        totalFees += 10;
      }
    }
  
    setFees(totalFees);
  };
  
  
  useEffect(() => {
    calculateFees();
  }, [transfers]);

const dispatch= useAppDispatch()
const url= process.env.REACT_APP_API_URL

  const handleClick =async () => {
    
    try{
      console.log("avant")
      //console.log(transferFinal)
      console.log("effectuer transfert")
     const  response = await axios.post(`${url}/transfer`, transferFinal, {headers})
     console.log(response.data)
     console.log(response.data[0].txRef)
    
     
     const res= await axios.get(`${url}/agent?user=a-9701480834`)
    console.log(res.data)
    navigate('/dashboard' , {replace:true});
    
     const user2={
      token:user.token ,
      role:user.role ,
      agent: res.data 
     }
     dispatch(setLoginData(user2))
     localStorage.setItem('agentBalance', user2.agent.balance.toString());
     
    
     console.log("apres")



     const pdf = new jsPDF();

   
    const drawCell = (text:string, x:number, y:number, width:number, height:number) => {
     
      pdf.text(text, x + 2, y + height / 2, { align: 'left', baseline: 'middle' });
    };
    
    const topMargin = 10;
    const titleX = 70;  
    const titleY = topMargin + 5;   
    const titleText = 'Reçu de Transfert';
    pdf.setFontSize(16); 
    pdf.text(titleText, titleX, titleY);

    let tableX = 10;
    let tableY = titleY + 15;
    
    
    const cellWidth = 110;
    const cellHeight = 8;

    const cellWidth1 = 80;
    
   
    const cellSpacing = 5;
    
   
    const attributes = ['Nom complet du bénéficiaire:', 'Référance de transfert', 'Type de transfert:','Motif de transfert', 'Montant du transfert:'];
    
  
   
    
   
    for (let i = 0; i < transfers.length; i++) {
      tableY += cellSpacing; 
    
      const transfer = transfers[i];
      const recipient = listeRecipients[i];
      
      
      const values = [`${recipient.firstName} ${recipient.lastName}` , `${response.data[i].txRef}` ,`${response.data.txRef}` , `${transfertype}`,`${transfer.reason}`, `${transfer.amount} DH`];
    
      for (let j = 0; j < attributes.length; j++) {
        drawCell(attributes[j], tableX, tableY, cellWidth, cellHeight);
        drawCell(values[j], tableX + cellWidth + cellSpacing, tableY, cellWidth, cellHeight);
        tableY += cellHeight + cellSpacing;
      }
    }
    
    
    pdf.text(`Montant total de l'opération: ${amount} DH`, tableX, tableY + cellSpacing);
    pdf.text(`Frais de l'opération: ${Fees} DH`, tableX, tableY + cellSpacing + cellHeight + cellSpacing);
    
    
    const signatureX = 10;
    const signatureY = tableY + 2 * (cellHeight + cellSpacing) + 20;
    
    
    pdf.text('Signature du Client', signatureX + cellWidth1 / 2, signatureY + cellHeight / 2, {
      align: 'center',
      baseline: 'middle',
    });
    
    pdf.text('Signature de l\'Agent', signatureX + 1.5 * cellWidth1 + cellSpacing, signatureY + cellHeight / 2, {
      align: 'center',
      baseline: 'middle',
    });
    
  
    pdf.save('transaction_summary.pdf');
    
     

    }catch(e){
      console.log(e)
    }
    
    
    
   
    
  };

  

  const handleBack = () => {
    navigate('/infos du transfert');
  };
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
            <div className='cercleStyle '>4</div>
            <div className='ligneStyle' />
            <div className='cercleStyle select'>5</div>
        </div>
         

        <div>
          <div className='form-title'>Finalisation</div>
          
          {transfers.map((tran, index)=>(
            
            <div key={index} className='finalisation-container'>
            
    
           <div className='row'>
                    <div><strong>nom complete du bénéficiaire</strong></div>
                    <div>{listeRecipients[index].firstName} {listeRecipients[index].lastName}</div>
            </div>
    
            <div className='row'>
                    <div><strong>ID du DO</strong></div>
                    <div>{client?.idNumber}</div>
            </div>
            <div className='row'>
                    <div><strong>type de transfer</strong></div>
                    <div>{transfertype}</div>
            </div>
            <div className='row'>
                    <div><strong>montant de transfer</strong></div>
                    <div>{tran.amount}</div>
            </div>
            
            <div className='row'>
                    <div><strong>Notification</strong></div>
                    <div>{tran.notificationEnabled? "activé":"désactivé"}</div>
            </div>
            
    
        </div>

            
          ))}
          <div  className='form-container'>
          <div className='row'>
                    <div><strong>montant total de l'opération</strong></div>
                    <div>{amount} DH</div>
            </div>
            <div className='row'>
                    <div><strong>Frais de l'opération</strong></div>
                    <div>{Fees} DH</div>
            </div>
            
            </div>
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
        <ToastContainer />
   </div>
            
           
    

  )
}

export default FifthSection
