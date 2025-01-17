import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Project } from './models/project.model';
import { Task } from './models/task.model';
import { Metrics } from './models/metrics.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = 'http://localhost:5172/api/projects';
  private useDummyData = false;  // Set this to false to switch to real API calls

  constructor(private http: HttpClient) {}

  getProjectDetails(projectId: string): Observable<Project> {
    if (this.useDummyData) {
      const dummyProject: Project = {
        id: '1',
        name: 'Project Alpha',
        owner: 'John Doe',
        startDate: new Date('2024-01-01'),
        deadline: new Date('2024-06-01'),
        completionPercentage: 45,
        status: 'Active'
      };
      return of(dummyProject);
    } else {
      return this.http.get<Project>(`${this.apiUrl}/${projectId}`);
    }
  }

  updateProjectDetails(project: Project): Observable<Project> {
    if (this.useDummyData) {
      // Dummy update logic
      return of(project);
    // } else {
    //   return this.http.put<Project>(`${this.apiUrl}/${project.id}, project`);
    // }
  }
  return of(project)
}

  getActiveProjects(): Observable<Project[]> {
    if (this.useDummyData) {
      const dummyProjects: Project[] = [
        { id: '1', name: 'Project Alpha', status: 'Active', completionPercentage: 45, owner: 'John Doe', startDate: new Date('2024-01-01'), deadline: new Date('2024-06-01') },
        { id: '2', name: 'Project Beta', status: 'Active', completionPercentage: 60, owner: 'Jane Smith', startDate: new Date('2024-02-01'), deadline: new Date('2024-07-01') },
        { id: '3', name: 'Project Gamma', status: 'Active', completionPercentage: 75, owner: 'Alice Johnson', startDate: new Date('2024-03-01'), deadline: new Date('2024-08-01') },
        { id: '4', name: 'Project Delta', status: 'Active', completionPercentage: 30, owner: 'Bob Brown', startDate: new Date('2024-04-01'), deadline: new Date('2024-09-01') }
      ];
      return of(dummyProjects);
    } else {
      return this.http.get<Project[]>(`${this.apiUrl}`);
    }
  }

  getMetrics(): Observable<Metrics> {
    if (this.useDummyData) {
      const dummyMetrics: Metrics = {
        totalProjects: 10,
        activeProjects: 4,
        completedProjects: 6,
        overdueTasks: 3,
        totalTasks: 10,
        completedTasks: 20,
        pendingTasks: 20
      };
      return of(dummyMetrics);
    } else {
      return this.http.get<Metrics>(`${this.apiUrl}/metrics`);
    }
  }

  updateProject(project: Project): Observable<Project> {
    if (this.useDummyData) {
      // Dummy update logic
      return of(project);
    } else {
      return this.http.put<Project>(`${this.apiUrl}/${project.id}`, project);
    }
  }

  getTasks(projectId: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/${projectId}/tasks`);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.apiUrl}/tasks`, task);
  }

  updateTask(task: Task): Observable<Task> {
    if (this.useDummyData) {
      // Dummy update logic
      return of(task);
    } else {
      return this.http.put<Task>(`${this.apiUrl}/tasks/${task.id}`, task);
    }
  }

  deleteTask(taskId: string): Observable<void> {
    if (this.useDummyData) {
      // Dummy delete logic
      return of(undefined);
    } else {
      return this.http.delete<void>(`${this.apiUrl}/tasks/${taskId}`);
    }
  }
}
