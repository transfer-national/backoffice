import Client from "./Client";
import Recipient from "./Recipient";

export default interface Transfert {
    ref:number , 
    amount:number ,
    client: Client ,
    recipient: Recipient
}