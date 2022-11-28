import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JourneyRoutingModule } from './journey-routing.module';
import { JourneyCreationComponent } from './journey-creation/journey-creation.component';
import { JourneyShowComponent } from './journey-show/journey-show.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JourneysService } from 'src/app/services/journeys.service';


@NgModule({
  declarations: [
    JourneyCreationComponent,
    JourneyShowComponent
  ],
  imports: [
    CommonModule,
    JourneyRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [JourneysService]
})
export class JourneyModule { }
