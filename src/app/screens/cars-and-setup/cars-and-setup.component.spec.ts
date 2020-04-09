import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsAndSetupComponent } from './cars-and-setup.component';

describe('CarsAndSetupComponent', () => {
  let component: CarsAndSetupComponent;
  let fixture: ComponentFixture<CarsAndSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsAndSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsAndSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
