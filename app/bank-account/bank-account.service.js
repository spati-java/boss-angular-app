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
        this.banAccountUrl = 'http://boss-lb-dev.mbopartners.com/bank-accounts/api/v1/bank-accounts';
        this.headers = new http_1.Headers(); // Currently empty
    }
    BankAccountService.prototype.getBankAccounts = function () {
        var headers = new http_1.Headers({
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiIxM2YxYzM4MC0xMDU3LTQxY2YtYTdlYy05MGM1ZGI5ZTdhMTgiLCJleHAiOjE0Njg3ODQ5ODEsIm5iZiI6MCwiaWF0IjoxNDY4MzUyOTgxLCJpc3MiOiJodHRwczovL3NzbzItZGV2Lm1ib3BhcnRuZXJzLmNvbS9hdXRoL3JlYWxtcy9kZXYiLCJhdWQiOiJidXNpbmVzcy1jZW50ZXItd2ViIiwic3ViIjoiNThlMjY5OWEtMDNjYi00MzQzLWIxNTItMTYyNmQxYTE5YTVmIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYnVzaW5lc3MtY2VudGVyLXdlYiIsInNlc3Npb25fc3RhdGUiOiJmOTRlN2FhMC05ZDFlLTRiOTItYjRjMi1kNzZmN2E5ZGRiNmYiLCJjbGllbnRfc2Vzc2lvbiI6IjNhYzliYTRmLTM4MjQtNGE3YS04NGZlLWViOTgwNGU0NTJhMSIsImFsbG93ZWQtb3JpZ2lucyI6W10sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJiY191c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsInZpZXctcHJvZmlsZSJdfX0sIm9iamVjdF9ndWlkIjoiZWM4ZTBjMmYtNjcxZS00MmVmLWE5Y2QtYTRlMDZlNGFhNzY3IiwibmFtZSI6IkpvaG5ueSBQYXR0aXNvbiIsImVtcGxveWVlX251bWJlciI6ImU3MDM3M2NmLTdmNTYtNDBlZi1hY2UwLWVjYWY1NmRkNWZjNCIsInByZWZlcnJlZF91c2VybmFtZSI6ImpwYXR0aXNvbkBtYm8tdHN0LmNvbSIsImdpdmVuX25hbWUiOiJKb2hubnkiLCJmYW1pbHlfbmFtZSI6IlBhdHRpc29uIiwiZW1haWwiOiJqb2huQGluZm9ldGMuY29tIn0.UGxbCS9-8VIzhlqLpGeXsToQ-8dozzdwhpDqLPy5IAlbrgFwQWGndsaYNVIgRDI8UbtLMiD6FHDdxhm7KdIJr17fO-U6OtnxmiSTPAjtp9VOgazx-NXz8FmiL0z1yyqTxJmcN2hAXdjKGgj99mzRdySFH9Zb5hD2e6Z_2UszDknKkWWktz1HdJPy_4Ov76qZfnINcFO8n4Y2TelJZmfASovEZfZIuNvrxLKhG_8GCQvoVl6A0cu8LqbVCxTiMK8GxAbLVViPOD6vj2oXN-1a4jn87so3zF_pc2lbLgMNT7NQdk1acMNIbSBBC4ImIKOwAah9lJlqYnzmqql4wXCAsQ '
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