import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightCreationComponent } from './flight-creation.component';

describe('FlightCreationComponent', () => {
  let component: FlightCreationComponent;
  let fixture: ComponentFixture<FlightCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
