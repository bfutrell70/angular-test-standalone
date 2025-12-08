import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../interfaces/person';
import { PeopleResults } from '../interfaces/people-results';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  // using the Star Wars API for test data

  private httpClient: HttpClient = inject(HttpClient);

  getPeople(): Observable<PeopleResults> {
    return this.httpClient.get<PeopleResults>("https://swapi.dev/api/people");
  }

  getPerson(id: number): Observable<Person> {
    return this.httpClient.get<Person>(`https://swapi.dev/api/people/${id}`);
  }
}
