import {Component, OnInit} from "@angular/core";
import {LineItemService} from "./line-item.service";
import {LineItem} from "./line-item.model";
import {Router} from "@angular/router";
import {HighlightDirective} from "./directives/highlight.directive";
import {Menu} from "./menu.model";
import {Observable, Subject} from "rxjs/Rx";

@Component({
    moduleId: module.id,
    templateUrl: 'line-item-list.component.html',
    styleUrls: ['line-item-list.component.css'],
    directives: [HighlightDirective],
    providers: [LineItemService]
})
export class LineItemListComponent implements OnInit {
    lineItems:LineItem [];
    model = LineItem;
    menuModel = Menu;
    notes:string [];
    details: {}
    constructor(private service:LineItemService, private router:Router) {
    }

    ngOnInit() {
        this.getAllLineItems();
        this.getNotes();
    }

    getAllLineItems() {
        return this.service.getAllLineItems().subscribe(lineItems=> this.lineItems = lineItems);
    }

    getAllListItems(obj) {
        return Object.keys(obj).map((key)=> {
            return obj[key]
        })
    }

    onBack() {
        this.router.navigate(['/line-items', 1])
    }
    getNotes(){
        return this.service.getAllLineItems()
            .subscribe(dataObj => {
                    this.notes = dataObj.details.notes;
                    this.lineItems = dataObj;
                },
                (_) => {},
                () => {
                    console.log("this is what I'm looking for " + this.notes);
                });
        // this line is executed before the first `dataObject` event arrives.

    }
}