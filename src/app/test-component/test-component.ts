import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Person } from '../interfaces/person';
import { TestService } from '../services/test-service';
import { PeopleResults } from '../interfaces/people-results';
import { FirstChild } from '../first-child/first-child';

@Component({
  selector: 'app-test-component',
  imports: [FirstChild],
  templateUrl: './test-component.html',
  styleUrl: './test-component.css',
  standalone: true,
})
export class TestComponent {
  private peopleResults!: PeopleResults;
  people = signal<Person[]>(undefined!);

  private testService: TestService = inject(TestService);

  constructor() {
    this.getData();
    console.log(JSON.stringify(this.people));
  }

  getData(): void {
    this.testService.getPeople().subscribe((results) => {
      this.peopleResults = results;
      this.people.set(this.peopleResults.results);
      console.log(`people returned: ${this.people.length}`);
    });
  }
}
