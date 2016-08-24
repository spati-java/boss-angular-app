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
var PayrollDateService = (function () {
    function PayrollDateService(http) {
        this.http = http;
        // set the header for authentication
        this.header = new http_1.Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiIyODhjNjI4NS1kZTdkLTRiNGQtYTUzMS0yY2Q4NzcwMzNmMDYiLCJleHAiOjE0NzIzMDg5MzIsIm5iZiI6MCwiaWF0IjoxNDcxODc2OTMyLCJpc3MiOiJodHRwczovL3NzbzItZGV2Lm1ib3BhcnRuZXJzLmNvbS9hdXRoL3JlYWxtcy9kZXYiLCJhdWQiOiJidXNpbmVzcy1jZW50ZXItd2ViIiwic3ViIjoiNTMwYTJkNjEtZDdjZS00YzU0LTg5NmUtNzc5OWFlODBkZmU5IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYnVzaW5lc3MtY2VudGVyLXdlYiIsInNlc3Npb25fc3RhdGUiOiJmYTA1MGJhMi00MDM3LTRjMTctYTg0ZS1lZGUyYzZiMGI2MTciLCJjbGllbnRfc2Vzc2lvbiI6ImMxMWYyNzZiLWJiMzQtNGY0Ny1iZjAzLTllNjAzMTg2YTNhYyIsImFsbG93ZWQtb3JpZ2lucyI6W10sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJyZWFsbS1hZG1pbiIsImFkbWluIiwiYmNfdXNlciJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJ2aWV3LXByb2ZpbGUiXX19LCJvYmplY3RfZ3VpZCI6ImRlMWRkZWU5LTEwYjktNGNiYi1iMDRhLTc2NzdkZjIxMmQxNCIsIm5hbWUiOiJLZW55YXR0YSBDbGFyayIsImVtcGxveWVlX251bWJlciI6ImY5NzJjZjlmLTYyZGItNGY4OC1hMWUyLTg2Y2I1Nzg3MGNjMCIsInByZWZlcnJlZF91c2VybmFtZSI6ImtjbGFya0BtYm8tdHN0LmNvbSIsImdpdmVuX25hbWUiOiJLZW55YXR0YSIsImZhbWlseV9uYW1lIjoiQ2xhcmsiLCJlbWFpbCI6ImtjbGFya0BtYm9wYXJ0bmVycy5jb20uZGV2In0.HOeUOmZGNxTnXRJkNMrr4PjCQWS2JO_vnliksXjnhCpuBjXd7SCGJecDqdzedf_jfdJd0DzATtcg4y97AkuN2D1l9l1zTcpJ6hDT2MYwAjaG-9BRzDuPxwSv0nyvST4mzeObWqHrER-sOo3W6RuTR27YjEhludegthRqI_2Fq4KJnIP7YUxPqAO1jNNco0H35X3sPs4te0qK_rkAcId7MgaXKZfVBSslSHoUVTgU7FbjaPtEbIQObB3TiUDuy4TrG0x-e2Xqfdj-t6hjb86HAtJ7gms0MLu94N_Pg_cW6-kX0T-vNMNC52wMifAZ-GIpwVlwjPoFsmzAtYsdvucEPA'
        });
        this.options = new http_1.RequestOptions({ headers: this.header });
    }
    PayrollDateService.prototype.createPayrollDate = function (payrollDate) {
        var body = JSON.stringify(payrollDate);
        console.log(body + "this data is sent to the server");
        return this.http.post(urls_1.INTEGRATION_BASE_URL, body, this.options).map(function (res) { return res.json(); });
    };
    PayrollDateService.prototype.getAllPayrollDates = function () {
        return this.http.get(urls_1.GET_ALL_URL, this.options).map(function (res) { return res.json(); });
    };
    PayrollDateService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PayrollDateService);
    return PayrollDateService;
}());
exports.PayrollDateService = PayrollDateService;
//# sourceMappingURL=payroll-date.service.js.map