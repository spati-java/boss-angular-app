import {Component, OnInit} from '@angular/core';
import {BankAccount} from "./bank-account.model";
import  {BankAccountService} from  './bank-account.service';


@Component({
    moduleId: module.id,
    selector: 'bank-account',
    templateUrl: 'bank-account.component.html',
    styleUrls: ['bank-account.component.css'],
    directives: [BankAccountComponent],
    providers: [BankAccountService]
})
export class BankAccountComponent implements OnInit {
    bankAccounts:BankAccount [];

    constructor(private service:BankAccountService) {
    }
    
    ngOnInit() {
        this.getBankAccounts();
    }

    getBankAccounts() {
        return this.service.getBankAccounts().subscribe(bankAccounts => this.bankAccounts = bankAccounts);
    }
}