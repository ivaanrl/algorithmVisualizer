import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAlgorithmsVisualizerComponent } from './basic-algorithms-visualizer.component';

describe('BasicAlgorithmsVisualizerComponent', () => {
  let component: BasicAlgorithmsVisualizerComponent;
  let fixture: ComponentFixture<BasicAlgorithmsVisualizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicAlgorithmsVisualizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicAlgorithmsVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
