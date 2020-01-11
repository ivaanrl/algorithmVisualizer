import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchingVisualizerComponent } from './searching-visualizer.component';

describe('SearchingVisualizerComponent', () => {
  let component: SearchingVisualizerComponent;
  let fixture: ComponentFixture<SearchingVisualizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchingVisualizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchingVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
