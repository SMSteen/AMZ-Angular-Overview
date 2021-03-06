import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  // baseURL = 'https://5b905f7b3ef10a001445d02e.mockapi.io/tasks/';
  baseURL = 'http://localhost:8000/api/tasks/';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseURL);
  }

  getTask(id): Observable<Task> {
    return this.http.get<Task>(`${this.baseURL}${id}`);
    // return this.http.get<Task>(this.baseURL + id);
  }

  createTask(task): Observable<Task> {
    return this.http.post<Task>(this.baseURL, task);
  }

  deleteTask(id): Observable<Task> {
    return this.http.delete<Task>(`${this.baseURL}${id}/delete`);
  }

  editTaskAssignment(taskID: number, personID: number): Observable<Task> {
    console.log(
      `in tasksService file, adding person ${personID} to task ${taskID}`
    );
    const postData = {
      addPerson: personID
    };
    return this.http.post<Task>(`${this.baseURL}${taskID}/edit`, postData);
  }
}
