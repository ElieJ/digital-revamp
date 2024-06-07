import { Routes } from '@angular/router';
import { ActiveProjectsComponent } from './active-projects/active-projects.component';
import { KeyMetricsComponent } from './key-metrics/key-metrics.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
// import { TaskListComponent } from './task-list/task-list.component';
// import { TaskFormComponent } from './task-form/task-form.component';
// import { TimelineComponent } from './timeline/timeline.component';

export const routes: Routes = [
  { path: 'active-projects', component: ActiveProjectsComponent },
  { path: 'key-metrics', component: KeyMetricsComponent },
  { path: 'project-details', component: ProjectDetailsComponent },
//   { path: 'task-list', component: TaskListComponent },
//   { path: 'task-form', component: TaskFormComponent },
//   { path: 'timeline', component: TimelineComponent },
  { path: '', redirectTo: '/active-projects', pathMatch: 'full' },
];
