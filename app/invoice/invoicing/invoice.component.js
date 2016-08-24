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
var router_1 = require("@angular/router");
var invoice_service_1 = require("./invoice.service");
var InvoiceComponent = (function () {
    function InvoiceComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    InvoiceComponent.prototype.ngOnInit = function () {
        console.log("invoice component loaded");
        this.getAllInvoices();
        return undefined;
    };
    InvoiceComponent.prototype.getAllInvoices = function () {
        var _this = this;
        return this.service.getAllInvoices().subscribe(function (invoices) { return _this.invoices = invoices; });
    };
    InvoiceComponent.prototype.getAllListItems = function (obj) {
        return Object.keys(obj).map(function (key) {
            return obj[key];
        });
    };
    InvoiceComponent.prototype.search = function (term) {
        var _this = this;
        this.service.search(term).subscribe(function (result) { return _this.searchResults = result; });
    };
    InvoiceComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'invoice.component.html',
            styleUrls: ['invoice.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [invoice_service_1.InvoiceService]
        }), 
        __metadata('design:paramtypes', [invoice_service_1.InvoiceService, router_1.Router])
    ], InvoiceComponent);
    return InvoiceComponent;
}());
exports.InvoiceComponent = InvoiceComponent;
//# sourceMappingURL=invoice.component.js.map