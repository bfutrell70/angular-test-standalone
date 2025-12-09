import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstChild } from './first-child';
import { Person } from '../interfaces/person';

describe('FirstChild', () => {
  let component: FirstChild;
  let fixture: ComponentFixture<FirstChild>;

  let person: Person;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstChild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstChild);
    component = fixture.componentInstance;
    await fixture.whenStable();

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // tests
  // - given a Person object, a div is rendered with the person's name
  it('renders the name', () => {
    component.Person = person;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('div').textContent).toContain(person.name);
  })
});
