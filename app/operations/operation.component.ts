
import {OnInit, Component} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router";
import {LineItemFormComponent} from "../invoice/line-item-form.component";

@Component({
    moduleId:module.id,
    templateUrl:'operation.component.html',
    styleUrls:['operation.component.css'],
    directives:[LineItemFormComponent,ROUTER_DIRECTIVES]
})

export class OperationComponent implements OnInit {
    show =false;
    constructor(private router:Router) {
    }

    ngOnInit() {
        this.show =false;
    }

    onCreate(id) {
        this.router.navigate(['/line-items', id]);
    }

    onFindAll(id) {
        this.router.navigate(['/find-all', id]);
    }
    onFindAllInvoice(id) {
        this.router.navigate(['/find-all-invoice', id]);
    }
    onFindAllProject(id) {
        this.router.navigate(['/find-all-project', id]);
    }

    onShow(){
     this.show=true;
    }
}