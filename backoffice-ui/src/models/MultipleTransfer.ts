import TransferType from "./TransferType";
import UnitTransfer from "./UnitTransfer";

export default interface MultipleTransfer{
    senderRef:number , 
    transferType:string ,
    unitTransfers:UnitTransfer[]
}