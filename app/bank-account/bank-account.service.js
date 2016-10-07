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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var BankAccountService = (function () {
    function BankAccountService(http) {
        this.http = http;
        this.banAccountUrl = 'app/bank-account/bank-account.json';
        this.headers = new http_1.Headers(); // Currently empty
    }
    BankAccountService.prototype.getBankAccounts = function () {
        var headers = new http_1.Headers({
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI5ZDhiMWQ4Ni00OWJhLTQ3YzItODYwMS1mMDQyYmJkZjFhMmEiLCJleHAiOjE0NzI2MTA3ODQsIm5iZiI6MCwiaWF0IjoxNDcyMTc4Nzg0LCJpc3MiOiJodHRwczovL3NzbzItZGV2Lm1ib3BhcnRuZXJzLmNvbS9hdXRoL3JlYWxtcy9kZXYiLCJhdWQiOiJidXNpbmVzcy1jZW50ZXItd2ViIiwic3ViIjoiNThlMjY5OWEtMDNjYi00MzQzLWIxNTItMTYyNmQxYTE5YTVmIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYnVzaW5lc3MtY2VudGVyLXdlYiIsInNlc3Npb25fc3RhdGUiOiJmMzI2MmFjNS1kN2JkLTQ3MjItOGUwYS1mMzlkNzI0YmNhODkiLCJjbGllbnRfc2Vzc2lvbiI6ImRiNWZiZTdhLTYyYmItNGFhYS1hMGE2LTk4NjA4NzBkMjZkNSIsImFsbG93ZWQtb3JpZ2lucyI6W10sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJiY191c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsInZpZXctcHJvZmlsZSJdfX0sIm9iamVjdF9ndWlkIjoiZWM4ZTBjMmYtNjcxZS00MmVmLWE5Y2QtYTRlMDZlNGFhNzY3IiwibmFtZSI6IkpvaG4gUGF0dGlzb24gUGF0dGlzb24iLCJlbXBsb3llZV9udW1iZXIiOiI1Njc5Y2I2YS1hZGQxLTRkNDgtODUwZS1hN2Y5NWJhMjk3NjEiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJqcGF0dGlzb25AbWJvLXRzdC5jb20iLCJnaXZlbl9uYW1lIjoiSm9obiBQYXR0aXNvbiIsImZhbWlseV9uYW1lIjoiUGF0dGlzb24iLCJlbWFpbCI6ImpvaG5AaW5mb2V0Yy5jb20ifQ.f9P3moqt4UuiEdqK2ipAoeJa-eMnqX35LlWzPVT4iboOFFKDlmk0gJfU-ZKA5alKg32HsO2Vy2Wm9a8pAAxQUdAraghAS5SpnmGzUGaShkjSdFts6uXakMlGM8e8bsDptaBEZz-rYhxLf71SKrqJjWxieeVayR8q7KOcvQjzFPhz5T2kzrY2sy0ALAbE9P3WIJAinkwTgcKh9SCkC0lkMRVi8ooNnzrBiETYJN8VIGkJ-6f8w_dd0yywwJKrPCdGquDy-u6-oXkrz3MyVvyR5w37JUadxCYpVPolH7XZuSy-RZR6cyrKukafyEoGrEalrnJl3CO5HPRGHPd5vrUB1A'
        });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.banAccountUrl, options).map(function (res) { return res.json(); });
    };
    BankAccountService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BankAccountService);
    return BankAccountService;
}());
exports.BankAccountService = BankAccountService;
//# sourceMappingURL=bank-account.service.js.map