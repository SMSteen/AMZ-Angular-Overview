import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  baseURL = 'http://localhost:8000/api/people';

  constructor(private http: HttpClient) {}

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.baseURL);
  }

  getPerson(personID: any): Observable<PersonTasks> {
    console.log(personID);
    return this.http.get<PersonTasks>(`${this.baseURL}/${personID}`);
  }
}

interface PersonTasks {
  person: string;
  tasks: string;
}
