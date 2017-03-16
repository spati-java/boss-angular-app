import { provideRouter, RouterConfig } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {operationRoutes} from "./operations/operation.routes";
import {homeRoutes} from "./home/home.routes";
import {workTrackingRoutes} from "./work-tracking/timecard.routes";
import {PolicyComponent} from "./policy/policy.component";

const routes: RouterConfig = [
    ...operationRoutes,
    ...homeRoutes,
    ...workTrackingRoutes,
    { path: 'home', component: HomeComponent},
    { path: '**', component: HomeComponent}

];

export const appRouterProviders = [
    provideRouter(routes)
];