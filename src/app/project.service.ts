import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './models/project.model';
import { Task } from './models/task.model';
import { Metrics } from './models/metrics.model';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = 'http://your-backend-api.com/projects';

  constructor(private http: HttpClient) {}

  getActiveProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiUrl}/active`);
  }

  getMetrics(): Observable<Metrics> {
    return this.http.get<Metrics>(`${this.apiUrl}/metrics`);
  }

  updateProject(project: Project): Observable<Project> {
    return this.http.put<Project>(`${this.apiUrl}/${project.id}`, project);
  }

  getTasks(projectId: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/${projectId}/tasks`);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.apiUrl}/tasks`, task);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/tasks/${task.id}`, task);
  }

  deleteTask(taskId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/tasks/${taskId}`);
  }
}
