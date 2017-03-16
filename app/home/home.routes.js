"use strict";
var operation_component_1 = require("../operations/operation.component");
var timecard_component_1 = require("../work-tracking/timecard.component");
var invoice_component_1 = require("../invoice/invoicing/invoice.component");
var schedule_component_1 = require("../payroll/schedule/schedule.component");
var payroll_date_component_1 = require("../payroll/payroll-date/payroll-date.component");
var bank_account_component_1 = require("../bank-account/bank-account.component");
var profile_component_1 = require("../profile/profile.component");
var policy_component_1 = require("../policy/policy.component");
exports.homeRoutes = [
    { path: 'operations', component: operation_component_1.OperationComponent },
    { path: 'schedule/:id', component: schedule_component_1.ScheduleComponent },
    { path: 'work-tracking/:id', component: timecard_component_1.WorkTrackingCpmponent },
    { path: 'invoice/:id', component: invoice_component_1.InvoiceComponent },
    { path: 'payroll-date/:id', component: payroll_date_component_1.PayrollDateComponent },
    { path: 'bank-account/:id', component: bank_account_component_1.BankAccountComponent },
    { path: 'profile/:id', component: profile_component_1.ProfileComponent },
    { path: 'policy/:id', component: policy_component_1.PolicyComponent }
];
//# sourceMappingURL=home.routes.js.map