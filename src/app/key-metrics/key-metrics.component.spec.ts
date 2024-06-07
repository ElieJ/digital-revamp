import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkDragDropConnectedSortingGroupExample } from './key-metrics.component';

describe('CdkDragDropConnectedSortingGroupExample', () => {
  let component: CdkDragDropConnectedSortingGroupExample;
  let fixture: ComponentFixture<CdkDragDropConnectedSortingGroupExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdkDragDropConnectedSortingGroupExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdkDragDropConnectedSortingGroupExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
