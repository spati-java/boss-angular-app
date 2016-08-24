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
var line_item_form_component_1 = require("../invoice/line-item-form.component");
var OperationComponent = (function () {
    function OperationComponent(router) {
        this.router = router;
        this.show = false;
    }
    OperationComponent.prototype.ngOnInit = function () {
        this.show = false;
    };
    OperationComponent.prototype.onCreate = function (id) {
        this.router.navigate(['/line-items', id]);
    };
    OperationComponent.prototype.onFindAll = function (id) {
        this.router.navigate(['/find-all', id]);
    };
    OperationComponent.prototype.onFindAllInvoice = function (id) {
        this.router.navigate(['/find-all-invoice', id]);
    };
    OperationComponent.prototype.onFindAllProject = function (id) {
        this.router.navigate(['/find-all-project', id]);
    };
    OperationComponent.prototype.onShow = function () {
        this.show = true;
    };
    OperationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'operation.component.html',
            styleUrls: ['operation.component.css'],
            directives: [line_item_form_component_1.LineItemFormComponent, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], OperationComponent);
    return OperationComponent;
}());
exports.OperationComponent = OperationComponent;
//# sourceMappingURL=operation.component.js.map