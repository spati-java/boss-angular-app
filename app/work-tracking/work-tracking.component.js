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
var work_tracking_model_1 = require("./work-tracking.model");
var WorkTrackingCpmponent = (function () {
    function WorkTrackingCpmponent(router) {
        this.router = router;
        this.model = new work_tracking_model_1.WorkTracking(1, 'WorkTracking', 'mboId3243');
        this.show = false;
    }
    WorkTrackingCpmponent.prototype.ngOnInit = function () {
        return undefined;
    };
    WorkTrackingCpmponent.prototype.onShow = function () {
        this.show = true;
    };
    WorkTrackingCpmponent.prototype.onHide = function () {
        this.show = false;
    };
    WorkTrackingCpmponent.prototype.onGoToDisplayWorkTracking = function (id) {
        this.router.navigate(['/display-work-tracking', id]);
    };
    WorkTrackingCpmponent.prototype.addWorkTracking = function () {
        console.log(this.model.mboId + " sending data to the work tarcking");
    };
    WorkTrackingCpmponent.prototype.findOne = function () {
        this.router.navigate(['/display-work-tracking', 1]);
    };
    WorkTrackingCpmponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'work-tracking.component.html',
            styleUrls: ['work-tracking.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], WorkTrackingCpmponent);
    return WorkTrackingCpmponent;
}());
exports.WorkTrackingCpmponent = WorkTrackingCpmponent;
//# sourceMappingURL=work-tracking.component.js.map