import { Routes } from '@angular/router';
import { Promises } from './promises/promises';
import { Observables } from './observables/observables';
import { List } from './observables/list/list';
import { FromEvent } from './observables/from-event/from-event';
import { Interval } from './observables/interval/interval';
import { OfFrom } from './observables/of-from/of-from';

export const routes: Routes = [
    { path: 'promises', component: Promises },
    {path: 'observables', component: Observables, children:[
        {path: '', component: List},
        {path: 'fromEvent', component: FromEvent},
        {path: 'interval', component: Interval},
        {path: 'ofFrom', component: OfFrom}
    ]},
    {path: '**', redirectTo: 'promises'}

];
