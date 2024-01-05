import Client from "./Client";
import Recipient from "./Recipient";
import TransfertStatusDetails from "./TransfertStatusDetails";

export default interface Transfert {
    ref:number , 
    amount:number ,
    client: Client ,
    recipient: Recipient,
    statuses:TransfertStatusDetails[]
}