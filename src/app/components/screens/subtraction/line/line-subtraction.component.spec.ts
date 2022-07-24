import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineSubtractionComponent } from './line-subtraction.component';

describe('AdditionLineComponent', () => {
  let component: LineSubtractionComponent;
  let fixture: ComponentFixture<LineSubtractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineSubtractionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineSubtractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
