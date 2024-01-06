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


const FifthSection = () => {

 const navigate=useNavigate()
  const user = useAppSelector((state: { login: { data: any; }; })=> state.login.data);
  const liste  = useAppSelector((state: { unittransfers: { data: any; }; })=> state.unittransfers.data);
  const [transfers , setTransfers] = useState<UnitTransfer[]>(liste)
  const transfertype = useAppSelector((state: { transfertype: { data: any; }; })=> state.transfertype.data);
  const amount = useAppSelector((state)=> state.amount.data);
  const frais = useAppSelector((state)=> state.fee.data);
  const client= useAppSelector((state: { client: { data: any; }; })=> state.client.data)

  const [sender , setSender] = useState<Client>(client)
  const [transferFinal , setTranser] = useState<MultipleTransfer>({
    senderRef:client.ref, 
    transferType:transfertype ,
    unitTransfers:transfers
  })
  console.log(transfers)
  console.log(transfertype)

  const liste2 =  useAppSelector((state: { recipients: { data: any; }; })=> state.recipients.data);
  const [listeRecipients, setListRecipients] = useState<Recipient[]>(liste2);
  const [Fees , setFees] = useState(0)
  
  const headers = {
    'Authorization': user.token, 
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
  
  // Call calculateFees whenever your transfers array changes
  useEffect(() => {
    calculateFees();
  }, [transfers]);

const dispatch= useAppDispatch()
  

  const handleClick =async () => {
    try{
      console.log("avant")
      console.log(transferFinal)
     const  response = await axios.post(`http://100.94.242.78:8080/transfer`, transferFinal, {headers})
     const res= await axios.get('http://100.94.242.78:8080/agent?user=a-9701480834')
     console.log(res.data)
     const user2={
      token:user.token ,
      role:user.role ,
      agent: res.data 
     }
     dispatch(setLoginData(user2))
     console.log(response.data)
     console.log("apres")
     toast.success('Employee added successfully', {
      position: 'bottom-right',
      autoClose: 3000, 
    });
     navigate('/dashboard' , {replace:true});

    }catch(e){
      console.log(e)
    }
    const pdf = new jsPDF();

    // Fonction pour dessiner une cellule dans le tableau
    const drawCell = (text:string, x:number, y:number, width:number, height:number) => {
      pdf.rect(x, y, width, height);
      pdf.text(text, x + 2, y + height / 2, { align: 'left', baseline: 'middle' });
    };
    
    // Position initiale du tableau
    let tableX = 10;
    let tableY = 10;
    
    // Largeur et hauteur des cellules
    const cellWidth = 80;
    const cellHeight = 12;
    
    // Espacement entre les cellules
    const cellSpacing = 5;
    
    // Attributs à afficher dans le tableau
    const attributes = ['Nom complet du bénéficiaire:', 'Type de transfert:', 'Montant du transfert:'];
    
    // Dessiner l'en-tête du tableau
   
    
    // Dessiner le contenu du tableau pour chaque transfert
    for (let i = 0; i < transfers.length; i++) {
      tableY += cellSpacing; // Ajouter un espacement entre les lignes
    
      const transfer = transfers[i];
      const recipient = listeRecipients[i];
    
      // Attributs associés à chaque transfert
      const values = [`${recipient.firstName} ${recipient.lastName}`, transfertype, `${transfer.amount} DH`];
    
      for (let j = 0; j < attributes.length; j++) {
        drawCell(attributes[j], tableX, tableY, cellWidth, cellHeight);
        drawCell(values[j], tableX + cellWidth + cellSpacing, tableY, cellWidth, cellHeight);
        tableY += cellHeight + cellSpacing;
      }
    }
    
    // Ajouter le montant total et les frais
    pdf.text(`Montant total de l'opération: ${amount} DH`, tableX, tableY + cellSpacing);
    pdf.text(`Frais de l'opération: ${Fees} DH`, tableX, tableY + cellSpacing + cellHeight + cellSpacing);
    
    // Position pour les cadres de signature
    const signatureX = 10;
    const signatureY = tableY + 2 * (cellHeight + cellSpacing) + 20;
    
    // Dessiner les cadres de signature
    pdf.rect(signatureX, signatureY, cellWidth, cellHeight);
    pdf.text('Signature du Client', signatureX + cellWidth / 2, signatureY + cellHeight / 2, {
      align: 'center',
      baseline: 'middle',
    });
    
    pdf.rect(signatureX + cellWidth + cellSpacing, signatureY, cellWidth, cellHeight);
    pdf.text('Signature de l\'Agent', signatureX + 1.5 * cellWidth + cellSpacing, signatureY + cellHeight / 2, {
      align: 'center',
      baseline: 'middle',
    });
    
    // Sauvegarder ou ouvrir le PDF
    pdf.save('transaction_summary.pdf');
    
    
   
    
  };

  

  const handleBack = () => {
    navigate('/beneficiares');
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
                    <div>{client.idNumber}</div>
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
