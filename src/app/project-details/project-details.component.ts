import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ProjectDetailsComponent implements OnInit {
  projectId!: number;
  tasks: Task[] = [];
  taskForm: Task = {
    id: 0,
    title: '',
    description: '',
    dueDate: '',
    projectId: 0
  };
  editingTask = false;

  constructor(private route: ActivatedRoute, private taskService: TaskService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.projectId = +id;
        this.loadTasks();
      } else {
        console.error('Project ID is null');
        // Handle the error appropriately, e.g., navigate away or show an error message
      }
    });
  }

  loadTasks(): void {
    if (this.projectId !== undefined) {
      this.taskService.getTasksByProjectId(this.projectId).subscribe(
        (data: Task[]) => {
          this.tasks = data;
        },
        (error: any) => {
          console.error('Error fetching tasks:', error);
        }
      );
    }
  }

  saveTask(): void {
    this.taskForm.projectId = this.projectId; // Ensure the task is associated with the current project
    if (this.editingTask) {
      this.taskService.updateTask(this.taskForm).subscribe(
        () => {
          this.loadTasks();
          this.resetForm();
        },
        (error: any) => {
          console.error('Error updating task:', error);
        }
      );
    } else {
      this.taskService.addTask(this.taskForm).subscribe(
        (newTask: Task) => { // Handle the response to get the new task with its ID
          this.tasks.push(newTask); // Add the new task to the task list
          this.resetForm();
        },
        (error: any) => {
          console.error('Error adding task:', error);
        }
      );
    }
  }

  editTask(task: Task): void {
    this.taskForm = { ...task };
    this.editingTask = true;
  }

  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId).subscribe(
      () => {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
      },
      (error: any) => {
        console.error('Error deleting task:', error);
      }
    );
  }

  cancelEdit(): void {
    this.resetForm();
  }

  resetForm(): void {
    this.taskForm = {
      id: 0,
      title: '',
      description: '',
      dueDate: '',
      projectId: this.projectId
    };
    this.editingTask = false;
  }
}
