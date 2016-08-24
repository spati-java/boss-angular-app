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
var line_item_service_1 = require("./line-item.service");
var line_item_model_1 = require("./line-item.model");
var router_1 = require("@angular/router");
var highlight_directive_1 = require("./directives/highlight.directive");
var menu_model_1 = require("./menu.model");
var LineItemListComponent = (function () {
    function LineItemListComponent(service, router) {
        this.service = service;
        this.router = router;
        this.model = line_item_model_1.LineItem;
        this.menuModel = menu_model_1.Menu;
    }
    LineItemListComponent.prototype.ngOnInit = function () {
        this.getAllLineItems();
        this.getNotes();
    };
    LineItemListComponent.prototype.getAllLineItems = function () {
        var _this = this;
        return this.service.getAllLineItems().subscribe(function (lineItems) { return _this.lineItems = lineItems; });
    };
    LineItemListComponent.prototype.getAllListItems = function (obj) {
        return Object.keys(obj).map(function (key) {
            return obj[key];
        });
    };
    LineItemListComponent.prototype.onBack = function () {
        this.router.navigate(['/line-items', 1]);
    };
    LineItemListComponent.prototype.getNotes = function () {
        var _this = this;
        return this.service.getAllLineItems()
            .subscribe(function (dataObj) {
            _this.notes = dataObj.details.notes;
            _this.lineItems = dataObj;
        }, function (_) { }, function () {
            console.log("this is what I'm looking for " + _this.notes);
        });
        // this line is executed before the first `dataObject` event arrives.
    };
    LineItemListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'line-item-list.component.html',
            styleUrls: ['line-item-list.component.css'],
            directives: [highlight_directive_1.HighlightDirective],
            providers: [line_item_service_1.LineItemService]
        }), 
        __metadata('design:paramtypes', [line_item_service_1.LineItemService, router_1.Router])
    ], LineItemListComponent);
    return LineItemListComponent;
}());
exports.LineItemListComponent = LineItemListComponent;
//# sourceMappingURL=line-item-list.component.js.map