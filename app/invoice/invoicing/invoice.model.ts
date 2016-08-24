import {Company} from "./company.model";
import {LineItem} from "../line-item.model";
import {Payment} from "./payment.model";
import {Action} from "./action.model";
export class Invoice {
    private id:number;
    private mboId:string;
    private businessCenterId:string;
    private projectId:string;
    private number:string;
    private amount:number;
    private paymentsTotal:number;
    private balance:number;
    private creationDate:string;
    private glPostedDate:string;
    private startDate:string;
    private endDate:string;
    private terms:string;
    private paymentInstructions:string;
    private company:Company;
    private lineItems:LineItem [];
    private payments:Payment [];
    private actions:Action [];


}