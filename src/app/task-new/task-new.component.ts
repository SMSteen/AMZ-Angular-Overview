import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../task';
import { TasksService } from '../tasks.service';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {
  newTask: Task = new Task(); // create a new instance of Task which our form will be bound to
  people = [];
  @Output() addTask = new EventEmitter<Task>();
  @Input() parentData: string;

  constructor(
    private taskService: TasksService,
    private peopleService: PeopleService
  ) {}

  ngOnInit() {
    this.peopleService.getPeople().subscribe(
      data => {
        console.log('task-new.component, got the people', data);
        this.people = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('form was submitted', form);
    console.log('new task created', this.newTask);
    this.taskService.createTask(this.newTask).subscribe(
      newtask => {
        console.log('task-new.component, added a new task', newtask);
        this.addTask.emit(newtask);
      },
      error => {
        console.log(error);
      }
    );

    // reset the form, but create new instance of Task first before doing so; this preps for next form submission
    this.newTask = new Task();
    form.reset();
    console.log('form has been reset');
  }
}
