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
var timecard_service_1 = require("./timecard.service");
var WorkTrackingDisplay = (function () {
    function WorkTrackingDisplay(service, router) {
        this.service = service;
        this.router = router;
        this.found = false;
    }
    WorkTrackingDisplay.prototype.ngOnInit = function () {
        /* this.service.getWorkTracking(1)
             .subscribe(hero => this.workTracking = hero);
         console.log(this.workTracking +" work tracking is not defiled")*/
        this.findAll();
    };
    WorkTrackingDisplay.prototype.findAll = function () {
        var _this = this;
        return this.service.getAllWorkTracking().subscribe(function (workTrackings) { return _this.workTrackings = workTrackings; }, function (error) { return _this.errorMessage = error; });
    };
    WorkTrackingDisplay.prototype.onBack = function () {
        this.router.navigate(['/work-tracking', 3]);
    };
    WorkTrackingDisplay = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'work-tracking-display.component.html',
            styleUrls: ['work-tracking-display-component.css'],
            providers: [timecard_service_1.WorkTrackingService]
        }), 
        __metadata('design:paramtypes', [timecard_service_1.WorkTrackingService, router_1.Router])
    ], WorkTrackingDisplay);
    return WorkTrackingDisplay;
}());
exports.WorkTrackingDisplay = WorkTrackingDisplay;
//# sourceMappingURL=work-tracking-display.component.js.map