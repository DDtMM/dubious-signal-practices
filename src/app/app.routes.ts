import { Routes } from '@angular/router';
import { ExtendingSignalsComponent } from './examples/extending-signals.component';
import { HomeComponent } from './home.component';
import { AlwaysFalseEqualityComponent } from './examples/always-false-equality.component';
import { GetSignalValueInsideAsyncComponent } from './examples/get-signal-value-inside-async.component';
import { OutsideAssignmentComponent } from './examples/outside-assignment.component';
import { SetSignalInsideAsyncComponent } from './examples/set-signal-inside-async.component';
import { UndocumentedFunctionsComponent } from './examples/undocumented-functions.component';
import { HomeContentComponent } from './home-content.component';

export const exampleRoutes = [
  { path: 'always-false-equality', component: AlwaysFalseEqualityComponent, title: 'Always False Equality' },
  { path: 'extending-signals', component: ExtendingSignalsComponent, title: 'Extending Signals with Functions' },
  { path: 'get-signal-value-inside-async', component: GetSignalValueInsideAsyncComponent, title: 'Get Signal Value Inside Async Function from Effect' },
  { path: 'outside-assignment', component: OutsideAssignmentComponent, title: 'Using Variables Outside Scope of Computed' },
  { path: 'set-signal-inside-async', component: SetSignalInsideAsyncComponent, title: 'Set Signal inside an async inside an Effect' },
  { path: 'undocumented-functions', component: UndocumentedFunctionsComponent, title: 'Using Undocumented Functions' },
];
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
    children: [
      { path: '', component: HomeContentComponent, title: 'Home' },
      ...exampleRoutes,
      { path: '*', redirectTo: 'always-false-equality' }
    ]
  },
  { path: '*', redirectTo: '/' }
];
