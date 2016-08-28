"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require("./home/home.component");
var operation_routes_1 = require("./operations/operation.routes");
var home_routes_1 = require("./home/home.routes");
var timecard_routes_1 = require("./work-tracking/timecard.routes");
var routes = operation_routes_1.operationRoutes.concat(home_routes_1.homeRoutes, timecard_routes_1.workTrackingRoutes, [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: '**', component: home_component_1.HomeComponent }
]);
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map