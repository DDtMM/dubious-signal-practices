import { ChangeDetectionStrategy, Component, Signal, WritableSignal, signal } from '@angular/core';
import { getRandomToDoItem } from './random-to-do-utilities';

type ArraySignal<T> = Signal<T[]> & WritableSignal<T[]> & {
  push(...items: T[]): void;
}
function arraySignal<T>(initialValue?: T[]): ArraySignal<T> {
  const signalFn = signal(initialValue ?? []) as ArraySignal<T>;
  signalFn.push = (...items: T[]) => signalFn.update((x) => x.concat(items));
  return signalFn;
}
@Component({
  selector: 'app-extending-signals',
  standalone: true,
  imports: [],
  template: `
<div class="prose-base">
  <h2>Extending Signals with Functions</h2>
  <div><a class="link link-neutral" href="https://github.com/DDtMM/dubious-signal-practices/blob/master/src/app/examples/extending-signals.component.ts">View Source</a></div>
  <p>You can extend the functionality of a writable signal by assigning a function to it.</p>
  <p>Click to add new value with the new push function.</p>
  <button type="button" class="btn" (click)="addValue()">Add a new Value</button>
  <div class="shadow-md">
    <div class="card-body">
      <div class="card-title">All To-Dos:</div>
      <div class="flex flex-row flex-wrap gap-x-4 gap-y-2">
        @for (todo of values(); track $index) {
          <span class="badge badge-lg badge-secondary">{{todo}}</span>
        }
      </div>
    </div>
  </div>
</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExtendingSignalsComponent {
  readonly values = arraySignal<string>();
  addValue(): void {
    this.values.push(getRandomToDoItem());
  }
}
