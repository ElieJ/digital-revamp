import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'cdk-drag-drop-connected-sorting-group-example',
  templateUrl: './key-metrics.component.html',
  styleUrls: ['./key-metrics.component.css'],
  standalone: true,
  imports: [CdkDropListGroup, CdkDropList, CdkDrag, CommonModule, HttpClientModule],
})
export class CdkDragDropConnectedSortingGroupExample implements OnInit {
  todo: string[] = [];
  done: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.http.get<any[]>('http://localhost:5172/api/tasks').subscribe(
      (tasks) => {
        this.todo = tasks.map(task => task.title);
        console.log(tasks);
      },
      (error) => {
        console.error('Failed to load tasks', error);
      }
    );
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
