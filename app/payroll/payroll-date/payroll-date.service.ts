import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {INTEGRATION_BASE_URL, GET_ALL_URL} from "./urls";
import {Observable} from "rxjs/Rx";
import {PayrollDate} from "./payroll-date.model";

@Injectable()
export class PayrollDateService{

    // set the header for authentication
    header = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI5ZDhiMWQ4Ni00OWJhLTQ3YzItODYwMS1mMDQyYmJkZjFhMmEiLCJleHAiOjE0NzI2MTA3ODQsIm5iZiI6MCwiaWF0IjoxNDcyMTc4Nzg0LCJpc3MiOiJodHRwczovL3NzbzItZGV2Lm1ib3BhcnRuZXJzLmNvbS9hdXRoL3JlYWxtcy9kZXYiLCJhdWQiOiJidXNpbmVzcy1jZW50ZXItd2ViIiwic3ViIjoiNThlMjY5OWEtMDNjYi00MzQzLWIxNTItMTYyNmQxYTE5YTVmIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYnVzaW5lc3MtY2VudGVyLXdlYiIsInNlc3Npb25fc3RhdGUiOiJmMzI2MmFjNS1kN2JkLTQ3MjItOGUwYS1mMzlkNzI0YmNhODkiLCJjbGllbnRfc2Vzc2lvbiI6ImRiNWZiZTdhLTYyYmItNGFhYS1hMGE2LTk4NjA4NzBkMjZkNSIsImFsbG93ZWQtb3JpZ2lucyI6W10sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJiY191c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsInZpZXctcHJvZmlsZSJdfX0sIm9iamVjdF9ndWlkIjoiZWM4ZTBjMmYtNjcxZS00MmVmLWE5Y2QtYTRlMDZlNGFhNzY3IiwibmFtZSI6IkpvaG4gUGF0dGlzb24gUGF0dGlzb24iLCJlbXBsb3llZV9udW1iZXIiOiI1Njc5Y2I2YS1hZGQxLTRkNDgtODUwZS1hN2Y5NWJhMjk3NjEiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJqcGF0dGlzb25AbWJvLXRzdC5jb20iLCJnaXZlbl9uYW1lIjoiSm9obiBQYXR0aXNvbiIsImZhbWlseV9uYW1lIjoiUGF0dGlzb24iLCJlbWFpbCI6ImpvaG5AaW5mb2V0Yy5jb20ifQ.f9P3moqt4UuiEdqK2ipAoeJa-eMnqX35LlWzPVT4iboOFFKDlmk0gJfU-ZKA5alKg32HsO2Vy2Wm9a8pAAxQUdAraghAS5SpnmGzUGaShkjSdFts6uXakMlGM8e8bsDptaBEZz-rYhxLf71SKrqJjWxieeVayR8q7KOcvQjzFPhz5T2kzrY2sy0ALAbE9P3WIJAinkwTgcKh9SCkC0lkMRVi8ooNnzrBiETYJN8VIGkJ-6f8w_dd0yywwJKrPCdGquDy-u6-oXkrz3MyVvyR5w37JUadxCYpVPolH7XZuSy-RZR6cyrKukafyEoGrEalrnJl3CO5HPRGHPd5vrUB1A'
    });

    options = new RequestOptions({headers: this.header});
    
    constructor(private http:Http){}

    createPayrollDate(payrollDate):Observable<PayrollDate>{
        let body = JSON.stringify(payrollDate);
        console.log(body + "this data is sent to the server");
        return this.http.post(INTEGRATION_BASE_URL,body,this.options).map((res:Response)=>res.json());
    }

    // Update Payroll date
    updatePayrollDate(payrollDate):Observable<PayrollDate> {

        let body = JSON.stringify(payrollDate);

        console.log(body + " this data is sent to the server");

        let url = `${INTEGRATION_BASE_URL}/${payrollDate.id}`;

        return this.http.put(url, body, this.options).map((res:Response) => res.json())
            .catch(this.handleError);
    }


    getAllPayrollDates(){
        return this.http.get(GET_ALL_URL,this.options).map((res:Response)=>res.json());
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
}

