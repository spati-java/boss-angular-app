

import {OnInit, Component} from "@angular/core";
import {ProfileService} from "./profile.service";
import {Profile} from "./profile.model";


@Component({
    moduleId:module.id,
    templateUrl:'profile.component.html',
    styleUrls:['profile.component.css'],
    providers:[ProfileService]
})
export class ProfileComponent implements OnInit  {


    profiles:Profile[];

    // for search
    searchResults:Profile[];

    autoCompleteSearchResult:Profile[];

    searchByTtileList:Profile[];

    
    constructor(private service:ProfileService){
    }

    ngOnInit() {

        this.getAllProfile();
    }

    getAllProfile(){
         this.service.getAllProfile().subscribe(profiles => this.profiles = profiles);
    }

    search(term:string) {
        this.service.search(term).subscribe(result=>this.searchResults = result);
    }

    autoComplete(term:string) {
        this.service.autoComplete(term).subscribe(result=>this.autoCompleteSearchResult = result);
    }

    searchByTitle(term:string) {
        this.service.searchByTitle(term).subscribe(result=>this.searchByTtileList = result);
    }

}