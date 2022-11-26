import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyShowComponent } from './journey-show.component';

describe('JourneyShowComponent', () => {
  let component: JourneyShowComponent;
  let fixture: ComponentFixture<JourneyShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourneyShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JourneyShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
