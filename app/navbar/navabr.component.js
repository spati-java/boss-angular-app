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
var navbar_service_1 = require('./navbar.service');
var NavbarComponent = (function () {
    function NavbarComponent(navbarService) {
        this.navbarService = navbarService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.getMenus();
    };
    NavbarComponent.prototype.getMenus = function () {
        var _this = this;
        return this.navbarService.getMenues().subscribe(function (menus) { return _this.menus = menus; });
    };
    NavbarComponent.prototype.onSelect = function (hero) {
        this.selectedNavbar = hero;
    };
    NavbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'toh-navbar',
            templateUrl: 'navbar.component.html',
            styleUrls: ['navbar.component.css'],
            providers: [navbar_service_1.NavbarService],
        }), 
        __metadata('design:paramtypes', [navbar_service_1.NavbarService])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navabr.component.js.map