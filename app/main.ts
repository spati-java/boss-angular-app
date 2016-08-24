import {bootstrap}    from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {AppComponent} from './app.component';
import {disableDeprecatedForms, provideForms} from '@angular/forms';

import { appRouterProviders } from './app.routes';

bootstrap(AppComponent, [HTTP_PROVIDERS, disableDeprecatedForms(), provideForms(),appRouterProviders]).catch((err:any) => console.error(err));
