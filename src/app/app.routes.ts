import { Routes } from '@angular/router';
import { Promises } from './promises/promises';
import { Observables } from './observables/observables';
import { List } from './observables/list/list';
import { FromEvent } from './observables/from-event/from-event';
import { Interval } from './observables/interval/interval';
import { OfFrom } from './observables/of-from/of-from';
import { ToArray } from './observables/to-array/to-array';
import { Custom } from './observables/custom/custom';
import { Map } from './observables/map/map';
import { Pluck } from './observables/pluck/pluck';
import { Filter } from './observables/filter/filter';

export const routes: Routes = [
    { path: 'promises', component: Promises },
    {path: 'observables', component: Observables, children:[
        {path: '', component: List},
        {path: 'fromEvent', component: FromEvent},
        {path: 'interval', component: Interval},
        {path: 'ofFrom', component: OfFrom},
        {path: 'toArray', component: ToArray},
        {path: 'custom', component: Custom},
        {path: 'map', component: Map},
        {path: 'pluck', component: Pluck},
        {path: 'filter', component: Filter}
    ]},
    {path: '**', redirectTo: 'promises'}

];
