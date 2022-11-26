import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JourneyRoutingModule } from './journey-routing.module';
import { JourneyCreationComponent } from './journey-creation/journey-creation.component';
import { JourneyShowComponent } from './journey-show/journey-show.component';


@NgModule({
  declarations: [
    JourneyCreationComponent,
    JourneyShowComponent
  ],
  imports: [
    CommonModule,
    JourneyRoutingModule
  ]
})
export class JourneyModule { }
