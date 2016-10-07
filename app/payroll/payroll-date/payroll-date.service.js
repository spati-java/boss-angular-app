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
var Rx_1 = require("rxjs/Rx");
var PayrollDateService = (function () {
    function PayrollDateService(http) {
        this.http = http;
        // set the header for authentication
        this.header = new http_1.Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiIyZmVhOWYwYi0zOGVhLTQ3MTItYTU4Mi0xMGYyNTE2OTA1YjgiLCJleHAiOjE0NzMwMDQ1MDcsIm5iZiI6MCwiaWF0IjoxNDcyNTcyNTA3LCJpc3MiOiJodHRwczovL3NzbzItZGV2Lm1ib3BhcnRuZXJzLmNvbS9hdXRoL3JlYWxtcy9kZXYiLCJhdWQiOiJidXNpbmVzcy1jZW50ZXItd2ViIiwic3ViIjoiNThlMjY5OWEtMDNjYi00MzQzLWIxNTItMTYyNmQxYTE5YTVmIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYnVzaW5lc3MtY2VudGVyLXdlYiIsInNlc3Npb25fc3RhdGUiOiJlY2EyMWY0OC1mMThhLTRmNDMtODYxMS1lOGQ0YjBjY2Y5NzEiLCJjbGllbnRfc2Vzc2lvbiI6IjMwZTUzMmJlLTcwZTQtNDhlYy05Nzg0LThmNWM4NWU4ZmU4OSIsImFsbG93ZWQtb3JpZ2lucyI6W10sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJiY191c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsInZpZXctcHJvZmlsZSJdfX0sIm9iamVjdF9ndWlkIjoiZWM4ZTBjMmYtNjcxZS00MmVmLWE5Y2QtYTRlMDZlNGFhNzY3IiwibmFtZSI6IkpvaG4gUGF0dGlzb24gUGF0dGlzb24iLCJlbXBsb3llZV9udW1iZXIiOiI1Njc5Y2I2YS1hZGQxLTRkNDgtODUwZS1hN2Y5NWJhMjk3NjEiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJqcGF0dGlzb25AbWJvLXRzdC5jb20iLCJnaXZlbl9uYW1lIjoiSm9obiBQYXR0aXNvbiIsImZhbWlseV9uYW1lIjoiUGF0dGlzb24iLCJlbWFpbCI6ImpvaG5AaW5mb2V0Yy5jb20ifQ.ONQMoZ3Eten2k3o6SzwWYPemdm8q0t4xS08RDU59Zux1uFCi7MC583rWB7bJ9sNxlrTVCot5QidLq61aOdMpPtcFD40aPSkuMuNUeaqAJdwkrQWnINsDPZ_RDVjg1ASWpbeYGEFQXWfmRFTiKe58IXfYe_gV9QffAxG5PwOVPUBriQRmiE5NYw7vRysV7pyDIgIPqaptkAOgq5aqZ7ljm2XJoNHX4t53zBjqdjb13eSUz-tlsUx48WcggnclVnTaKePH_iITeQPjs6Z1ZntZ8Z0MkQgymYZFIFiF7Ho10I8qMq10xNmmy2ipeQyIA7aS1oSqoCRCpiuugk1dYPWvTQ'
        });
        this.options = new http_1.RequestOptions({ headers: this.header });
    }
    PayrollDateService.prototype.createPayrollDate = function (payrollDate) {
        var body = JSON.stringify(payrollDate);
        console.log(body + "this data is sent to the server");
        return this.http.post(urls_1.INTEGRATION_BASE_URL, body, this.options).map(function (res) { return res.json(); });
    };
    // Update Payroll date
    PayrollDateService.prototype.updatePayrollDate = function (payrollDate) {
        var body = JSON.stringify(payrollDate);
        console.log(body + " this data is sent to the server");
        var url = urls_1.INTEGRATION_BASE_URL + "/" + payrollDate.id;
        return this.http.put(url, body, this.options).map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    PayrollDateService.prototype.getAllPayrollDates = function () {
        return this.http.get(urls_1.GET_ALL_URL, this.options).map(function (res) { return res.json(); });
    };
    PayrollDateService.prototype.search = function (term) {
        return this.http
            .get("http://boss-lb-dev.mbopartners.com/payroll/api/v1/payroll-dates?q=" + term, this.options)
            .map(function (res) { return res.json(); });
    };
    PayrollDateService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Rx_1.Observable.throw(errMsg);
    };
    PayrollDateService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PayrollDateService);
    return PayrollDateService;
}());
exports.PayrollDateService = PayrollDateService;
//# sourceMappingURL=payroll-date.service.js.map