"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var navabr_component_1 = require("./navbar/navabr.component");
var bank_account_component_1 = require('./bank-account/bank-account.component');
var line_item_form_component_1 = require("./invoice/line-item-form.component");
var router_1 = require('@angular/router');
var home_component_1 = require("./home/home.component");
var operation_component_1 = require("./operations/operation.component");
var line_item_list_component_1 = require("./invoice/line-item-list.component");
var work_tracking_component_1 = require("./work-tracking/work-tracking.component");
var work_tracking_display_component_1 = require("./work-tracking/work-tracking-display.component");
var invoice_component_1 = require("./invoice/invoicing/invoice.component");
var project_component_1 = require("./project/project.component");
var schedule_component_1 = require("./payroll/schedule/schedule.component");
var payroll_date_component_1 = require("./payroll/payroll-date/payroll-date.component");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Invoice Details';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css'],
            directives: [navabr_component_1.NavbarComponent, bank_account_component_1.BankAccountComponent, line_item_form_component_1.LineItemFormComponent, home_component_1.HomeComponent, router_1.ROUTER_DIRECTIVES],
            precompile: [home_component_1.HomeComponent, operation_component_1.OperationComponent, line_item_form_component_1.LineItemFormComponent,
                line_item_list_component_1.LineItemListComponent, work_tracking_component_1.WorkTrackingCpmponent, work_tracking_display_component_1.WorkTrackingDisplay,
                invoice_component_1.InvoiceComponent, project_component_1.ProjectComponent, schedule_component_1.ScheduleComponent, payroll_date_component_1.PayrollDateComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map