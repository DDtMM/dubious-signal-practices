import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home-content',
  standalone: true,
  imports: [],
  template: `
<div class="prose-base">
  <h2>Dubious Angular Signal Practices Examples</h2>
  <p>Some of these examples my seem sketchy but work alright.  Some seem alright but might not work as your expect.</p>
</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeContentComponent {

}
