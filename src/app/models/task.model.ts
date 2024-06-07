export interface TaskRequest {
  title: string;
  description: string;
  dueDate: string;
  projectId: number;
}
export interface Task {
  id: number
  title: string;
  description: string;
  dueDate: string;
  projectId: number;
}
