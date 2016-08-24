import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router";
import {InvoiceService} from "./invoice.service";
import {Invoice} from "./invoice.model";
import {LineItem} from "../line-item.model";
@Component({
    moduleId: module.id,
    templateUrl: 'invoice.component.html',
    styleUrls:['invoice.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [InvoiceService]

})
export class InvoiceComponent implements OnInit {

    invoices:Invoice [];
    lineItems:LineItem [];
    searchResults:Invoice[];

    constructor(private service:InvoiceService, private router:Router) {
    }

    ngOnInit():any {
        console.log("invoice component loaded");
        this.getAllInvoices();
        return undefined;
    }

    getAllInvoices() {
        return this.service.getAllInvoices().subscribe(invoices => this.invoices = invoices);
    }

    getAllListItems(obj) {
        return Object.keys(obj).map((key)=> {
            return obj[key]
        })
    }

    search(term:string) {
        this.service.search(term).subscribe(result=>this.searchResults = result)
    }
}