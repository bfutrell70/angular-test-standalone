import { Component, Input } from '@angular/core';
import { Person } from '../interfaces/person';

@Component({
  selector: 'app-second-child',
  imports: [],
  templateUrl: './second-child.html',
  styleUrl: './second-child.css',
})
export class SecondChild {
  @Input() Person: Person | undefined;
}
