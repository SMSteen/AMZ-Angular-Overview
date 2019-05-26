import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { Task } from '../task';
import { PeopleService } from '../people.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  person: Person;
  tasks: Task[];

  constructor(
    private peopleService: PeopleService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.paramMap
      .pipe(
        switchMap(params =>
          this.peopleService.getPerson(params.get('person_id'))
        )
      )
      .subscribe(
        data => {
          console.log('in person-details component, get the person', data);
          // convert our data from string to JSON object
          const person = JSON.parse(data.person);
          const tasks = JSON.parse(data.tasks);
          this.person = person[0];
          console.log(this.person);
          this.tasks = tasks;
        },
        error => {
          console.log(error);
        }
      );
  }
}
