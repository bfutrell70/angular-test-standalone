import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondChild } from './second-child';
import { Person } from '../interfaces/person';
import { By } from '@angular/platform-browser';

describe('SecondChild', () => {
  let component: SecondChild;
  let fixture: ComponentFixture<SecondChild>;

  let person: Person;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondChild]
    })
    .compileComponents();

    person = {
      name: "Test Person",
      height: "100",
      mass: "",
      hair_color: "",
      skin_color: "",
      eye_color: "",
      birth_year: "",
      gender: "",
      homeworld: "",
      films: [
        "film 1",
        "film 2"
      ],
      species: [],
      vehicles: [],
      starships: [],
      created: new Date(2025, 3, 10),
      edited: new Date(2025, 3, 10),
      url: ""
    };

    fixture = TestBed.createComponent(SecondChild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the correct number of films', () => {
    component.Person = person;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('span').textContent).toContain(person.films.length.toString());
  })
});
