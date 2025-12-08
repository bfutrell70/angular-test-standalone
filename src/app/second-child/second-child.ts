import { Component, Input, signal } from '@angular/core';
import { Person } from '../interfaces/person';

@Component({
  selector: 'app-second-child',
  imports: [],
  templateUrl: './second-child.html',
  styleUrl: './second-child.css',
  standalone: true
})
export class SecondChild {
  person = signal<Person | undefined>(undefined);

  @Input() set Person(person: Person) {
    this.person.set(person);
  }
}
