import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyCreationComponent } from './journey-creation.component';

describe('JourneyCreationComponent', () => {
  let component: JourneyCreationComponent;
  let fixture: ComponentFixture<JourneyCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourneyCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JourneyCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
