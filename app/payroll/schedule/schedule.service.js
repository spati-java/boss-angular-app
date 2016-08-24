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
var urls_1 = require("./urls");
var ScheduleService = (function () {
    function ScheduleService(http) {
        this.http = http;
        this.baseUrl = 'http://boss-lb-dev.mbopartners.com/payroll/api/v1/schedules';
    }
    ScheduleService.prototype.getAllSchedule = function () {
        // set header information
        var headers = new http_1.Headers({
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiJiZjIzMGFkOS0zOTFjLTRkZmMtOWY5ZC0xNjNlYTRjZTBkODQiLCJleHAiOjE0NzIwNjIyODksIm5iZiI6MCwiaWF0IjoxNDcxNjMwMjg5LCJpc3MiOiJodHRwczovL3NzbzItZGV2Lm1ib3BhcnRuZXJzLmNvbS9hdXRoL3JlYWxtcy9kZXYiLCJhdWQiOiJidXNpbmVzcy1jZW50ZXItd2ViIiwic3ViIjoiNTMwYTJkNjEtZDdjZS00YzU0LTg5NmUtNzc5OWFlODBkZmU5IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYnVzaW5lc3MtY2VudGVyLXdlYiIsInNlc3Npb25fc3RhdGUiOiI1MjVlODk2NC0zMGMxLTQ2ZjAtYjg1ZC02YjNiZTMyZmNlYjIiLCJjbGllbnRfc2Vzc2lvbiI6ImUwMjRkZGQ2LTA1ZGItNDFiOC04NDQ2LTc5N2Q3NGEwZDFiMCIsImFsbG93ZWQtb3JpZ2lucyI6W10sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJyZWFsbS1hZG1pbiIsImFkbWluIiwiYmNfdXNlciJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJ2aWV3LXByb2ZpbGUiXX19LCJvYmplY3RfZ3VpZCI6ImRlMWRkZWU5LTEwYjktNGNiYi1iMDRhLTc2NzdkZjIxMmQxNCIsIm5hbWUiOiJLZW55YXR0YSBDbGFyayIsImVtcGxveWVlX251bWJlciI6ImY5NzJjZjlmLTYyZGItNGY4OC1hMWUyLTg2Y2I1Nzg3MGNjMCIsInByZWZlcnJlZF91c2VybmFtZSI6ImtjbGFya0BtYm8tdHN0LmNvbSIsImdpdmVuX25hbWUiOiJLZW55YXR0YSIsImZhbWlseV9uYW1lIjoiQ2xhcmsiLCJlbWFpbCI6ImtjbGFya0BtYm9wYXJ0bmVycy5jb20uZGV2In0.THYShP7EiQY_VcxYNF37uz1FPGBbGyQhBJ7SCthQfGbAQsiGhqLX3EhUsCi6IHrE1XdeoOL4tbzZnVLbe4oufup2sXy1Hw_6s--WDTEwNRD6mm4qJygKWJnJCL7zUKYode1b180q8ZfAD0fuO5_9uFsFgxpX8ZGvTVqTWJ0ZhcYl1zq6IWinhRzpXq3iTVZf-Zd0b7CyFWSdrdJIgbP2pLS4aaOMpc72S31xTSjqpxWZCRWAIvx2d38FRzJoI4PK_SNJXv1GuDG6zKkIcUueV_iHbR_IqSmq-8r77GyR9_gf4T-ng-cTyS51EKvxTV6KYoOKTrB9Q5q_sfTWvMjruw'
        });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(urls_1.GET_ALL_URL, options).map(function (res) { return res.json(); });
    };
    ScheduleService.prototype.search = function (term) {
        // set header information
        var headers = new http_1.Headers({
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI5NTdkYWI2Yi1iOWE1LTQ1MjYtOTdlMC0yMzJmOGY3NTcxNDYiLCJleHAiOjE0NzE3OTI2MzQsIm5iZiI6MCwiaWF0IjoxNDcxMzYwNjM0LCJpc3MiOiJodHRwczovL3NzbzItZGV2Lm1ib3BhcnRuZXJzLmNvbS9hdXRoL3JlYWxtcy9kZXYiLCJhdWQiOiJidXNpbmVzcy1jZW50ZXItd2ViIiwic3ViIjoiNThlMjY5OWEtMDNjYi00MzQzLWIxNTItMTYyNmQxYTE5YTVmIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYnVzaW5lc3MtY2VudGVyLXdlYiIsInNlc3Npb25fc3RhdGUiOiI3MDY3NDE0NC03N2Q4LTRlYWUtYjE2OC02NjEzYWRmYWRlYTgiLCJjbGllbnRfc2Vzc2lvbiI6ImFmZGY1MzZiLWY4ZDYtNGE3Zi1iMWQ1LTVkNDNiOWRhNjhiNyIsImFsbG93ZWQtb3JpZ2lucyI6W10sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJiY191c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsInZpZXctcHJvZmlsZSJdfX0sIm9iamVjdF9ndWlkIjoiZWM4ZTBjMmYtNjcxZS00MmVmLWE5Y2QtYTRlMDZlNGFhNzY3IiwibmFtZSI6IkpvaG5ueSBQYXR0aXNvbiIsImVtcGxveWVlX251bWJlciI6IjU2NzljYjZhLWFkZDEtNGQ0OC04NTBlLWE3Zjk1YmEyOTc2MSIsInByZWZlcnJlZF91c2VybmFtZSI6ImpwYXR0aXNvbkBtYm8tdHN0LmNvbSIsImdpdmVuX25hbWUiOiJKb2hubnkiLCJmYW1pbHlfbmFtZSI6IlBhdHRpc29uIiwiZW1haWwiOiJqb2huQGluZm9ldGMuY29tIn0.efb1dapsQh0xkeiaj4aKRZ5cg6KJiFToW8PZYcRDOXk-PoGD4uqogFkH0L5QN3TcZSyrDAZDexkSTfILkLvrfc2c0SwJHbrT25hWgPxReUQTMvL-fFfaWu7h0xvk6kVZ8hHmswXNr0YwE1Pif8hCXMqIo21_MhCT0ivkr3hEfCSrRx3ear1S7UhZL3zDBG4nhV9Sdg9OvJ5SF24vqfi61X_pmndfgwKhjVZi3HkIu91eWr-HENEIEWPruFDT9aLPTbfjlwutMFuK0HUjVubr602L-nQqFG3Cb3IYylmYhyNo-5JBsVHDroJPezOXOSrm6vHV_XEvplS-z2jMufLawA'
        });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http
            .get("http://boss-lb-dev.mbopartners.com/payroll/api/v1/schedules?q=" + term, options)
            .map(function (res) { return res.json(); });
    };
    ScheduleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ScheduleService);
    return ScheduleService;
}());
exports.ScheduleService = ScheduleService;
//# sourceMappingURL=schedule.service.js.map