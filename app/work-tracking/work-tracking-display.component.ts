import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {WorkTracking} from "./work-tracking.model";
import {WorkTrackingService} from "./work-tracking.service";
import {error} from "util";
@Component({
    moduleId:module.id,
    templateUrl:'work-tracking-display.component.html',
    styleUrls:['work-tracking-display-component.css'],
    providers:[WorkTrackingService]
})
export class WorkTrackingDisplay implements OnInit{

    errorMessage:string;

    constructor(private service:WorkTrackingService, private router:Router){}

    workTracking:WorkTracking;
    workTrackings: WorkTracking[];

    found = false;
    ngOnInit() {
       /* this.service.getWorkTracking(1)
            .subscribe(hero => this.workTracking = hero);
        console.log(this.workTracking +" work tracking is not defiled")*/

        this.findAll();

    }

    findAll(){
        return this.service.getAllWorkTracking().subscribe(workTrackings=> this.workTrackings = workTrackings,error =>this.errorMessage = <any>error);
    }
    onBack(){
        this.router.navigate(['/work-tracking',3]);
    }
}