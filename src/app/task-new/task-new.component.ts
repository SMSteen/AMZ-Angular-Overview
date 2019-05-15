import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../task';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {
  newTask: Task = new Task(); // create a new instance of Task which our form will be bound to

  constructor() {}

  ngOnInit() {}

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('form was submitted', form);
    console.log('new task created', this.newTask);

    // reset the form, but create new instance of Task first before doing so; this preps for next form submission
    this.newTask = new Task();
    form.reset();
  }
}
