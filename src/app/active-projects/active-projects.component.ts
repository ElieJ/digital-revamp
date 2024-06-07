// src/app/active-projects/active-projects.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectService } from '../project.service';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-active-projects',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [ProjectService],
  templateUrl: './active-projects.component.html',
  styleUrls: ['./active-projects.component.css']
})
export class ActiveProjectsComponent implements OnInit {
  activeProjects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getActiveProjects().subscribe(projects => {
      this.activeProjects = projects;
    });
  }
}
