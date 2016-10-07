import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {BASE_URL} from "./urls";
@Injectable()
export class ProfileService{

    // set the header for authentication
    header = new Headers({
        'Content-Type': 'application/json'
    });

    options = new RequestOptions({headers: this.header});


    constructor(private http:Http){
        
    }
    
    getAllProfile(){
        return this.http.get(BASE_URL).map((res:Response)=>res.json());
    }

    search(term:string) {
        return this.http
            .get(`http://localhost:8080/profile/search?query=${term}`,this.options)
            .map((res:Response)=>res.json());
    }

    autoComplete(term:string){
        return this.http
            .get(`http://localhost:8080/profile/auto-search?field=name&value=${term}`,this.options)
            .map((res:Response)=>res.json());
    }

    searchByTitle(term:string){
        return this.http
            .get(`http://localhost:8080/profile/title-search?field=title&value=${term}`,this.options)
            .map((res:Response)=>res.json());
    }
}