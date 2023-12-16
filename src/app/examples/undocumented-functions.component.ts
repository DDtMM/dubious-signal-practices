import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-undocumented-functions',
  standalone: true,
  imports: [],
  template: `
<div class="prose-base">
  <h2>Using Undocumented Functions</h2>
</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UndocumentedFunctionsComponent {

}
