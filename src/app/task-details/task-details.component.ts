import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TASKS } from '../tasks-data';
import { TasksService } from '../tasks.service';
import { Task } from '../task';
import { Person } from '../person';
import { switchMap } from 'rxjs/operators';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  task: Task;
  showForm = false;
  people: Person[];
  assigneeID: number;

  constructor(
    private taskService: TasksService,
    private peopleService: PeopleService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap // this returns an observable with params data
      .pipe(
        switchMap(params => this.taskService.getTask(params.get('task_id')))
      )
      .subscribe(
        task => {
          console.log('task-details.component, getting single task', task);
          this.task = task[0];
        },
        error => {
          console.log(error);
        }
      );
    console.log(this.task);
  }

  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId).subscribe(
      data => {
        console.log(
          'in task-list.component, successfully deleted a task',
          data
        );
        this.router.navigateByUrl('/tasks');
      },
      error => {
        console.log(error);
      }
    );
  }

  showAssignForm() {
    this.showForm = true;
    // get a list of people to populate from drop-down
    this.peopleService.getPeople().subscribe(data => {
      console.log(data);
      this.people = data;
    });
  }

  addAssignee(event: Event, form: NgForm) {
    console.log(`form submitted`);
    this.taskService
      .editTaskAssignment(this.task.pk, this.assigneeID)
      .subscribe(
        data => {
          console.log(`in task-details component, got updated task back`, data);
          this.router.navigateByUrl(`/people/${this.assigneeID}`);
        },
        error => {
          console.log(error);
        }
      );
  }
}
