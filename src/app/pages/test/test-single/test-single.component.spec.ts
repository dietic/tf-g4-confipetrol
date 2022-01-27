import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSingleComponent } from './test-single.component';

describe('TestSingleComponent', () => {
  let component: TestSingleComponent;
  let fixture: ComponentFixture<TestSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
