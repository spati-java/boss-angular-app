import {Component, OnInit} from "@angular/core";
import {PayrollDateService} from "./payroll-date.service";
import {PayrollDate} from "./payroll-date.model";
import {Observable} from "rxjs/Rx";
@Component({
    moduleId: module.id,
    templateUrl: 'payroll-date.component.html',
    styleUrls: ['payroll-date.component.css'],
    providers: [PayrollDateService]
})
export class PayrollDateComponent implements OnInit {

    errorMessage = "no response from the server , check the connection";
    payrollDates:PayrollDate[];
    model = new PayrollDate('', '', '', '', []);
    savedData = new PayrollDate('', '', '', '', []);
    options = ['ONCE', 'WEEKLY', 'BIWEEKLY', 'MONTHLY'];
    showData = false;

    // for search
    searchResults:PayrollDate[];

    constructor(private service:PayrollDateService) {
    }

    ngOnInit():any {
        this.getAllPayrollDate();
    }

    save() {
        this.service.createPayrollDate(this.model).subscribe(data=>this.savedData = data);
    }

    updatePayrollDate() {
        this.service.updatePayrollDate(this.model).subscribe(data=>this.savedData = data);
    }

    getAllPayrollDate() {
        this.service.getAllPayrollDates().subscribe(dates=>this.payrollDates = dates);

    }

    search(term:string) {
        this.service.search(term).subscribe(result=>this.searchResults = result)
        this.showData = true;
    }

}