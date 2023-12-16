import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-set-signal-inside-async',
  standalone: true,
  imports: [],
  template: `
<div class="prose-base">
  <h2>Set a Signal Inside an Async Inside an Effect</h2>
  <div><a class="link link-neutral" href="https://github.com/DDtMM/dubious-signal-practices/blob/master/src/app/examples/set-signal-inside-async.component.ts">View Source</a></div>
  <p>
    You can't set a writable signal inside of an effect unless you specify <i>allowSignalWrites</i>,
    or if you just wrap it in a <i>setTimeout</i>.  I guess this is okay.
  </p>
  <button type="button" class="btn" (click)="incrementSomeNumber()">Increment Some Number</button>
  <div>Some Number: {{someNumber()}}</div>
  <div>Some Number A little bit later: {{someOtherNumber()}}</div>
</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SetSignalInsideAsyncComponent {
  readonly someNumber = signal(0);
  readonly someOtherNumber = signal(0);
  constructor() {
    effect(() => {
      const value = this.someNumber();
      setTimeout(() => this.someOtherNumber.set(value), 1000)
    });
  }
  incrementSomeNumber(): void {
    this.someNumber.update(x => x + 1);
  }
}
