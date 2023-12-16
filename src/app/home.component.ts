import { ChangeDetectionStrategy, Component } from '@angular/core';
import { routes } from './app.routes';
import { Route, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
<div class="flex flex-row gap-3 min-h-full">
  <ul class="menu bg-base-200 w-56 mw-56 rounded-br-lg flex-shrink-0 flex-nowrap mb-3">
    @for (example of examples; track example.path) {
      <li><a [routerLink]="[example.path]">{{example.title}}</a></li>
    }
  </ul>
  <div class="mr-5">
    <router-outlet />
  </div>
</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  readonly examples = (routes.find(x => x.path === '')?.children ?? [])
    .filter((x): x is Required<Pick<Route, 'path' | 'title'>> => !!(x.path && x.title));
}
