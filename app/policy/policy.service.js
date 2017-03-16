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
var Rx_1 = require("rxjs/Rx");
var urls_1 = require("./urls");
var PolicyService = (function () {
    function PolicyService(http) {
        this.http = http;
        // set the header for authentication
        this.header = new http_1.Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiIxNmU0MTAzNi1mNzJiLTRhNGUtYTE5NS05ZTdkZTQ5NTY5MzYiLCJleHAiOjE0NzY0MTAwOTIsIm5iZiI6MCwiaWF0IjoxNDc1OTc4MDkyLCJpc3MiOiJodHRwczovL3NzbzItZGV2Lm1ib3BhcnRuZXJzLmNvbS9hdXRoL3JlYWxtcy9kZXYiLCJhdWQiOiJidXNpbmVzcy1jZW50ZXItd2ViIiwic3ViIjoiNThlMjY5OWEtMDNjYi00MzQzLWIxNTItMTYyNmQxYTE5YTVmIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYnVzaW5lc3MtY2VudGVyLXdlYiIsInNlc3Npb25fc3RhdGUiOiJmODY3ZmU4OC1jZGY4LTQzMmEtYmFkYS01MDc1NmZhNzU0ZDIiLCJjbGllbnRfc2Vzc2lvbiI6IjFmMzAyN2FlLTkyMmYtNDc2MC05NTdmLTliNjYxMWMwZWEyMCIsImFsbG93ZWQtb3JpZ2lucyI6W10sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJiY191c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsInZpZXctcHJvZmlsZSJdfX0sIm9iamVjdF9ndWlkIjoiZWM4ZTBjMmYtNjcxZS00MmVmLWE5Y2QtYTRlMDZlNGFhNzY3IiwibmFtZSI6IkpvaG5ueSBQYXR0aXNvbiIsImVtcGxveWVlX251bWJlciI6IjU2NzljYjZhLWFkZDEtNGQ0OC04NTBlLWE3Zjk1YmEyOTc2MSIsInByZWZlcnJlZF91c2VybmFtZSI6ImpwYXR0aXNvbkBtYm8tdHN0LmNvbSIsImdpdmVuX25hbWUiOiJKb2hubnkiLCJmYW1pbHlfbmFtZSI6IlBhdHRpc29uIiwiZW1haWwiOiJqb2huQGluZm9ldGMuY29tIn0.X6mtaMl3dNK806D3VrqV5WWidbTU9-7ytN0_VK3lbmRRhnXgxDbnA35LzWYfcVKwJJuqeTAATQcM61K_yWKjHIhY4pwNm9j6r5CLt32IX618D2jRdu612V_AYsouoSU1cqri4M9juBeqWw1miWRbVSsAJE14hhM6NcDlHfQM0_IomUNsPi1qno0uQ92fmx2ASyh5teKTb5iU0lXQ0fxjO3LuCVvQAG-VbOTl8vLuStTaRiKkBjN0TQSe94cYKtAKeInIG7OArJgWsm2M65Qj2w1PD2bm9G39P52zlfl6LlCSBbxPmcdjRDEfgKthZjh_f6rVzKOw8mj1mj26vlofKA'
        });
        this.options = new http_1.RequestOptions({ headers: this.header });
    }
    PolicyService.prototype.createPolicy = function (policy) {
        var body = JSON.stringify(policy);
        console.log(body + "this data is sent to the server");
        return this.http.post("http://localhost:8080/policy/create", body, this.options).map(function (res) { return res.json(); });
    };
    // Update Payroll date
    PolicyService.prototype.updatePolicy = function (payrollDate) {
        var body = JSON.stringify(payrollDate);
        console.log(body + " this data is sent to the server");
        var url = urls_1.CREATE_URL + "/" + payrollDate.id;
        return this.http.put(url, body, this.options).map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    PolicyService.prototype.search = function (term) {
        return this.http
            .get("http://boss-lb-dev.mbopartners.com/payroll/api/v1/payroll-dates?q=" + term, this.options)
            .map(function (res) { return res.json(); });
    };
    PolicyService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Rx_1.Observable.throw(errMsg);
    };
    PolicyService.prototype.getAllPolciies = function () {
        return this.http.get(urls_1.GET_ALL_URL, this.options).map(function (res) { return res.json(); });
    };
    PolicyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PolicyService);
    return PolicyService;
}());
exports.PolicyService = PolicyService;
//# sourceMappingURL=policy.service.js.map