// src/app/models/task.model.ts
export interface Task {
    id: string;
    projectId: string;
    name: string;
    priority: string;
    dueDate: Date;
  }
  