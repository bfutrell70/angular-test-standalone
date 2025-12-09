import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test-component';
import { Person } from '../interfaces/person';
import { TestService } from '../services/test-service';
import { of } from 'rxjs';
import { PeopleResults } from '../interfaces/people-results';
import { By } from '@angular/platform-browser';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  let person: Person;
  let person2: Person;
  let peopleResults: PeopleResults;
  let getPeopleSpy;
  let getPersonSpy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent],
      providers: [TestService]
    })
    .compileComponents();

    // setup test data for the service to return
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
    person2 = {
      name: "Test Person 2",
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

    peopleResults = {
      count: 1,
      next: "",
      previous: "",
      results: [person, person2]
    };

    // create a fake TestService object with getPeople() and getPerson() spies
    const testService = TestBed.inject(TestService);
    // Make the spy return a synchronour Observable with the test data
    getPeopleSpy = vi.spyOn(testService, "getPeople").mockImplementation(() => {
      return of(peopleResults);
    });

    getPersonSpy = vi.spyOn(testService, "getPerson").mockImplementation((id: number) => {
      return of(person);
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render an alert per person', () => {
    // getPeople is invoked within getData(), which is called in the constructor
    fixture.detectChanges();
    const nativeElement = fixture.nativeElement;

    expect(fixture.debugElement.queryAll(By.css('.alert')).length).toEqual(2);
  });
});
