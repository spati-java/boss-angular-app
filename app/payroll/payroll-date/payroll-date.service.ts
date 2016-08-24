import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {INTEGRATION_BASE_URL, GET_ALL_URL} from "./urls";

@Injectable()
export class PayrollDateService{
    
    // set the header for authentication
    header = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiIyODhjNjI4NS1kZTdkLTRiNGQtYTUzMS0yY2Q4NzcwMzNmMDYiLCJleHAiOjE0NzIzMDg5MzIsIm5iZiI6MCwiaWF0IjoxNDcxODc2OTMyLCJpc3MiOiJodHRwczovL3NzbzItZGV2Lm1ib3BhcnRuZXJzLmNvbS9hdXRoL3JlYWxtcy9kZXYiLCJhdWQiOiJidXNpbmVzcy1jZW50ZXItd2ViIiwic3ViIjoiNTMwYTJkNjEtZDdjZS00YzU0LTg5NmUtNzc5OWFlODBkZmU5IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYnVzaW5lc3MtY2VudGVyLXdlYiIsInNlc3Npb25fc3RhdGUiOiJmYTA1MGJhMi00MDM3LTRjMTctYTg0ZS1lZGUyYzZiMGI2MTciLCJjbGllbnRfc2Vzc2lvbiI6ImMxMWYyNzZiLWJiMzQtNGY0Ny1iZjAzLTllNjAzMTg2YTNhYyIsImFsbG93ZWQtb3JpZ2lucyI6W10sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJyZWFsbS1hZG1pbiIsImFkbWluIiwiYmNfdXNlciJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJ2aWV3LXByb2ZpbGUiXX19LCJvYmplY3RfZ3VpZCI6ImRlMWRkZWU5LTEwYjktNGNiYi1iMDRhLTc2NzdkZjIxMmQxNCIsIm5hbWUiOiJLZW55YXR0YSBDbGFyayIsImVtcGxveWVlX251bWJlciI6ImY5NzJjZjlmLTYyZGItNGY4OC1hMWUyLTg2Y2I1Nzg3MGNjMCIsInByZWZlcnJlZF91c2VybmFtZSI6ImtjbGFya0BtYm8tdHN0LmNvbSIsImdpdmVuX25hbWUiOiJLZW55YXR0YSIsImZhbWlseV9uYW1lIjoiQ2xhcmsiLCJlbWFpbCI6ImtjbGFya0BtYm9wYXJ0bmVycy5jb20uZGV2In0.HOeUOmZGNxTnXRJkNMrr4PjCQWS2JO_vnliksXjnhCpuBjXd7SCGJecDqdzedf_jfdJd0DzATtcg4y97AkuN2D1l9l1zTcpJ6hDT2MYwAjaG-9BRzDuPxwSv0nyvST4mzeObWqHrER-sOo3W6RuTR27YjEhludegthRqI_2Fq4KJnIP7YUxPqAO1jNNco0H35X3sPs4te0qK_rkAcId7MgaXKZfVBSslSHoUVTgU7FbjaPtEbIQObB3TiUDuy4TrG0x-e2Xqfdj-t6hjb86HAtJ7gms0MLu94N_Pg_cW6-kX0T-vNMNC52wMifAZ-GIpwVlwjPoFsmzAtYsdvucEPA'
    });

    options = new RequestOptions({headers: this.header});
    
    constructor(private http:Http){}

    createPayrollDate(payrollDate){
        let body = JSON.stringify(payrollDate);
        console.log(body + "this data is sent to the server");
        return this.http.post(INTEGRATION_BASE_URL,body,this.options).map((res:Response)=>res.json());
    }
    getAllPayrollDates(){
        return this.http.get(GET_ALL_URL,this.options).map((res:Response)=>res.json());
    }
}

