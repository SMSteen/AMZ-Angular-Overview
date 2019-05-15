import { Component, OnInit } from '@angular/core';
import { TASKS } from '../tasks-data';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks = TASKS;
  color = 'orange';

  constructor() {}

  ngOnInit() {
    console.log(this.tasks);
  }
}
