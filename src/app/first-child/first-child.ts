import { Component, Input } from '@angular/core';
import { Person } from '../interfaces/person';
import { SecondChild } from '../second-child/second-child';

@Component({
  selector: 'app-first-child',
  imports: [SecondChild],
  templateUrl: './first-child.html',
  styleUrl: './first-child.css',
  standalone: true
})
export class FirstChild {
  @Input() Person: Person | undefined;
}
