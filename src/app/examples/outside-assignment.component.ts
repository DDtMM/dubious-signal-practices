import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { getRandomToDoItem } from './random-to-do-utilities';

@Component({
  selector: 'app-outside-assignment',
  standalone: true,
  imports: [],
  template: `
<div class="prose-base">
  <h2>Using Variables Outside the Scope of a Computed Signal</h2>
  <div><a class="link link-neutral" href="https://github.com/DDtMM/dubious-signal-practices/blob/master/src/app/examples/outside-assignment.component.ts">View Source</a></div>
  <p>
    You might think it's a good idea to use variables defined outside of a computed signal or effect,
    but be careful.  A computed signal is lazily evaluated and an effect depends on change detection
    (they both do if the computed signal is consumed by a template), so things not might work as you expect.
  </p>
  <p>
    This is an exaggerated example of the possible issues that might occur.
    When the button is clicked, two to-dos are created, but only one shows up.
    This is because I'm keeping the state of toDoHistory in a member of the Component
    and the computed only executes once when the value is pulled by the template.
  </p>
  <button type="button" class="btn" (click)="addToDo(); addToDo();">Add Two To-Dos</button>

  <div class="shadow-md">
    <div class="card-body">
      <div class="card-title">All To-Dos: (I hope this isn't half of them)</div>
      <div class="flex flex-row flex-wrap gap-x-4 gap-y-2">
        @for (todo of allToDos(); track $index) {
          <span class="badge badge-lg badge-secondary">{{todo}}</span>
        }
      </div>
    </div>
  </div>

</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OutsideAssignmentComponent {

  // there is no concept of a reducer in computed signals, so I need this variable here to keep track of changes.
  private toDoHistory: string[] = [];

  readonly nextToDo = signal('');
  readonly allToDos = computed(() => {
    this.toDoHistory = this.nextToDo() ? [...this.toDoHistory, this.nextToDo()] : this.toDoHistory;
    return this.toDoHistory;
  });
  addToDo() {
    this.nextToDo.set(getRandomToDoItem());
  }
}
