import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {INTEGRATION_BASE_URL, GET_ALL_URL} from "./urls";
import {Observable} from "rxjs/Rx";
import {PayrollDate} from "./payroll-date.model";

@Injectable()
export class     PayrollDateService{

    // set the header for authentication
    header = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiIyZmVhOWYwYi0zOGVhLTQ3MTItYTU4Mi0xMGYyNTE2OTA1YjgiLCJleHAiOjE0NzMwMDQ1MDcsIm5iZiI6MCwiaWF0IjoxNDcyNTcyNTA3LCJpc3MiOiJodHRwczovL3NzbzItZGV2Lm1ib3BhcnRuZXJzLmNvbS9hdXRoL3JlYWxtcy9kZXYiLCJhdWQiOiJidXNpbmVzcy1jZW50ZXItd2ViIiwic3ViIjoiNThlMjY5OWEtMDNjYi00MzQzLWIxNTItMTYyNmQxYTE5YTVmIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYnVzaW5lc3MtY2VudGVyLXdlYiIsInNlc3Npb25fc3RhdGUiOiJlY2EyMWY0OC1mMThhLTRmNDMtODYxMS1lOGQ0YjBjY2Y5NzEiLCJjbGllbnRfc2Vzc2lvbiI6IjMwZTUzMmJlLTcwZTQtNDhlYy05Nzg0LThmNWM4NWU4ZmU4OSIsImFsbG93ZWQtb3JpZ2lucyI6W10sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJiY191c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsInZpZXctcHJvZmlsZSJdfX0sIm9iamVjdF9ndWlkIjoiZWM4ZTBjMmYtNjcxZS00MmVmLWE5Y2QtYTRlMDZlNGFhNzY3IiwibmFtZSI6IkpvaG4gUGF0dGlzb24gUGF0dGlzb24iLCJlbXBsb3llZV9udW1iZXIiOiI1Njc5Y2I2YS1hZGQxLTRkNDgtODUwZS1hN2Y5NWJhMjk3NjEiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJqcGF0dGlzb25AbWJvLXRzdC5jb20iLCJnaXZlbl9uYW1lIjoiSm9obiBQYXR0aXNvbiIsImZhbWlseV9uYW1lIjoiUGF0dGlzb24iLCJlbWFpbCI6ImpvaG5AaW5mb2V0Yy5jb20ifQ.ONQMoZ3Eten2k3o6SzwWYPemdm8q0t4xS08RDU59Zux1uFCi7MC583rWB7bJ9sNxlrTVCot5QidLq61aOdMpPtcFD40aPSkuMuNUeaqAJdwkrQWnINsDPZ_RDVjg1ASWpbeYGEFQXWfmRFTiKe58IXfYe_gV9QffAxG5PwOVPUBriQRmiE5NYw7vRysV7pyDIgIPqaptkAOgq5aqZ7ljm2XJoNHX4t53zBjqdjb13eSUz-tlsUx48WcggnclVnTaKePH_iITeQPjs6Z1ZntZ8Z0MkQgymYZFIFiF7Ho10I8qMq10xNmmy2ipeQyIA7aS1oSqoCRCpiuugk1dYPWvTQ'
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

