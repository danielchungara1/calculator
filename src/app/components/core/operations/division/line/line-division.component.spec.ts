import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineDivisionComponent } from './line-division.component';

describe('AdditionLineComponent', () => {
  let component: LineDivisionComponent;
  let fixture: ComponentFixture<LineDivisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineDivisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
