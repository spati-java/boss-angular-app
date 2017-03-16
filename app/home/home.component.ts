
import {OnInit, Component} from "@angular/core";
import {WebService} from "./web-service.model";
import {Router, ROUTER_DIRECTIVES} from "@angular/router";
@Component({
    moduleId:module.id,
    templateUrl:'home.component.html',
    styleUrls:['home.component.css'],
    directives:[ROUTER_DIRECTIVES]
})
export class HomeComponent implements OnInit{
    webServices: WebService [];
    constructor(private router: Router){}

    ngOnInit() {
        this.webServices = this.getAllWebServices();

    }
    getAllWebServices(){
        return [{"id":1,name:"Schedule Web Service"},{"id":2,name:"Project Web Service"},{"id":3,name:"Line Item Web Service"},{"id":4,name:"Invoice Web Service"}];
    }
    gotoCreateLineItem(){
        this.router.navigate(['/create',1]);
    }

    onGoToWorkTracking(id) {
        this.router.navigate(['/work-tracking', id]);
    }
    onGotoLineItem(id){
        this.router.navigate(['/line-items', id]);
    }
    onGotoInvoice(id){
        this.router.navigate(['/invoice', id]);
    }
    onGotoSchedule(id){
        this.router.navigate(['/schedule', id]);
    }
    onGotoPayrollDate(id){
        this.router.navigate(['/payroll-date', id]);
    }

    onGoToBankAccount(id){
        this.router.navigate(['/bank-account', id]);
    }
    onGoToProfile(id){
        this.router.navigate(['/profile', id]);
    }
    onGoToPolicy(id){
        this.router.navigate(['/policy', id]);
    }
}