// src/app/models/project.model.ts
// export interface Project {
//     id: string;
//     name: string;
//     owner: string;
//     startDate: Date;
//     deadline: Date;
//     completionPercentage: number;
//     overdueTasks: number;
//   }

  // src/app/models/project.model.ts
// src/app/models/project.model.ts
export interface Project {
  id: number;
  name: string;
  status: string;
  completionPercentage: number;
  owner: string;
  startDate: Date;
  deadline: Date;
}

  