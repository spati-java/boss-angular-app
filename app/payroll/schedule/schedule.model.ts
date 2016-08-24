import {DirectDeposit} from "./direct-deposit.model";
export class Schedule{
   
    private  id:string;

    private  mboId:string;
    private  businessCenterId:string;
    
    private  startDate:string;
    
    private  endDate:string;
    
    private  skipDate:string;

    private  amount:number;

    private  frequency:string

    private  calculationMethod:string

    private directDeposits:DirectDeposit[];
    
    private payrollDates:string[];
}