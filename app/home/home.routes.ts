import { RouterConfig }         from '@angular/router';
import {OperationComponent} from "../operations/operation.component";
import {WorkTrackingCpmponent} from "../work-tracking/timecard.component";
import {InvoiceComponent} from "../invoice/invoicing/invoice.component";
import {ScheduleComponent} from "../payroll/schedule/schedule.component";
import {PayrollDateComponent} from "../payroll/payroll-date/payroll-date.component";

export const homeRoutes: RouterConfig = [
    {path:'operations',component:OperationComponent},
    {path:'schedule/:id',component:ScheduleComponent},
    { path: 'work-tracking/:id', component: WorkTrackingCpmponent},
    { path: 'invoice/:id', component: InvoiceComponent},
    { path: 'payroll-date/:id', component: PayrollDateComponent},

];