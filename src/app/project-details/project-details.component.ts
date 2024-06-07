import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../models/project.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  project: Project | undefined;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    // Fetch project details here or initialize
  }

  updateProject(): void {
    if (this.project) {
      this.projectService.updateProject(this.project).subscribe();
    }
  }
}
