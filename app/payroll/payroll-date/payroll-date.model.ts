export class PayrollDate {
    public id:string;
    public date:string;
    public cutoff:string;
    public note:string;
    public options:string[];


    constructor(id:string, date:string, cutoff:string, note:string, options:string[]) {
        this.id = id;
        this.date = date;
        this.cutoff = cutoff;
        this.note = note;
        this.options = options;
    }
}