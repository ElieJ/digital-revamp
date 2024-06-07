import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { ProjectService } from '../project.service';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-active-projects',
  standalone: true, // Ensure the component is standalone
  imports: [CommonModule], // Include CommonModule in the imports array
  templateUrl: './active-projects.component.html',
  styleUrls: ['./active-projects.component.css']
})
export class ActiveProjectsComponent implements OnInit {
  activeProjects: Project[] = [];

  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit(): void {
    this.projectService.getActiveProjects().subscribe(projects => {
      this.activeProjects = projects;
    });
  }

  editProject(projectId: string): void {
    this.router.navigate(['/project-details', projectId]);
  }
}
