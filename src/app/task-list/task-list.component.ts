import { Component, OnInit } from '@angular/core';
import { TASKS } from '../tasks-data';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = TASKS;
  color = 'orange';
  tyMsg: string;

  constructor() {}

  ngOnInit() {
    console.log(this.tasks);
  }

  addNewTask(task: Task) {
    console.log('in task-list.component, adding task', task);
    this.tasks.push(task);
    this.tyMsg = 'Thank you my child for the new task.';
  }
}
