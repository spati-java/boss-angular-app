import {Component, OnInit, Input} from '@angular/core';
import {LineItem} from './line-item.model';
import {LineItemService} from './line-item.service';
import {ControlGroup} from "@angular/common";
import {Router} from "@angular/router";
import {HighlightDirective} from "./directives/highlight.directive";


@Component({
    moduleId: module.id,
    selector: 'app-invoice-line-item',
    templateUrl: 'line-item-form.component.html',
    styleUrls: ['line-item-form.component.css'],
    providers: [LineItemService]

})
export class LineItemFormComponent implements OnInit {
    isUpdate = false;

    lineItem:LineItem;

    myForm = ControlGroup;

    mode = 'Observable';

    types = ['EXPENSE', 'WORK'];

    found = false;

    model = new LineItem(
        'invoiceId1243',
        '2016-01-01',
        '2016-12-31',
        this.types[0],
        'Not required to type anymore',
        '2',
        '45/hrs',
        563.43,
        'true');

    lineItemResult = new LineItem(
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        0,
        '');

    // for search
    searchResults:LineItem[];

    showTable =false;

    constructor(private service:LineItemService, private router:Router) {
    }

    ngOnInit() {
    }

    createLineItem() {
        this.service.createLineItem(
            this.model)
            .subscribe(lineItemResult =>this.lineItemResult = lineItemResult);
        
    }

    updateLineItem() {
        this.service.updateLineItem(
            this.model)
            .subscribe(lineItem => this.lineItem = lineItem);
    }

    onUpdate() {
        this.isUpdate = true;
    }

    hideIdField() {
        this.isUpdate = false;
    }

    delete() {
        this.service.delete(this.model.id).subscribe(model =>this.model = model);
    }

    getMenuModelById() {
        this.service.findOneLienItem(this.model.id).subscribe(lineItemResult =>this.lineItemResult = lineItemResult);
        this.showTable =true;
    }

    findAll() {
        this.router.navigate(['/find-all', 3]);
    }

    search(term:string) {
        this.service.search(term).subscribe(result=>this.searchResults = result)
        this.showTable =true;
    }
}
