import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeCrudComponent } from './employe-crud.component';

describe('EmployeCrudComponent', () => {
  let component: EmployeCrudComponent;
  let fixture: ComponentFixture<EmployeCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
