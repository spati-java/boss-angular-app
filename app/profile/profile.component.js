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
var profile_service_1 = require("./profile.service");
var ProfileComponent = (function () {
    function ProfileComponent(service) {
        this.service = service;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.getAllProfile();
    };
    ProfileComponent.prototype.getAllProfile = function () {
        var _this = this;
        this.service.getAllProfile().subscribe(function (profiles) { return _this.profiles = profiles; });
    };
    ProfileComponent.prototype.search = function (term) {
        var _this = this;
        this.service.search(term).subscribe(function (result) { return _this.searchResults = result; });
    };
    ProfileComponent.prototype.autoComplete = function (term) {
        var _this = this;
        this.service.autoComplete(term).subscribe(function (result) { return _this.autoCompleteSearchResult = result; });
    };
    ProfileComponent.prototype.searchByTitle = function (term) {
        var _this = this;
        this.service.searchByTitle(term).subscribe(function (result) { return _this.searchByTtileList = result; });
    };
    ProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'profile.component.html',
            styleUrls: ['profile.component.css'],
            providers: [profile_service_1.ProfileService]
        }), 
        __metadata('design:paramtypes', [profile_service_1.ProfileService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map