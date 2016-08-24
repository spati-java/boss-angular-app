export class LineItem {
    id:number;
    invoiceId:string;
    startDate:string;
    endDate:string;
    type:string;
    description:string;
    quantity:string;
    unit:string;
    amount:number;
    hold:string;
    details:Map<string,Object>

    constructor(invoiceId:string, startDate:string, endDate:string, type:string, description:string, quantity:string, unit:string, amount:number, hold:string) {
        
        this.invoiceId = invoiceId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.type = type;
        this.description = description;
        this.quantity = quantity;
        this.unit = unit;
        this.amount = amount;
        this.hold = hold;
    }
}