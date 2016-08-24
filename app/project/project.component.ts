import {Component, OnInit} from "@angular/core";
import {ProjectService} from "./project.service";
import {Project} from "./project.model";
@Component({
    moduleId: module.id,
    templateUrl: 'project.component.html',
    styleUrls: ['project.component.css'],
    providers: [ProjectService]
})
export class ProjectComponent implements OnInit {
    projects:Project[];
    project:Project;

    constructor(private service:ProjectService) {
    }

    ngOnInit():any {
        this.getAllProjects();
      //  this.getProjectById("579bcb2aa35f9400010b1b13");
        return undefined;
    }

    getAllProjects() {
        this.service.getAllProjects().subscribe(projects=>this.projects = projects);
    }

  /*  getProjectById(id:string) {
        this.service.getAllProjects().subscribe(project => this.projects.find(item=>item.id == '579bcb2aa35f9400010b1b13'))
    }*/

    getAllListItems(obj) {
        return Object.keys(obj).map((key)=> {
            return obj[key]
        })
    }
}