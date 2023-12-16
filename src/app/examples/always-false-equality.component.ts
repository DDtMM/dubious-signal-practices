import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-always-false-equality',
  standalone: true,
  imports: [],
  template: `
<div class="prose-base">
  <h2>Always False Equality</h2>
  <p>It is confusing that the first derived signal changes but the second doesn't.</p>
  <p>Good rule to follow is always make equal function less permissive not more permissive.</p>
  <button type="button" class="btn" (click)="incrementSource()">Increment</button>
  <div>{{source().counter}}</div>
  <div>{{inBetweenValue().counter}}</div>
  <div>{{computedTwo()}}</div>
</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlwaysFalseEqualityComponent {
  readonly source = signal({ counter: 1 }, { equal: () => false });
  readonly inBetweenValue = computed(() => this.source());
  readonly computedTwo = computed(() => this.source()?.counter);

  incrementSource(): void {
    this.source.update(x => {
      x.counter++;
      return x;
    });
  }
}
