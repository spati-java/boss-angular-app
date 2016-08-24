import {Address} from "../invoice/invoicing/address.model";
import {Contact} from "./contact.model";
import {ChargeCode} from "./charge-code.model";
import {MileStone} from "./milestone.model";
export class Project {
    public id:string;
    private name:string;
    private startDate:string;
    private endDate:string;
    private clientName:string;
    private clientAddress:Address;
    private workAddress:Address;
    private billingFrequency:string;
    private billRate:number;
    private billingAddress:Address;
    private contacts:Contact[];
    private chargeCodes:ChargeCode[];
    private milestones:MileStone[];
    private budgetAmount:number;
    private budgetAlert:string;
    private displayExpenseNotes:string;
    private allowExpenses:string;
    private expenseBudget:string;
    private expenseApprovalRequired:string;
    private expenseApproverEmail:string;
    private displayWorkNotes:string; //timecard notes in system
    private timeApprovalRequired:string;
    private timeApproverEmail:string;
    private paymentAlert:string;
    private businessCenterId:string;
    private mboId:string;
    private status:string;
    private weekEndingDay:string;
    private type:string;
    private billingType:string;

}