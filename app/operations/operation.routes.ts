import { RouterConfig }         from '@angular/router';
import {LineItemFormComponent} from "../invoice/line-item-form.component";
import {OperationComponent} from "./operation.component";
import {LineItemListComponent} from "../invoice/line-item-list.component";
import {InvoiceComponent} from "../invoice/invoicing/invoice.component";
import {ProjectComponent} from "../project/project.component";

export const operationRoutes: RouterConfig = [
    { path: 'operation',  component: OperationComponent },
    { path: 'line-items/:id', component: LineItemFormComponent},
    { path: 'find-all/:id', component: LineItemListComponent},
    {path:'find-all-invoice/:id', component:InvoiceComponent},
    {path:'find-all-project/:id', component:ProjectComponent}
];