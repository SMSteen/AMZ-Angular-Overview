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
        this.tasks.sort(
          (task1, task2) =>
            task2.fields.assigned.length - task1.fields.assigned.length
        );
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

  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId).subscribe(
      data => {
        console.log(
          'in task-list.component, successfully deleted a task',
          data
        );
        this.tasks = this.tasks.filter(task => data[0].pk !== task.pk);
      },
      error => {
        console.log(error);
      }
    );
  }
}
