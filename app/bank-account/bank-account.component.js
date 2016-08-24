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
var bank_account_service_1 = require('./bank-account.service');
var BankAccountComponent = (function () {
    function BankAccountComponent(service) {
        this.service = service;
    }
    BankAccountComponent.prototype.ngOnInit = function () {
        this.getBankAccounts();
    };
    BankAccountComponent.prototype.getBankAccounts = function () {
        var _this = this;
        return this.service.getBankAccounts().subscribe(function (bankAccounts) { return _this.bankAccounts = bankAccounts; });
    };
    BankAccountComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bank-account',
            templateUrl: 'bank-account.component.html',
            styleUrls: ['bank-account.component.css'],
            directives: [BankAccountComponent],
            providers: [bank_account_service_1.BankAccountService]
        }), 
        __metadata('design:paramtypes', [bank_account_service_1.BankAccountService])
    ], BankAccountComponent);
    return BankAccountComponent;
}());
exports.BankAccountComponent = BankAccountComponent;
//# sourceMappingURL=bank-account.component.js.map