import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, WritableSignal, signal } from '@angular/core';
import { SIGNAL, SignalGetter, SignalNode, signalSetFn } from '@angular/core/primitives/signals';
import { tap } from 'rxjs';

@Component({
  selector: 'app-undocumented-functions',
  standalone: true,
  imports: [HttpClientModule],
  template: `
<div class="prose-base">
  <h2>Using Undocumented Functions</h2>
  <div><a class="link link-neutral" href="https://github.com/DDtMM/dubious-signal-practices/blob/master/src/app/examples/undocumented-functions.component.ts">View Source</a></div>
  <p>
    There was a big change for Signals between Angular 16 and Angular 17.
    The implementation of a signals and how they were applied within the framework were broke apart
    with the core functionality moved into a
    <a href="https://github.com/angular/angular/tree/main/packages/core/primitives/signals" class="link link-neutral">primitives/signals folder</a>.
    It's probably cool to use these with the understanding that could change or disappear between Angular versions.
  </p>
  <p>
    In the example below the same function is used to update two separate signals by accessing its underlying node property.
  </p>
  <div class="flex flex-col gap-3">
    @for (value of values; track value) {
      <div>
        Value {{$index + 1}}: {{value()}}
        <button type="button" class="btn btn-sm" (click)="doubleValue(value)">Double Value {{$index + 1}}</button>
      </div>
    }
  </div>
</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UndocumentedFunctionsComponent {
  readonly values = [signal(1), signal(2)];

  constructor(http: HttpClient) {

  }
  doubleValue(signal: WritableSignal<number>) {
    const node = (signal as SignalGetter<number>)[SIGNAL]
    signalSetFn(node, node.value * 2);
  }
}
