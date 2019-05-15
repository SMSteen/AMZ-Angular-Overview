import { Component, OnInit } from '@angular/core';
import { TASKS } from '../tasks-data';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  task = TASKS[0];

  constructor() {}

  ngOnInit() {
    console.log(this.task);
  }
}
