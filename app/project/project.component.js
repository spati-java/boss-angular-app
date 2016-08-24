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
var project_service_1 = require("./project.service");
var ProjectComponent = (function () {
    function ProjectComponent(service) {
        this.service = service;
    }
    ProjectComponent.prototype.ngOnInit = function () {
        this.getAllProjects();
        //  this.getProjectById("579bcb2aa35f9400010b1b13");
        return undefined;
    };
    ProjectComponent.prototype.getAllProjects = function () {
        var _this = this;
        this.service.getAllProjects().subscribe(function (projects) { return _this.projects = projects; });
    };
    /*  getProjectById(id:string) {
          this.service.getAllProjects().subscribe(project => this.projects.find(item=>item.id == '579bcb2aa35f9400010b1b13'))
      }*/
    ProjectComponent.prototype.getAllListItems = function (obj) {
        return Object.keys(obj).map(function (key) {
            return obj[key];
        });
    };
    ProjectComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'project.component.html',
            styleUrls: ['project.component.css'],
            providers: [project_service_1.ProjectService]
        }), 
        __metadata('design:paramtypes', [project_service_1.ProjectService])
    ], ProjectComponent);
    return ProjectComponent;
}());
exports.ProjectComponent = ProjectComponent;
//# sourceMappingURL=project.component.js.map