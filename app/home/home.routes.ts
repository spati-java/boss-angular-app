import { RouterConfig }         from '@angular/router';
import {OperationComponent} from "../operations/operation.component";
import {WorkTrackingCpmponent} from "../work-tracking/timecard.component";
import {InvoiceComponent} from "../invoice/invoicing/invoice.component";
import {ScheduleComponent} from "../payroll/schedule/schedule.component";
import {PayrollDateComponent} from "../payroll/payroll-date/payroll-date.component";
import {BankAccountComponent} from "../bank-account/bank-account.component";
import {ProfileComponent} from "../profile/profile.component";
import {PolicyComponent} from "../policy/policy.component";

export const homeRoutes: RouterConfig = [
    {path:'operations',component:OperationComponent},
    {path:'schedule/:id',component:ScheduleComponent},
    { path: 'work-tracking/:id', component: WorkTrackingCpmponent},
    { path: 'invoice/:id', component: InvoiceComponent},
    { path: 'payroll-date/:id', component: PayrollDateComponent},
    { path: 'bank-account/:id', component: BankAccountComponent},
    { path: 'profile/:id', component: ProfileComponent},
    { path: 'policy/:id', component: PolicyComponent}

];