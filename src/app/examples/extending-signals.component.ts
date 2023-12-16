import { ChangeDetectionStrategy, Component, Signal, WritableSignal, signal } from '@angular/core';

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
  <p>You can extend the functionality of a writable signal by assigning a function to it.</p>
  <p>Click to add new value with the new push function.</p>
  <button type="button" class="btn" (click)="values.push('new value')">Add a new Value</button>
  <ul>
    @for (item of values(); track item) {
      <li>{{item}}</li>
    }
  </ul>
</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExtendingSignalsComponent {
  readonly values = arraySignal<string>();

}
