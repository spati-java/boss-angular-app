import {Component} from '@angular/core';
import {NavbarComponent} from "./navbar/navabr.component";
import {BankAccountComponent} from  './bank-account/bank-account.component';
import {LineItemFormComponent} from "./invoice/line-item-form.component";
import {ROUTER_DIRECTIVES} from '@angular/router'
import {HomeComponent} from "./home/home.component";
import {OperationComponent} from "./operations/operation.component";
import {LineItemListComponent} from "./invoice/line-item-list.component";
import {WorkTrackingCpmponent} from "./work-tracking/timecard.component";
import {WorkTrackingDisplay} from "./work-tracking/work-tracking-display.component";
import {InvoiceComponent} from "./invoice/invoicing/invoice.component";
import {ProjectComponent} from "./project/project.component";
import {ScheduleComponent} from "./payroll/schedule/schedule.component";
import {PayrollDateComponent} from "./payroll/payroll-date/payroll-date.component";
import {ProfileComponent} from "./profile/profile.component";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [NavbarComponent, BankAccountComponent, LineItemFormComponent, HomeComponent, ROUTER_DIRECTIVES],

    precompile: [HomeComponent, OperationComponent, LineItemFormComponent,
        LineItemListComponent, WorkTrackingCpmponent, WorkTrackingDisplay,
        InvoiceComponent, ProjectComponent, ScheduleComponent, PayrollDateComponent, BankAccountComponent,ProfileComponent]
})
export class AppComponent {
    title = 'Invoice Details';
}

