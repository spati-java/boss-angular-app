"use strict";
var line_item_form_component_1 = require("../invoice/line-item-form.component");
var operation_component_1 = require("./operation.component");
var line_item_list_component_1 = require("../invoice/line-item-list.component");
var invoice_component_1 = require("../invoice/invoicing/invoice.component");
var project_component_1 = require("../project/project.component");
exports.operationRoutes = [
    { path: 'operation', component: operation_component_1.OperationComponent },
    { path: 'line-items/:id', component: line_item_form_component_1.LineItemFormComponent },
    { path: 'find-all/:id', component: line_item_list_component_1.LineItemListComponent },
    { path: 'find-all-invoice/:id', component: invoice_component_1.InvoiceComponent },
    { path: 'find-all-project/:id', component: project_component_1.ProjectComponent }
];
//# sourceMappingURL=operation.routes.js.map