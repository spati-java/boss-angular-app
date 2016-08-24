import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router";
import {WorkTracking} from "./work-tracking.model";

@Component({
    moduleId:module.id,
    templateUrl:'work-tracking.component.html',
    styleUrls:['work-tracking.component.css'],
    directives:[ROUTER_DIRECTIVES]

})
export class WorkTrackingCpmponent implements OnInit{
   
    constructor(private router:Router){}
    model = new WorkTracking(1,
        'WorkTracking',
        'mboId3243');

    ngOnInit():any {
        return undefined;
    }
    show = false ;

    onShow(){
        this.show=true;
    }
    onHide(){
        this.show =false;
    }
    onGoToDisplayWorkTracking(id) {
        this.router.navigate(['/display-work-tracking', id]);
    }

    addWorkTracking(){

        console.log(this.model.mboId + " sending data to the work tarcking");
    }
    
    findOne(){
        this.router.navigate(['/display-work-tracking', 1]);
    }

}