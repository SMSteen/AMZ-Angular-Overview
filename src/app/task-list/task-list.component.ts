import { Component, OnInit } from '@angular/core';
// import { TASKS } from '../tasks-data';
import { Task } from '../task';
import { TasksService } from '..//tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  color = 'orange';
  tyMsg: string;

  constructor(private taskService: TasksService) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe(
      tasks => {
        console.log(tasks);
        this.tasks = tasks;
      },
      error => {
        console.log(error);
      }
    );
  }

  addNewTask(task: Task) {
    console.log('in task-list.component, adding task', task);
    this.tasks.push(task);
    this.tyMsg = 'Thank you my child for the new task.';
  }
}
