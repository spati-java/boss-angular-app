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
var schedule_service_1 = require("./schedule.service");
var ScheduleComponent = (function () {
    function ScheduleComponent(service) {
        this.service = service;
        this.showResult = false;
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        this.getAllSchedule();
        return undefined;
    };
    ScheduleComponent.prototype.getAllSchedule = function () {
        var _this = this;
        this.service.getAllSchedule().subscribe(function (schedules) { return _this.schedules = schedules; });
    };
    ScheduleComponent.prototype.getAllListItem = function (obj) {
        return Object.keys(obj).map(function (key) { return obj[key]; });
    };
    ScheduleComponent.prototype.search = function (term) {
        var _this = this;
        this.service.search(term).subscribe(function (result) { return _this.searchResults = result; });
        this.showResult = true;
    };
    ScheduleComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'schedule.component.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            styleUrls: ['schedule.component.css'],
            providers: [schedule_service_1.ScheduleService]
        }), 
        __metadata('design:paramtypes', [schedule_service_1.ScheduleService])
    ], ScheduleComponent);
    return ScheduleComponent;
}());
exports.ScheduleComponent = ScheduleComponent;
//# sourceMappingURL=schedule.component.js.map