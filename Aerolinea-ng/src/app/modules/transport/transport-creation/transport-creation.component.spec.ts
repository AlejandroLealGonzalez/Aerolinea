import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportCreationComponent } from './transport-creation.component';

describe('TransportCreationComponent', () => {
  let component: TransportCreationComponent;
  let fixture: ComponentFixture<TransportCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransportCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
