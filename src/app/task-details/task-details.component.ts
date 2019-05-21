import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TASKS } from '../tasks-data';
import { TasksService } from '../tasks.service';
import { Task } from '../task';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  task: Task;

  constructor(
    private taskService: TasksService,
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
}
