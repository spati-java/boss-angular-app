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
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/toPromise');
var LineItemService = (function () {
    function LineItemService(http) {
        this.http = http;
        this.invoiceLineIntegrationItemUrl = 'http://boss-lb-dev.mbopartners.com/invoice/api/v1/integration/line-items';
        this.invoiceLineItemUrl = 'http://boss-lb-dev.mbopartners.com/invoice/api/v1/line-items';
        this.searchUrl = 'http://localhost:8080/search?q';
        // set the header for authentication
        this.header = new http_1.Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiJiZThjMjA5NC1kM2YzLTQyNzktYmQ1ZC1lYzJlNTkxM2UzYzQiLCJleHAiOjE0NzIxNjM3MDQsIm5iZiI6MCwiaWF0IjoxNDcxNzMxNzA0LCJpc3MiOiJodHRwczovL3NzbzItZGV2Lm1ib3BhcnRuZXJzLmNvbS9hdXRoL3JlYWxtcy9kZXYiLCJhdWQiOiJidXNpbmVzcy1jZW50ZXItd2ViIiwic3ViIjoiNTMwYTJkNjEtZDdjZS00YzU0LTg5NmUtNzc5OWFlODBkZmU5IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYnVzaW5lc3MtY2VudGVyLXdlYiIsInNlc3Npb25fc3RhdGUiOiJkNGIxODQyMC1iMzEwLTRjZTMtOTU5Yy1kY2Q3YWUxZmIxZDEiLCJjbGllbnRfc2Vzc2lvbiI6IjdkMDM4YThhLTlkNzktNGNjMy1iMDgxLWE0NDgwNzhlNGRmYyIsImFsbG93ZWQtb3JpZ2lucyI6W10sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJyZWFsbS1hZG1pbiIsImFkbWluIiwiYmNfdXNlciJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJ2aWV3LXByb2ZpbGUiXX19LCJvYmplY3RfZ3VpZCI6ImRlMWRkZWU5LTEwYjktNGNiYi1iMDRhLTc2NzdkZjIxMmQxNCIsIm5hbWUiOiJLZW55YXR0YSBDbGFyayIsImVtcGxveWVlX251bWJlciI6ImY5NzJjZjlmLTYyZGItNGY4OC1hMWUyLTg2Y2I1Nzg3MGNjMCIsInByZWZlcnJlZF91c2VybmFtZSI6ImtjbGFya0BtYm8tdHN0LmNvbSIsImdpdmVuX25hbWUiOiJLZW55YXR0YSIsImZhbWlseV9uYW1lIjoiQ2xhcmsiLCJlbWFpbCI6ImtjbGFya0BtYm9wYXJ0bmVycy5jb20uZGV2In0.BOiU5J3hR728c3kghzZUTRcTU7xrQEFn8rsmdemkmzPyU94RqeWWIyHHiG7J_YfvtmsChIOltCi0EKMGMZ__lUGGLCTLw0v0tXsZYRVN1NhyLMtcuKKVBB-6yg4p5HtxsAUHszWz3exTUomeJQAF9zNu73unMOhgSoLl5g3YFu2Q-LrI0VZ5bWbd9k8hWFgv4olwI2AglluShCdSN6cmoGWnCbhnmZDtOQWIXoMuFz7fmhUJCg4pbifXwzTo7Jc59_3UYrRw2q4M8oU7C6nWK5AfmDicEzjynQVEGVvOWMt0myh8RdPzIr-py-O93A8NA25ptL8nfWkVhxLEyOXSTQ'
        });
        this.options = new http_1.RequestOptions({ headers: this.header });
    }
    // POST for invoice line items
    LineItemService.prototype.createLineItem = function (lineItem) {
        var body = JSON.stringify(lineItem);
        return this.http.post(this.invoiceLineIntegrationItemUrl, body, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // Update existing Line Item
    LineItemService.prototype.updateLineItem = function (lineItem) {
        var body = JSON.stringify(lineItem);
        console.log(body + " this data is sent to the server");
        var url = this.invoiceLineIntegrationItemUrl + "/" + lineItem.id;
        return this.http.put(url, body, this.options).map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // GET All invoice line items
    LineItemService.prototype.getAllLineItems = function () {
        return this.http.get(this.invoiceLineItemUrl, this.options).map(function (res) { return res.json(); });
    };
    LineItemService.prototype.getLineItem = function (id) {
        var url = this.invoiceLineItemUrl + "/" + id;
        return this.http.get(url, this.options).map(function (res) { return res.json(); });
    };
    LineItemService.prototype.getByID = function (id) {
        var _this = this;
        return this.getAllLineItems().map(function (lineItems) { return _this.lineItems.filter(function (lineItem) { return lineItem.id === id; })[0]; });
    };
    LineItemService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    LineItemService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    LineItemService.prototype.delte = function (id) {
        var url = this.invoiceLineItemUrl + "/" + id;
        this.http.delete(url, this.options);
    };
    LineItemService.prototype.findOneLienItem = function (id) {
        //  create the url with the id
        var url = this.invoiceLineItemUrl + "/" + id;
        console.log(url);
        return this.http.get(url, this.options).map(function (res) { return res.json(); });
    };
    LineItemService.prototype.delete = function (id) {
        //  create the url with the id
        var url = this.invoiceLineIntegrationItemUrl + "/" + id;
        console.log(url);
        return this.http.delete(url, this.options).map(function (res) { return res.json(); });
    };
    LineItemService.prototype.search = function (term) {
        return this.http
            .get("http://boss-lb-dev.mbopartners.com/invoice/api/v1/line-items?q=" + term, this.options)
            .map(function (res) { return res.json(); });
    };
    LineItemService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LineItemService);
    return LineItemService;
}());
exports.LineItemService = LineItemService;
//# sourceMappingURL=line-item.service.js.map