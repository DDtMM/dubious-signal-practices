import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-get-signal-value-inside-async',
  standalone: true,
  imports: [],
  template: `
<div class="prose-base">
  <h2>Get a Signal Value Inside Async Function from Effect</h2>
  <div><a class="link link-neutral" href="https://github.com/DDtMM/dubious-signal-practices/blob/master/src/app/examples/get-signal-value-inside-async.component.ts">View Source</a></div>
  <p>
    Updating the signal, should trigger the effect and show a value in the console, right?
    What's fun, is that this works once, so you think it'll work again.
    That's because effects always run at least once.
  </p>
  <button type="button" class="btn" (click)="incrementSomeNumber()">Increment Some Number</button>
  <div>The signal is changing so the console should be updating? {{someNumber()}}</div>
</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GetSignalValueInsideAsyncComponent {
  readonly someNumber = signal(0);
  constructor() {
    effect(() => setTimeout(() => console.log(this.someNumber()), 1000));
  }
  incrementSomeNumber(): void {
    this.someNumber.update(x => x + 1);
  }
}
