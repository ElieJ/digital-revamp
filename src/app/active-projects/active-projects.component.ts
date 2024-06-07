// src/app/active-projects/active-projects.component.ts
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-active-projects',
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
