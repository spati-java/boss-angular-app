import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WorkTrackingService {
    heroesUrl ='app/work-tracking/workTracking.json'

    constructor(private http:Http){

    }

    /*getWorkTracking(id: number) {
        return this.getAllLineItems()
            .map(heroes => heroes.find(hero => hero.id === id));
    }*/
    // GET All invoice line items
    getAllWorkTracking() {

        let headers = new Headers({
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiJjYjY0MDE2ZC03M2E5LTQyZDgtODkzYi0yZjZmMzg1ZDZkNGIiLCJleHAiOjE0Njk4MTI5MTMsIm5iZiI6MCwiaWF0IjoxNDY5MzgwOTEzLCJpc3MiOiJodHRwczovL3NzbzItZGV2Lm1ib3BhcnRuZXJzLmNvbS9hdXRoL3JlYWxtcy9kZXYiLCJhdWQiOiJidXNpbmVzcy1jZW50ZXItd2ViIiwic3ViIjoiNThlMjY5OWEtMDNjYi00MzQzLWIxNTItMTYyNmQxYTE5YTVmIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYnVzaW5lc3MtY2VudGVyLXdlYiIsInNlc3Npb25fc3RhdGUiOiJlN2E4NjdhMi0xODg2LTRhNzgtOTUwMS0xYjExYTg5ZTdhMjEiLCJjbGllbnRfc2Vzc2lvbiI6IjdjMTcxNGJiLTIyYTEtNDRkNC05NGQ0LWY4ZmZjMDI4YThkZiIsImFsbG93ZWQtb3JpZ2lucyI6W10sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJiY191c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsInZpZXctcHJvZmlsZSJdfX0sIm9iamVjdF9ndWlkIjoiZWM4ZTBjMmYtNjcxZS00MmVmLWE5Y2QtYTRlMDZlNGFhNzY3IiwibmFtZSI6IkpvaG5ueSBQYXR0aXNvbiIsImVtcGxveWVlX251bWJlciI6ImU3MDM3M2NmLTdmNTYtNDBlZi1hY2UwLWVjYWY1NmRkNWZjNCIsInByZWZlcnJlZF91c2VybmFtZSI6ImpwYXR0aXNvbkBtYm8tdHN0LmNvbSIsImdpdmVuX25hbWUiOiJKb2hubnkiLCJmYW1pbHlfbmFtZSI6IlBhdHRpc29uIiwiZW1haWwiOiJqb2huQGluZm9ldGMuY29tIn0.j-MNOtAR3JB1Zwhla-K_lKEiDpYCaiZnLTutemGczi1gE66VsL56JhPbs0DOV1_NriiNFoB9dDmEBNDwvphxoG275z-i91Dty89Q645fFeihVxRupjT9FCcDMYiU9SbK6LC1OThnsUDT4f-CR_84q-MxLvQaWW_e-pxzAxVfAh-Bc-lA8lVPkD9TLdUXCkhMPFBfxANRz8ORGASpDI6MPNk-dP6LhNFYKYGCIcujpdviu30VKxxuNttfAPk6HTydmhdFSRj-WJ0bTxQb08beE_fWQU1F5zx61DYrH_KE7MFVXO2bescOAjcmKCnisnRPaoR9b5yyFk29rMnqdqklEg'
        });
        let options = new RequestOptions({headers: headers});

        return this.http.get(this.heroesUrl, options).map((res:Response) => res.json());
    }

}