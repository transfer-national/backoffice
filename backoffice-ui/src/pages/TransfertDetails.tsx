import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/tndetails.css'
import { Link, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../store/store'
import Transfert from '../models/Transfert'
import jsPDF from 'jspdf'
const TransfertDetails = () => {
    const transfert1 = useAppSelector((state: { transfert: { data: any } })=> state.transfert.data);
    const [transfert , setTransfert] = useState<Transfert>(transfert1)
    const user = useAppSelector((state: { login: { data: any; }; })=> state.login.data);
    const navigate =useNavigate()
    console.log(user.token)
    console.log(transfert)
    console.log(transfert.statuses.length)
    const handleClick =()=>{
        const pdf = new jsPDF();
    const drawCell = (text: string, x: number, y: number, width: number, height: number) => {
      pdf.text(text, x + 2, y + height / 2, { align: 'left', baseline: 'middle' });
    };


    const topMargin = 10;
    const titleX = 70;  
    const titleY = topMargin + 5;   
    const titleText = 'Reçu de réception';
    pdf.setFontSize(16); 
    pdf.text(titleText, titleX, titleY);

    let tableX = 10;
    let tableY = titleY + 15;

    // Largeur et hauteur des cellules
    const cellWidth = 110;
    const cellHeight = 8;

    const cellWidth1 = 80;
    const cellHeight1 = 8;

 
    const cellSpacing = 5;
    const transferDate = transfert.statuses[transfert.statuses.length - 1].updatedAt;


const dateObject = new Date(transferDate);

const year = dateObject.getFullYear();
const month = String(dateObject.getMonth() + 1).padStart(2, '0'); 
const day = String(dateObject.getDate()).padStart(2, '0');


const formattedDate = `${year}-${month}-${day}`;


    const attributes = ['Nom complet du bénéficiaire:', "Date d'émission du transfert:", 'Montant du transfert:'];
    const values = [`${transfert.recipient.firstName} ${transfert.recipient.lastName}`, `formattedDate `, `${transfert.amount} DH`  ]

    for (let j = 0; j < attributes.length; j++) {
      drawCell(attributes[j], tableX, tableY, cellWidth, cellHeight);
      drawCell(values[j], tableX + cellWidth + cellSpacing, tableY, cellWidth, cellHeight);
      tableY += cellHeight + cellSpacing;
    }



    // Position pour les cadres de signature
    const signatureX = 10;
    const signatureY = tableY + 2 * (cellHeight + cellSpacing) + 20;
    
    // Dessiner les cadres de signature
   
    pdf.text('Signature du Client', signatureX + cellWidth1 / 2, signatureY + cellHeight / 2, {
      align: 'center',
      baseline: 'middle',
    });
    
   
    pdf.text('Signature de l\'Agent', signatureX + 1.5 * cellWidth1 + cellSpacing, signatureY + cellHeight / 2, {
      align: 'center',
      baseline: 'middle',
    });

    // Sauvegarder ou ouvrir le PDF
    pdf.save('transaction_summary.pdf');

    
    }

  return (
    <div>
        <Navbar />
        <body>
        <div className='consultation-page-content'>
        <div className='tndetails-content'>
            <h2>Affichage des informations</h2>
            
            <div className='row'><h4>Les informations du donneur d'ordre</h4></div>
            <div className='row'>
                <div>ID Agent / Wallet du client</div>
                <div>{transfert.sender.idNumber}</div>
            </div>
            <div className='row'>

                <div>nom complète du DO</div>
                <div>{transfert.sender.firstName} {transfert.sender.lastName}</div>
            </div>
            <div className='row'>
                <div>Date d'émission</div>
                <div>{transfert.statuses[transfert.statuses.length -1].updatedAt}</div>
                    
             </div>

            <div className='row'><h4>Les informations de l'opération de transfert</h4></div>

            <div className='row'>
                <div>montant du transfert</div>
                <div>{transfert.amount} DH</div>
            </div>
            <div className='row'>
                <div>nom complète du B</div>
                <div>{transfert.recipient.firstName}  {transfert.recipient.lastName}</div>
            </div>

            <div className='row'>
                <div>Etat du transfert</div>
                <div>{transfert.statuses[transfert.statuses.length -1].status}</div>
            </div>
                    
                    

              
                

            
            <Link to="/changer etat du transfert">
                <button className='update-state-button'>Changer l'état </button>
                </Link>
                <button className='update-state-button' onClick={handleClick}>Exporter </button>
            
        </div>
        </div>
        </body>
      
    </div>
  )
}

export default TransfertDetails
