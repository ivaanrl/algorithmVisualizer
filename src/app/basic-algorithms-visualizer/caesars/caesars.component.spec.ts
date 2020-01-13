import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaesarsComponent } from './caesars.component';

describe('CaesarsComponent', () => {
  let component: CaesarsComponent;
  let fixture: ComponentFixture<CaesarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaesarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaesarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
