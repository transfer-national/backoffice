import { Checkbox } from '@mui/material';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import '../styles/forthsection.css'
import Navbar from '../components/Navbar';
import { useAppDispatch, useAppSelector } from '../store/store';
import Recipient from '../models/Recipient';
import { useNavigate } from 'react-router-dom';
import UnitTransfer from '../models/UnitTransfer';
import { setUnitTransfersData } from '../store/features/listeUnitTransfer';
import { setAmountData } from '../store/features/AmountSlice';
import { setFeeData } from '../store/features/FeeSlice';

const ForthSection = () => {
 
  const dispatch = useAppDispatch()
  const user = useAppSelector((state: { login: { data: any; }; })=> state.login.data);
  const transferType = useAppSelector((state: { transfertype: { data: any; }; })=> state.transfertype.data);
  console.log(transferType)
  const liste =  useAppSelector((state: { recipients: { data: any; }; })=> state.recipients.data);
  const [listeRecipients, setListRecipients] = useState<Recipient[]>(liste);
  const [amount , setAmount] = useState('')
  const [reason , setReason] = useState('')
  const [notify , setNotify] = useState(false) ;
  const [fee , setFee] = useState('')
  const [recipient , setRecipient] = useState('')

  const [listTransferUni , setListTransferUni] = useState<UnitTransfer[]>([])
  const [Frais , setFrais] = useState(0)
  const [FraisTotal , setFraisTotal] =useState(0)
  const [sum , setSum]=useState(0)
   const navigate = useNavigate()

 
  console.log(listeRecipients)
  

  

  const handleBack = () => {
    navigate('/beneficiares');
  };

  

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("hello")
    const tranAmount= parseInt(amount);
    const tranRecipient=parseInt(recipient);
    const tran={
      recipientId:tranRecipient, 
      amount:tranAmount,
      feeType: fee,
      reason:reason ,
      notificationEnabled:notify
    }
    console.log(fee)
    if(fee==='RECIPIENT'){
      setFrais(0)
      console.log(Frais)
    }else if(fee ==='SENDER'){
      setFrais(20)
      console.log(Frais)
    }else{
      setFrais(10)
      console.log(Frais)
    }
    setSum(sum + tranAmount)
    setFraisTotal(Frais + FraisTotal)

    setListTransferUni((prevListTransferUni) => [...prevListTransferUni, tran]);
    console.log(listTransferUni)
    console.log("hello2")
    
    
  };
  const handleClick = () => {
    console.log(listTransferUni)
    dispatch(setUnitTransfersData(listTransferUni))
    dispatch(setAmountData(sum))
    dispatch(setFeeData(FraisTotal))
    navigate('/finalisation' , {replace:true});
  };

  const handleFee=(e:string , id:string)=>{
    setFee(e)
    setRecipient(id)

  }

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
          <div className='form-title'>Remplir les informations</div>
          
           {
            listeRecipients.map((rec,index)=>(
              <div key={index} className='form-container'>
              <form onSubmit={handleSubmit}>
                <div className='recepient-name' >bénéficiare : {rec.firstName} {rec.lastName}</div>
                <div><input  className= "field" type="text" placeholder="Montant" value={amount} onChange={(e)=>setAmount(e.target.value)} required/></div>
               <div><select className='field' value={reason}  onChange={(e)=>setReason(e.target.value)}>
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
            <input type="checkbox"   onClick={()=>setNotify(!notify)}/> <label>Notification du transfert</label>
            </div>

            <div className='fee-row' ><h4>Frais du transfert</h4></div>
            <div className='radio-row'>
              <input type="radio" onChange={()=>handleFee('SENDER', (rec.id).toString())} /><label>Frais à la charge du client donneur d'ordre</label>
            </div>
            <div className='radio-row'> 
              <input type="radio"  onChange={()=>handleFee('RECIPIENT' , (rec.id).toString())}/><label>Frais à la charge du client bénéficiaire</label>
            </div>
            <div className='radio-row'>
              <input type="radio"  onChange={()=>handleFee('FIFTY_FIFTY', (rec.id).toString())}/><label>Frais partagés entre les clients</label>
            </div>
            <input type="submit"  className="button"value="enregistrer" />
            
              
              </form>

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
  ) ;
}

export default ForthSection
