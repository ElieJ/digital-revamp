// src/app/models/project.model.ts
export interface Project {
    id: string;
    name: string;
    owner: string;
    startDate: Date;
    deadline: Date;
    completionPercentage: number;
    overdueTasks: number;
  }
  