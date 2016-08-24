import  {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';

@Injectable()
export  class NavbarService {
    constructor (private http: Http) {
        
    }

    getMenues () {
        return this.http.get('app/navbar/menu.json').map((res:Response) => res.json());
    }
}