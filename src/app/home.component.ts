import { ChangeDetectionStrategy, Component } from '@angular/core';
import { exampleRoutes, routes } from './app.routes';
import { Route, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
<div class="flex flex-row min-h-full">
  <ul class="menu bg-base-200 w-56 mw-56 rounded-br-lg flex-shrink-0 flex-nowrap mb-3 gap-1 hidden sm:flex">
    @for (example of examples; track example.path) {
      <li><a [routerLink]="[example.path]" routerLinkActive="active">{{example.title}}</a></li>
    }
  </ul>
  <div class="m-3 mr-5">
    <router-outlet />
  </div>
</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  readonly examples = exampleRoutes;
}
