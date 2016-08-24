import {Injectable} from '@angular/core';
import {Http, Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class BankAccountService {

    banAccountUrl = 'http://boss-lb-dev.mbopartners.com/bank-accounts/api/v1/bank-accounts';
    headers = new Headers(); // Currently empty

    constructor(private http:Http) {

    }

    getBankAccounts() {
        let headers = new Headers({
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiIxM2YxYzM4MC0xMDU3LTQxY2YtYTdlYy05MGM1ZGI5ZTdhMTgiLCJleHAiOjE0Njg3ODQ5ODEsIm5iZiI6MCwiaWF0IjoxNDY4MzUyOTgxLCJpc3MiOiJodHRwczovL3NzbzItZGV2Lm1ib3BhcnRuZXJzLmNvbS9hdXRoL3JlYWxtcy9kZXYiLCJhdWQiOiJidXNpbmVzcy1jZW50ZXItd2ViIiwic3ViIjoiNThlMjY5OWEtMDNjYi00MzQzLWIxNTItMTYyNmQxYTE5YTVmIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYnVzaW5lc3MtY2VudGVyLXdlYiIsInNlc3Npb25fc3RhdGUiOiJmOTRlN2FhMC05ZDFlLTRiOTItYjRjMi1kNzZmN2E5ZGRiNmYiLCJjbGllbnRfc2Vzc2lvbiI6IjNhYzliYTRmLTM4MjQtNGE3YS04NGZlLWViOTgwNGU0NTJhMSIsImFsbG93ZWQtb3JpZ2lucyI6W10sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJiY191c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsInZpZXctcHJvZmlsZSJdfX0sIm9iamVjdF9ndWlkIjoiZWM4ZTBjMmYtNjcxZS00MmVmLWE5Y2QtYTRlMDZlNGFhNzY3IiwibmFtZSI6IkpvaG5ueSBQYXR0aXNvbiIsImVtcGxveWVlX251bWJlciI6ImU3MDM3M2NmLTdmNTYtNDBlZi1hY2UwLWVjYWY1NmRkNWZjNCIsInByZWZlcnJlZF91c2VybmFtZSI6ImpwYXR0aXNvbkBtYm8tdHN0LmNvbSIsImdpdmVuX25hbWUiOiJKb2hubnkiLCJmYW1pbHlfbmFtZSI6IlBhdHRpc29uIiwiZW1haWwiOiJqb2huQGluZm9ldGMuY29tIn0.UGxbCS9-8VIzhlqLpGeXsToQ-8dozzdwhpDqLPy5IAlbrgFwQWGndsaYNVIgRDI8UbtLMiD6FHDdxhm7KdIJr17fO-U6OtnxmiSTPAjtp9VOgazx-NXz8FmiL0z1yyqTxJmcN2hAXdjKGgj99mzRdySFH9Zb5hD2e6Z_2UszDknKkWWktz1HdJPy_4Ov76qZfnINcFO8n4Y2TelJZmfASovEZfZIuNvrxLKhG_8GCQvoVl6A0cu8LqbVCxTiMK8GxAbLVViPOD6vj2oXN-1a4jn87so3zF_pc2lbLgMNT7NQdk1acMNIbSBBC4ImIKOwAah9lJlqYnzmqql4wXCAsQ '
        });
        let options = new RequestOptions({ headers: headers });

        return this.http.get(this.banAccountUrl,options).map((res:Response) => res.json());
    }

    /*getAccounts (){
        return [{'bankName':"Chase Bank",'id':'543534','nameOnAccount':'abc','nickName':'nick name','routingNumber':'43433','accountNumber':'9485b8745','mboId':'3543534'},{'bankName':"Chase Bank",'id':'543534','nameOnAccount':'abc','nickName':'nick name','routingNumber':'43433','accountNumber':'9485b8745','mboId':'3543534'}];
    }
*/
}
