import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAAComponent } from './register-aa.component';

describe('RegisterAAComponent', () => {
  let component: RegisterAAComponent;
  let fixture: ComponentFixture<RegisterAAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterAAComponent]
    });
    fixture = TestBed.createComponent(RegisterAAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
