import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FisherYatesComponent } from './fisher-yates.component';

describe('FisherYatesComponent', () => {
  let component: FisherYatesComponent;
  let fixture: ComponentFixture<FisherYatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FisherYatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FisherYatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
