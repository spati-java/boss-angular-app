import {Component, OnInit} from '@angular/core';
import {Navbar} from './navbar.model';
import  {NavbarService} from  './navbar.service';

@Component({
    moduleId: module.id,
    selector: 'toh-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css'],
    providers: [NavbarService],
    

})
export class NavbarComponent implements OnInit {
    menus:Navbar[];
    selectedNavbar:Navbar;

    constructor(private navbarService:NavbarService) {
    }

    ngOnInit() {
        this.getMenus();
    }

    getMenus() {
        return this.navbarService.getMenues().subscribe(menus =>this.menus = menus);
    }

    onSelect(hero:Navbar) {
        this.selectedNavbar = hero;
    }
}
