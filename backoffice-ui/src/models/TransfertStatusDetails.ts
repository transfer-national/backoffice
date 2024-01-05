import TransferStatus from "./TransferStatus";
import Transfert from "./Transfert";
import User from "./User";

export default interface TansferStatusDetails {
     id:BigInteger ,
     transfer:Transfert ,
     byUser:string,

    status:string ,
    reason:string ,
    time: string

    
}