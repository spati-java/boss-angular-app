import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
@Injectable()
export class InvoiceService {
    invoiceUrl ='http://boss-lb-dev.mbopartners.com/invoice/api/v1/invoices';
    invoiceFAkeUrl ='app/invoice/invoice-fake.json';
    constructor(private http:Http){}

    getAllInvoices(){
        let headers = new Headers({
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI5NTdkYWI2Yi1iOWE1LTQ1MjYtOTdlMC0yMzJmOGY3NTcxNDYiLCJleHAiOjE0NzE3OTI2MzQsIm5iZiI6MCwiaWF0IjoxNDcxMzYwNjM0LCJpc3MiOiJodHRwczovL3NzbzItZGV2Lm1ib3BhcnRuZXJzLmNvbS9hdXRoL3JlYWxtcy9kZXYiLCJhdWQiOiJidXNpbmVzcy1jZW50ZXItd2ViIiwic3ViIjoiNThlMjY5OWEtMDNjYi00MzQzLWIxNTItMTYyNmQxYTE5YTVmIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYnVzaW5lc3MtY2VudGVyLXdlYiIsInNlc3Npb25fc3RhdGUiOiI3MDY3NDE0NC03N2Q4LTRlYWUtYjE2OC02NjEzYWRmYWRlYTgiLCJjbGllbnRfc2Vzc2lvbiI6ImFmZGY1MzZiLWY4ZDYtNGE3Zi1iMWQ1LTVkNDNiOWRhNjhiNyIsImFsbG93ZWQtb3JpZ2lucyI6W10sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJiY191c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsInZpZXctcHJvZmlsZSJdfX0sIm9iamVjdF9ndWlkIjoiZWM4ZTBjMmYtNjcxZS00MmVmLWE5Y2QtYTRlMDZlNGFhNzY3IiwibmFtZSI6IkpvaG5ueSBQYXR0aXNvbiIsImVtcGxveWVlX251bWJlciI6IjU2NzljYjZhLWFkZDEtNGQ0OC04NTBlLWE3Zjk1YmEyOTc2MSIsInByZWZlcnJlZF91c2VybmFtZSI6ImpwYXR0aXNvbkBtYm8tdHN0LmNvbSIsImdpdmVuX25hbWUiOiJKb2hubnkiLCJmYW1pbHlfbmFtZSI6IlBhdHRpc29uIiwiZW1haWwiOiJqb2huQGluZm9ldGMuY29tIn0.efb1dapsQh0xkeiaj4aKRZ5cg6KJiFToW8PZYcRDOXk-PoGD4uqogFkH0L5QN3TcZSyrDAZDexkSTfILkLvrfc2c0SwJHbrT25hWgPxReUQTMvL-fFfaWu7h0xvk6kVZ8hHmswXNr0YwE1Pif8hCXMqIo21_MhCT0ivkr3hEfCSrRx3ear1S7UhZL3zDBG4nhV9Sdg9OvJ5SF24vqfi61X_pmndfgwKhjVZi3HkIu91eWr-HENEIEWPruFDT9aLPTbfjlwutMFuK0HUjVubr602L-nQqFG3Cb3IYylmYhyNo-5JBsVHDroJPezOXOSrm6vHV_XEvplS-z2jMufLawA'
        });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.invoiceUrl,options).map((res:Response) => res.json());
    }
    search(term:string) {
        // set header information
        let headers = new Headers({
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI5NTdkYWI2Yi1iOWE1LTQ1MjYtOTdlMC0yMzJmOGY3NTcxNDYiLCJleHAiOjE0NzE3OTI2MzQsIm5iZiI6MCwiaWF0IjoxNDcxMzYwNjM0LCJpc3MiOiJodHRwczovL3NzbzItZGV2Lm1ib3BhcnRuZXJzLmNvbS9hdXRoL3JlYWxtcy9kZXYiLCJhdWQiOiJidXNpbmVzcy1jZW50ZXItd2ViIiwic3ViIjoiNThlMjY5OWEtMDNjYi00MzQzLWIxNTItMTYyNmQxYTE5YTVmIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYnVzaW5lc3MtY2VudGVyLXdlYiIsInNlc3Npb25fc3RhdGUiOiI3MDY3NDE0NC03N2Q4LTRlYWUtYjE2OC02NjEzYWRmYWRlYTgiLCJjbGllbnRfc2Vzc2lvbiI6ImFmZGY1MzZiLWY4ZDYtNGE3Zi1iMWQ1LTVkNDNiOWRhNjhiNyIsImFsbG93ZWQtb3JpZ2lucyI6W10sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJiY191c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsInZpZXctcHJvZmlsZSJdfX0sIm9iamVjdF9ndWlkIjoiZWM4ZTBjMmYtNjcxZS00MmVmLWE5Y2QtYTRlMDZlNGFhNzY3IiwibmFtZSI6IkpvaG5ueSBQYXR0aXNvbiIsImVtcGxveWVlX251bWJlciI6IjU2NzljYjZhLWFkZDEtNGQ0OC04NTBlLWE3Zjk1YmEyOTc2MSIsInByZWZlcnJlZF91c2VybmFtZSI6ImpwYXR0aXNvbkBtYm8tdHN0LmNvbSIsImdpdmVuX25hbWUiOiJKb2hubnkiLCJmYW1pbHlfbmFtZSI6IlBhdHRpc29uIiwiZW1haWwiOiJqb2huQGluZm9ldGMuY29tIn0.efb1dapsQh0xkeiaj4aKRZ5cg6KJiFToW8PZYcRDOXk-PoGD4uqogFkH0L5QN3TcZSyrDAZDexkSTfILkLvrfc2c0SwJHbrT25hWgPxReUQTMvL-fFfaWu7h0xvk6kVZ8hHmswXNr0YwE1Pif8hCXMqIo21_MhCT0ivkr3hEfCSrRx3ear1S7UhZL3zDBG4nhV9Sdg9OvJ5SF24vqfi61X_pmndfgwKhjVZi3HkIu91eWr-HENEIEWPruFDT9aLPTbfjlwutMFuK0HUjVubr602L-nQqFG3Cb3IYylmYhyNo-5JBsVHDroJPezOXOSrm6vHV_XEvplS-z2jMufLawA'
        });
        let options = new RequestOptions({headers: headers});

        return this.http
            .get(`http://boss-lb-dev.mbopartners.com/invoice/api/v1/invoices?q=${term}`,options)
            .map((res:Response)=>res.json());
    }
}