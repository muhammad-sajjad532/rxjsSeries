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
import { Tap } from './observables/tap/tap';
import { Take } from './observables/take/take';
import { Retry } from './observables/retry/retry';
import { DebounceTime } from './observables/debounce-time/debounce-time';
import { Subject } from './observables/subject/subject';
import { Concat } from './observables/concat/concat';
import { Merge } from './observables/merge/merge';
import { MergeMap } from './observables/merge-map/merge-map';
import { ConcatMap } from './observables/concat-map/concat-map';

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
        {path: 'filter', component: Filter},
        {path: 'tap', component: Tap},
        {path: 'take', component: Take},
        {path: 'retry', component: Retry},
        {path: 'debounce', component: DebounceTime},
        {path: 'subject', component: Subject},
        {path: 'concat', component: Concat},
        {path: 'merge', component: Merge},
        {path: 'mergemap', component: MergeMap},
        {path: 'concatmap', component: ConcatMap}
        
    ]},
    {path: '**', redirectTo: 'promises'}
];
