import Client from "./Client";
import Recipient from "./Recipient";
import TransfertStatusDetails from "./TransfertStatusDetails";

export default interface Transfert {
    ref:number , 
    amount:number ,
    sender: Client ,
    recipient: Recipient,
    statuses:TransfertStatusDetails[]
}