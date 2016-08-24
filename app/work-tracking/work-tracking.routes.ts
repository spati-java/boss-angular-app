import { RouterConfig }         from '@angular/router';
import {WorkTrackingDisplay} from "./work-tracking-display.component";

export const workTrackingRoutes: RouterConfig = [

    { path: 'display-work-tracking/:id', component: WorkTrackingDisplay}

];