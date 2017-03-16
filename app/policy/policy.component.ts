

import {OnInit, Component} from "@angular/core";

import {Policy} from "./policy.model";
import {PolicyService} from "./policy.service";


@Component({
    moduleId:module.id,
    templateUrl:'policy.component.html',
    styleUrls:['policy.component.css'],
    providers:[PolicyService]
})
export class PolicyComponent implements OnInit  {

    savedData:Policy;
    model = new Policy('','',0,'','');
    policies:Policy[];

    constructor(private service:PolicyService){
    }

    ngOnInit() {

        this.getAllPolicies();
    }

    getAllPolicies(){
        this.service.getAllPolciies().subscribe(policies => this.policies = policies);
    }
    save() {
        this.service.createPolicy(this.model).subscribe(data=>this.savedData = data);
    }


}