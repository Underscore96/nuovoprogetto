import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentcardComponent } from './studentcard.component';

describe('StudentcardComponent', () => {
  let component: StudentcardComponent;
  let fixture: ComponentFixture<StudentcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentcardComponent]
    });
    fixture = TestBed.createComponent(StudentcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
