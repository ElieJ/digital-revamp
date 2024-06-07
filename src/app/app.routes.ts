import { Routes } from '@angular/router';
import { ActiveProjectsComponent } from './active-projects/active-projects.component';
import { CdkDragDropConnectedSortingGroupExample } from './key-metrics/key-metrics.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

export const routes: Routes = [
  { path: 'active-projects', loadComponent: () => import('./active-projects/active-projects.component').then(m => m.ActiveProjectsComponent) },
  { path: 'key-metrics', loadComponent: () => import('./key-metrics/key-metrics.component').then(m => m.CdkDragDropConnectedSortingGroupExample) },
  { path: 'project-details/:id', loadComponent: () => import('./project-details/project-details.component').then(m => m.ProjectDetailsComponent) },
  { path: '', redirectTo: '/active-projects', pathMatch: 'full' },
];
