import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-always-false-equality',
  standalone: true,
  imports: [JsonPipe],
  template: `
<div class="prose-base">
  <h2>Always False Equality</h2>
  <div><a class="link link-neutral" href="https://github.com/DDtMM/dubious-signal-practices/blob/master/src/app/examples/always-false-equality.component.ts">View Source</a></div>
  <p>It is confusing that the first derived signal changes but the second doesn't.</p>
  <p>It is also confusing that the behavior in version of Angular 17 is inconsistent.  This was originally a more damning example.</p>
  <p>Good rule to follow is always make equal function less permissive not more permissive (less false values than <i>Object.is</i>).</p>
  <button type="button" class="btn" (click)="incrementSource()">Increment</button>
  <div>Original Value: {{source().counter}}</div>
  <div>Derived from Original: {{inBetweenValue().counter}}</div>
  <div>Derived from Derived: {{finalValue()}}</div>
</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlwaysFalseEqualityComponent {
  readonly source = signal({ counter: 1 }, { equal: () => false });
  readonly inBetweenValue = computed(() => {
    console.log('source emitted.')
    return this.source();
  });
  readonly finalValue = computed(() => {
    console.log('in between value emitted.')
    return this.inBetweenValue().counter;
  });

  incrementSource(): void {
    this.source.update(x => {
      x.counter++;
      return x;
    });
  }
}
