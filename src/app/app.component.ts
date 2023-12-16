import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { exampleRoutes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
<div class="h-full w-full flex flex-col">
  <div class="navbar bg-base-content flex flex-row w-100">
    <a class="text-xl btn btn-ghost text-base-100 font-semibold" routerLink="/">Dubious Angular Signal Practices</a>
    <div class="dropdown dropdown-end flex-none ml-auto">
      <label tabindex="0" class="btn btn-ghost text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </label>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
        <li>
          <a href="https://github.com/DDtMM/dubious-signal-practices">
            Github
          </a>
        </li>

        @for (example of examples; track example.path) {
          <li>
            <a [routerLink]="example.path">{{example.title}}</a>
          </li>
        }

      </ul>
    </div>
  </div>
  <div class="flex-grow-1 h-full overflow-auto">
    <router-outlet />
  </div>
</div>
`,
  styles: [],
})
export class AppComponent {
  readonly examples = exampleRoutes;
}
