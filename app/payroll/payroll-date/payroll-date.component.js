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
var core_1 = require("@angular/core");
var payroll_date_service_1 = require("./payroll-date.service");
var payroll_date_model_1 = require("./payroll-date.model");
var PayrollDateComponent = (function () {
    function PayrollDateComponent(service) {
        this.service = service;
        this.errorMessage = "no response from the server , check the connection";
        this.model = new payroll_date_model_1.PayrollDate('', '', '', '', []);
        this.savedData = new payroll_date_model_1.PayrollDate('', '', '', '', []);
        this.options = ['ONCE', 'WEEKLY', 'BIWEEKLY', 'MONTHLY'];
        this.showData = false;
    }
    PayrollDateComponent.prototype.ngOnInit = function () {
        this.getAllPayrollDate();
    };
    PayrollDateComponent.prototype.save = function () {
        var _this = this;
        this.service.createPayrollDate(this.model).subscribe(function (data) { return _this.savedData = data; });
    };
    PayrollDateComponent.prototype.updatePayrollDate = function () {
        var _this = this;
        this.service.updatePayrollDate(this.model).subscribe(function (data) { return _this.savedData = data; });
    };
    PayrollDateComponent.prototype.getAllPayrollDate = function () {
        var _this = this;
        this.service.getAllPayrollDates().subscribe(function (dates) { return _this.payrollDates = dates; });
    };
    PayrollDateComponent.prototype.search = function (term) {
        var _this = this;
        this.service.search(term).subscribe(function (result) { return _this.searchResults = result; });
        this.showData = true;
    };
    PayrollDateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'payroll-date.component.html',
            styleUrls: ['payroll-date.component.css'],
            providers: [payroll_date_service_1.PayrollDateService]
        }), 
        __metadata('design:paramtypes', [payroll_date_service_1.PayrollDateService])
    ], PayrollDateComponent);
    return PayrollDateComponent;
}());
exports.PayrollDateComponent = PayrollDateComponent;
//# sourceMappingURL=payroll-date.component.js.map