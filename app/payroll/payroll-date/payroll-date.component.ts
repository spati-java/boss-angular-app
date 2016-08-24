import {Component, OnInit} from "@angular/core";
import {PayrollDateService} from "./payroll-date.service";
import {PayrollDate} from "./payroll-date.model";
@Component({
    moduleId: module.id,
    templateUrl: 'payroll-date.component.html',
    styleUrls: ['payroll-date.component.css'],
    providers: [PayrollDateService]
})
export class PayrollDateComponent implements OnInit {

    payrollDates:PayrollDate[];
    model = new PayrollDate();
    savedData : PayrollDate;
    options = ['ONCE', 'WEEKLY', 'BIWEEKLY', 'MONTHLY'];
    showData = false;

    constructor(private service:PayrollDateService) {
    }

    ngOnInit():any {
        this.getAllPayrollDate();
        return undefined;
    }

    save() {
        this.service.createPayrollDate(this.model).subscribe(function (data) {
            this.savedData = data;
            console.log(this.savedData.note + '   received response-1');
        });

        console.log( this.savedData.note + '   received response-2');
        this.showData = true;

    }

    getAllPayrollDate() {
        this.service.getAllPayrollDates().subscribe(dates=>this.payrollDates = dates);
    }

}