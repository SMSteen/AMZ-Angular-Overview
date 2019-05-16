import { Component, OnInit } from '@angular/core';
import { TASKS } from '../tasks-data';
import { TasksService } from '../tasks.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  task: Task;

  constructor(private taskService: TasksService) {}

  ngOnInit() {
    this.taskService.getTask(1).subscribe(
      task => {
        console.log('task-details.component, getting single task', task);
        this.task = task;
      },
      error => {
        console.log(error);
      }
    );
    console.log(this.task);
  }
}
