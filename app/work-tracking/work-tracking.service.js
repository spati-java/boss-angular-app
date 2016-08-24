"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require('rxjs/add/operator/toPromise');
var WorkTrackingService = (function () {
    function WorkTrackingService(http) {
        this.http = http;
        this.heroesUrl = 'app/work-tracking/workTracking.json';
    }
    /*getWorkTracking(id: number) {
        return this.getAllLineItems()
            .map(heroes => heroes.find(hero => hero.id === id));
    }*/
    // GET All invoice line items
    WorkTrackingService.prototype.getAllWorkTracking = function () {
        var headers = new http_1.Headers({
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiJjYjY0MDE2ZC03M2E5LTQyZDgtODkzYi0yZjZmMzg1ZDZkNGIiLCJleHAiOjE0Njk4MTI5MTMsIm5iZiI6MCwiaWF0IjoxNDY5MzgwOTEzLCJpc3MiOiJodHRwczovL3NzbzItZGV2Lm1ib3BhcnRuZXJzLmNvbS9hdXRoL3JlYWxtcy9kZXYiLCJhdWQiOiJidXNpbmVzcy1jZW50ZXItd2ViIiwic3ViIjoiNThlMjY5OWEtMDNjYi00MzQzLWIxNTItMTYyNmQxYTE5YTVmIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYnVzaW5lc3MtY2VudGVyLXdlYiIsInNlc3Npb25fc3RhdGUiOiJlN2E4NjdhMi0xODg2LTRhNzgtOTUwMS0xYjExYTg5ZTdhMjEiLCJjbGllbnRfc2Vzc2lvbiI6IjdjMTcxNGJiLTIyYTEtNDRkNC05NGQ0LWY4ZmZjMDI4YThkZiIsImFsbG93ZWQtb3JpZ2lucyI6W10sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJiY191c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsInZpZXctcHJvZmlsZSJdfX0sIm9iamVjdF9ndWlkIjoiZWM4ZTBjMmYtNjcxZS00MmVmLWE5Y2QtYTRlMDZlNGFhNzY3IiwibmFtZSI6IkpvaG5ueSBQYXR0aXNvbiIsImVtcGxveWVlX251bWJlciI6ImU3MDM3M2NmLTdmNTYtNDBlZi1hY2UwLWVjYWY1NmRkNWZjNCIsInByZWZlcnJlZF91c2VybmFtZSI6ImpwYXR0aXNvbkBtYm8tdHN0LmNvbSIsImdpdmVuX25hbWUiOiJKb2hubnkiLCJmYW1pbHlfbmFtZSI6IlBhdHRpc29uIiwiZW1haWwiOiJqb2huQGluZm9ldGMuY29tIn0.j-MNOtAR3JB1Zwhla-K_lKEiDpYCaiZnLTutemGczi1gE66VsL56JhPbs0DOV1_NriiNFoB9dDmEBNDwvphxoG275z-i91Dty89Q645fFeihVxRupjT9FCcDMYiU9SbK6LC1OThnsUDT4f-CR_84q-MxLvQaWW_e-pxzAxVfAh-Bc-lA8lVPkD9TLdUXCkhMPFBfxANRz8ORGASpDI6MPNk-dP6LhNFYKYGCIcujpdviu30VKxxuNttfAPk6HTydmhdFSRj-WJ0bTxQb08beE_fWQU1F5zx61DYrH_KE7MFVXO2bescOAjcmKCnisnRPaoR9b5yyFk29rMnqdqklEg'
        });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.heroesUrl, options).map(function (res) { return res.json(); });
    };
    WorkTrackingService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], WorkTrackingService);
    return WorkTrackingService;
}());
exports.WorkTrackingService = WorkTrackingService;
//# sourceMappingURL=work-tracking.service.js.map