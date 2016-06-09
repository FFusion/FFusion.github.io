import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterOutlet } from '@angular/router-deprecated';

import {PhotoForm} from './components/photo-form';


@Component({
    selector: 'my-app',
    template: `<router-outlet></router-outlet>`,
    directives:[ROUTER_DIRECTIVES],
    providers:[ROUTER_PROVIDERS, RouterOutlet]
})


@RouteConfig([
    {
        path:'/',
        name: 'PhForm',
        component: PhotoForm,
        useAsDefault: true
    }
])


export class AppComponent { }
