import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
<div class="h-full w-full flex flex-col">
  <div class="navbar bg-base-content text-base-100">
    <h1 class="text-xl">Dubious Angular Signal Practices</h1>
  </div>
  <div class="flex-grow-1 h-full overflow-auto">
    <router-outlet />
  </div>
</div>
`,
  styles: [],
})
export class AppComponent {

}
