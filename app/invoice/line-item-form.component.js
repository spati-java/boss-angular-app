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
var line_item_model_1 = require('./line-item.model');
var line_item_service_1 = require('./line-item.service');
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var LineItemFormComponent = (function () {
    function LineItemFormComponent(service, router) {
        this.service = service;
        this.router = router;
        this.isUpdate = false;
        this.myForm = common_1.ControlGroup;
        this.mode = 'Observable';
        this.types = ['EXPENSE', 'WORK'];
        this.found = false;
        this.model = new line_item_model_1.LineItem('invoiceId1243', '2016-01-01', '2016-12-31', this.types[0], 'Not required to type anymore', '2', '45/hrs', 563.43, 'true');
        this.lineItemResult = new line_item_model_1.LineItem('', '', '', '', '', '', '', 0, '');
        this.showTable = false;
    }
    LineItemFormComponent.prototype.ngOnInit = function () {
    };
    LineItemFormComponent.prototype.createLineItem = function () {
        var _this = this;
        this.service.createLineItem(this.model)
            .subscribe(function (lineItemResult) { return _this.lineItemResult = lineItemResult; });
    };
    LineItemFormComponent.prototype.updateLineItem = function () {
        var _this = this;
        this.service.updateLineItem(this.model)
            .subscribe(function (lineItem) { return _this.lineItem = lineItem; });
    };
    LineItemFormComponent.prototype.onUpdate = function () {
        this.isUpdate = true;
    };
    LineItemFormComponent.prototype.hideIdField = function () {
        this.isUpdate = false;
    };
    LineItemFormComponent.prototype.delete = function () {
        var _this = this;
        this.service.delete(this.model.id).subscribe(function (model) { return _this.model = model; });
    };
    LineItemFormComponent.prototype.getMenuModelById = function () {
        var _this = this;
        this.service.findOneLienItem(this.model.id).subscribe(function (lineItemResult) { return _this.lineItemResult = lineItemResult; });
        this.showTable = true;
    };
    LineItemFormComponent.prototype.findAll = function () {
        this.router.navigate(['/find-all', 3]);
    };
    LineItemFormComponent.prototype.search = function (term) {
        var _this = this;
        this.service.search(term).subscribe(function (result) { return _this.searchResults = result; });
        this.showTable = true;
    };
    LineItemFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-invoice-line-item',
            templateUrl: 'line-item-form.component.html',
            styleUrls: ['line-item-form.component.css'],
            providers: [line_item_service_1.LineItemService]
        }), 
        __metadata('design:paramtypes', [line_item_service_1.LineItemService, router_1.Router])
    ], LineItemFormComponent);
    return LineItemFormComponent;
}());
exports.LineItemFormComponent = LineItemFormComponent;
//# sourceMappingURL=line-item-form.component.js.map