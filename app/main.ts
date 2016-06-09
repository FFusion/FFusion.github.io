import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import {JSONP_PROVIDERS } from '@angular/http';

bootstrap(AppComponent, [JSONP_PROVIDERS ]);