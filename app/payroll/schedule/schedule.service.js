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
    }
    ScheduleService.prototype.getAllSchedule = function () {
        // set header information
        var headers = new http_1.Headers({
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiIyZmVhOWYwYi0zOGVhLTQ3MTItYTU4Mi0xMGYyNTE2OTA1YjgiLCJleHAiOjE0NzMwMDQ1MDcsIm5iZiI6MCwiaWF0IjoxNDcyNTcyNTA3LCJpc3MiOiJodHRwczovL3NzbzItZGV2Lm1ib3BhcnRuZXJzLmNvbS9hdXRoL3JlYWxtcy9kZXYiLCJhdWQiOiJidXNpbmVzcy1jZW50ZXItd2ViIiwic3ViIjoiNThlMjY5OWEtMDNjYi00MzQzLWIxNTItMTYyNmQxYTE5YTVmIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYnVzaW5lc3MtY2VudGVyLXdlYiIsInNlc3Npb25fc3RhdGUiOiJlY2EyMWY0OC1mMThhLTRmNDMtODYxMS1lOGQ0YjBjY2Y5NzEiLCJjbGllbnRfc2Vzc2lvbiI6IjMwZTUzMmJlLTcwZTQtNDhlYy05Nzg0LThmNWM4NWU4ZmU4OSIsImFsbG93ZWQtb3JpZ2lucyI6W10sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJiY191c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsInZpZXctcHJvZmlsZSJdfX0sIm9iamVjdF9ndWlkIjoiZWM4ZTBjMmYtNjcxZS00MmVmLWE5Y2QtYTRlMDZlNGFhNzY3IiwibmFtZSI6IkpvaG4gUGF0dGlzb24gUGF0dGlzb24iLCJlbXBsb3llZV9udW1iZXIiOiI1Njc5Y2I2YS1hZGQxLTRkNDgtODUwZS1hN2Y5NWJhMjk3NjEiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJqcGF0dGlzb25AbWJvLXRzdC5jb20iLCJnaXZlbl9uYW1lIjoiSm9obiBQYXR0aXNvbiIsImZhbWlseV9uYW1lIjoiUGF0dGlzb24iLCJlbWFpbCI6ImpvaG5AaW5mb2V0Yy5jb20ifQ.ONQMoZ3Eten2k3o6SzwWYPemdm8q0t4xS08RDU59Zux1uFCi7MC583rWB7bJ9sNxlrTVCot5QidLq61aOdMpPtcFD40aPSkuMuNUeaqAJdwkrQWnINsDPZ_RDVjg1ASWpbeYGEFQXWfmRFTiKe58IXfYe_gV9QffAxG5PwOVPUBriQRmiE5NYw7vRysV7pyDIgIPqaptkAOgq5aqZ7ljm2XJoNHX4t53zBjqdjb13eSUz-tlsUx48WcggnclVnTaKePH_iITeQPjs6Z1ZntZ8Z0MkQgymYZFIFiF7Ho10I8qMq10xNmmy2ipeQyIA7aS1oSqoCRCpiuugk1dYPWvTQ'
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