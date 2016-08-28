import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {ScheduleService} from "./schedule.service";
import {Schedule} from "./schedule.model";
@Component({
    moduleId:module.id,
    templateUrl:'schedule.component.html',
    directives:[ROUTER_DIRECTIVES],
    styleUrls:['schedule.component.css'],
    providers:[ScheduleService]
})
export class ScheduleComponent implements OnInit{

    schedules:Schedule[];
    searchResults :Schedule[];
    showResult =false;

    constructor(private service:ScheduleService){}
    ngOnInit():any {
        this.getAllSchedule();
        return undefined;
    }

    getAllSchedule(){
        this.service.getAllSchedule().subscribe(schedules =>this.schedules=schedules);
    }
    getAllListItem(obj){
            return Object.keys(obj).map((key)=>{return obj[key]})
    }

    search(term:string) {
        this.service.search(term).subscribe(result=>this.searchResults = result);
        this.showResult=true;
    }
}