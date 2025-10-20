import { Routes } from '@angular/router';
import { Promises } from './promises/promises';
import { Observables } from './observables/observables';
import { List } from './observables/list/list';
import { FromEvent } from './observables/from-event/from-event';

export const routes: Routes = [
    { path: 'promises', component: Promises },
    {path: 'observables', component: Observables, children:[
        {path: 'list', component: List},
        {path: 'fromEvent', component: FromEvent}
    ]},
    {path: '**', redirectTo: 'promises'}

];
