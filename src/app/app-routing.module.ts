import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from '../app/task-list/task-list.component';
import { TaskNewComponent } from '../app/task-new/task-new.component';
import { TaskDetailsComponent } from '../app/task-details/task-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PersonDetailsComponent } from './person-details/person-details.component';

const routes: Routes = [
  {
    path: '', // localhost:4200
    pathMatch: 'full',
    redirectTo: 'tasks'
  },
  {
    path: 'tasks',
    children: [
      {
        path: '', // localhost:4200/tasks
        component: TaskListComponent
      },
      {
        path: 'new', // localhost:4200/tasks/new
        component: TaskNewComponent
      },
      {
        path: ':task_id', // localhost:4200/tasks/7
        component: TaskDetailsComponent
      }
    ]
  },
  {
    path: 'people/:person_id', // localhost:4200/people/8
    pathMatch: 'full',
    component: PersonDetailsComponent
  },
  {
    path: '**', // localhost:4200/anythingNOTlistedabove
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
