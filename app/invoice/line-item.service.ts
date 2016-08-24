import  {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable}     from 'rxjs/Observable';
import {LineItem} from './line-item.model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {Menu} from "./menu.model";

@Injectable()
export class LineItemService {

    invoiceLineIntegrationItemUrl = 'http://boss-lb-dev.mbopartners.com/invoice/api/v1/integration/line-items';
    invoiceLineItemUrl = 'http://boss-lb-dev.mbopartners.com/invoice/api/v1/line-items';

    searchUrl = 'http://localhost:8080/search?q';

    lineItems:LineItem [];

    // set the header for authentication
    header = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiJiZThjMjA5NC1kM2YzLTQyNzktYmQ1ZC1lYzJlNTkxM2UzYzQiLCJleHAiOjE0NzIxNjM3MDQsIm5iZiI6MCwiaWF0IjoxNDcxNzMxNzA0LCJpc3MiOiJodHRwczovL3NzbzItZGV2Lm1ib3BhcnRuZXJzLmNvbS9hdXRoL3JlYWxtcy9kZXYiLCJhdWQiOiJidXNpbmVzcy1jZW50ZXItd2ViIiwic3ViIjoiNTMwYTJkNjEtZDdjZS00YzU0LTg5NmUtNzc5OWFlODBkZmU5IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYnVzaW5lc3MtY2VudGVyLXdlYiIsInNlc3Npb25fc3RhdGUiOiJkNGIxODQyMC1iMzEwLTRjZTMtOTU5Yy1kY2Q3YWUxZmIxZDEiLCJjbGllbnRfc2Vzc2lvbiI6IjdkMDM4YThhLTlkNzktNGNjMy1iMDgxLWE0NDgwNzhlNGRmYyIsImFsbG93ZWQtb3JpZ2lucyI6W10sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJyZWFsbS1hZG1pbiIsImFkbWluIiwiYmNfdXNlciJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJ2aWV3LXByb2ZpbGUiXX19LCJvYmplY3RfZ3VpZCI6ImRlMWRkZWU5LTEwYjktNGNiYi1iMDRhLTc2NzdkZjIxMmQxNCIsIm5hbWUiOiJLZW55YXR0YSBDbGFyayIsImVtcGxveWVlX251bWJlciI6ImY5NzJjZjlmLTYyZGItNGY4OC1hMWUyLTg2Y2I1Nzg3MGNjMCIsInByZWZlcnJlZF91c2VybmFtZSI6ImtjbGFya0BtYm8tdHN0LmNvbSIsImdpdmVuX25hbWUiOiJLZW55YXR0YSIsImZhbWlseV9uYW1lIjoiQ2xhcmsiLCJlbWFpbCI6ImtjbGFya0BtYm9wYXJ0bmVycy5jb20uZGV2In0.BOiU5J3hR728c3kghzZUTRcTU7xrQEFn8rsmdemkmzPyU94RqeWWIyHHiG7J_YfvtmsChIOltCi0EKMGMZ__lUGGLCTLw0v0tXsZYRVN1NhyLMtcuKKVBB-6yg4p5HtxsAUHszWz3exTUomeJQAF9zNu73unMOhgSoLl5g3YFu2Q-LrI0VZ5bWbd9k8hWFgv4olwI2AglluShCdSN6cmoGWnCbhnmZDtOQWIXoMuFz7fmhUJCg4pbifXwzTo7Jc59_3UYrRw2q4M8oU7C6nWK5AfmDicEzjynQVEGVvOWMt0myh8RdPzIr-py-O93A8NA25ptL8nfWkVhxLEyOXSTQ'
    });

    options = new RequestOptions({headers: this.header});

    constructor(private http:Http) {
    }

    // POST for invoice line items
    createLineItem(lineItem):Observable<LineItem> {
        let body = JSON.stringify(lineItem);
        return this.http.post(this.invoiceLineIntegrationItemUrl, body, this.options)
            .map((res:Response) => res.json())
            .catch(this.handleError);
    }

    // Update existing Line Item
    updateLineItem(lineItem):Observable<LineItem> {
        let body = JSON.stringify(lineItem);
        console.log(body + " this data is sent to the server");

        let url = `${this.invoiceLineIntegrationItemUrl}/${lineItem.id}`;

        return this.http.put(url, body, this.options).map((res:Response) => res.json())
            .catch(this.handleError);
    }

    // GET All invoice line items
    getAllLineItems() {
        return this.http.get(this.invoiceLineItemUrl, this.options).map((res:Response) => res.json());
    }

    getLineItem(id):Observable<LineItem[]> {

        let url = `${this.invoiceLineItemUrl}/${id}`;
        return this.http.get(url, this.options).map((res:Response) => res.json());
    }

    getByID(id:number) {
        return this.getAllLineItems().map(lineItems =>this.lineItems.filter(lineItem=>lineItem.id === id) [0]);
    }


    private extractData(res:Response) {
        let body = res.json();
        return body.data || {};

    }

    private handleError(error:any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    delte(id:number) {

        let url = `${this.invoiceLineItemUrl}/${id}`;

        this.http.delete(url, this.options);
    }

    findOneLienItem(id:number) {
        //  create the url with the id
        let url = `${this.invoiceLineItemUrl}/${id}`;
        console.log(url);
        return this.http.get(url,this.options).map((res:Response)=>res.json());
    }

    delete(id:number) {
        //  create the url with the id
        let url = `${this.invoiceLineIntegrationItemUrl}/${id}`;
        console.log(url);
        return this.http.delete(url, this.options).map((res:Response)=>res.json());
    }

    search(term:string) {
        return this.http
            .get(`http://boss-lb-dev.mbopartners.com/invoice/api/v1/line-items?q=${term}`,this.options)
            .map((res:Response)=>res.json());
    }
}