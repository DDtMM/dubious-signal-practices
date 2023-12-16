import { ChangeDetectionStrategy, Component } from '@angular/core';
import { exampleRoutes } from './app.routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-content',
  standalone: true,
  imports: [RouterLink],
  template: `
<div class="prose-base">
  <h2>Dubious Angular Signal Practices Examples</h2>
  <div><a class="link link-neutral" href="https://github.com/DDtMM/dubious-signal-practices/">View on GitHub</a></div>
  <p>Some of these examples my seem sketchy but work alright.  Some seem alright but might not work as your expect.</p>
  <ul class="m-0 p-0">
    @for (example of examples; track example.path) {
      <li><a class="link" [routerLink]="[example.path]">{{example.title}}</a></li>
    }
  </ul>
</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeContentComponent {
  readonly examples = exampleRoutes;
}
