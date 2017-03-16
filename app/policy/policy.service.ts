import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";

import {Observable} from "rxjs/Rx";

import {Policy} from "./policy.model";
import {CREATE_URL,GET_ALL_URL} from "./urls";


@Injectable()
export class PolicyService{

    // set the header for authentication
    header = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiIxNmU0MTAzNi1mNzJiLTRhNGUtYTE5NS05ZTdkZTQ5NTY5MzYiLCJleHAiOjE0NzY0MTAwOTIsIm5iZiI6MCwiaWF0IjoxNDc1OTc4MDkyLCJpc3MiOiJodHRwczovL3NzbzItZGV2Lm1ib3BhcnRuZXJzLmNvbS9hdXRoL3JlYWxtcy9kZXYiLCJhdWQiOiJidXNpbmVzcy1jZW50ZXItd2ViIiwic3ViIjoiNThlMjY5OWEtMDNjYi00MzQzLWIxNTItMTYyNmQxYTE5YTVmIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYnVzaW5lc3MtY2VudGVyLXdlYiIsInNlc3Npb25fc3RhdGUiOiJmODY3ZmU4OC1jZGY4LTQzMmEtYmFkYS01MDc1NmZhNzU0ZDIiLCJjbGllbnRfc2Vzc2lvbiI6IjFmMzAyN2FlLTkyMmYtNDc2MC05NTdmLTliNjYxMWMwZWEyMCIsImFsbG93ZWQtb3JpZ2lucyI6W10sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJiY191c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsInZpZXctcHJvZmlsZSJdfX0sIm9iamVjdF9ndWlkIjoiZWM4ZTBjMmYtNjcxZS00MmVmLWE5Y2QtYTRlMDZlNGFhNzY3IiwibmFtZSI6IkpvaG5ueSBQYXR0aXNvbiIsImVtcGxveWVlX251bWJlciI6IjU2NzljYjZhLWFkZDEtNGQ0OC04NTBlLWE3Zjk1YmEyOTc2MSIsInByZWZlcnJlZF91c2VybmFtZSI6ImpwYXR0aXNvbkBtYm8tdHN0LmNvbSIsImdpdmVuX25hbWUiOiJKb2hubnkiLCJmYW1pbHlfbmFtZSI6IlBhdHRpc29uIiwiZW1haWwiOiJqb2huQGluZm9ldGMuY29tIn0.X6mtaMl3dNK806D3VrqV5WWidbTU9-7ytN0_VK3lbmRRhnXgxDbnA35LzWYfcVKwJJuqeTAATQcM61K_yWKjHIhY4pwNm9j6r5CLt32IX618D2jRdu612V_AYsouoSU1cqri4M9juBeqWw1miWRbVSsAJE14hhM6NcDlHfQM0_IomUNsPi1qno0uQ92fmx2ASyh5teKTb5iU0lXQ0fxjO3LuCVvQAG-VbOTl8vLuStTaRiKkBjN0TQSe94cYKtAKeInIG7OArJgWsm2M65Qj2w1PD2bm9G39P52zlfl6LlCSBbxPmcdjRDEfgKthZjh_f6rVzKOw8mj1mj26vlofKA'
    });

    options = new RequestOptions({headers: this.header});

    constructor(private http:Http){}

    createPolicy(policy):Observable<Policy>{
        let body = JSON.stringify(policy);
        console.log(body + "this data is sent to the server");
        return this.http.post("http://localhost:8080/policy/create",body,this.options).map((res:Response)=>res.json());
    }

    // Update Payroll date
    updatePolicy(payrollDate):Observable<Policy> {

        let body = JSON.stringify(payrollDate);

        console.log(body + " this data is sent to the server");

        let url = `${CREATE_URL}/${payrollDate.id}`;

        return this.http.put(url, body, this.options).map((res:Response) => res.json())
            .catch(this.handleError);
    }


    search(term:string) {
        return this.http
            .get(`http://boss-lb-dev.mbopartners.com/payroll/api/v1/payroll-dates?q=${term}`,this.options)
            .map((res:Response)=>res.json());
    }

    private handleError(error:any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    getAllPolciies(){
        return this.http.get(GET_ALL_URL,this.options).map((res:Response)=>res.json());
    }
}

