import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAAAComponent } from './register-aaa.component';

describe('RegisterAAAComponent', () => {
  let component: RegisterAAAComponent;
  let fixture: ComponentFixture<RegisterAAAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterAAAComponent]
    });
    fixture = TestBed.createComponent(RegisterAAAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
