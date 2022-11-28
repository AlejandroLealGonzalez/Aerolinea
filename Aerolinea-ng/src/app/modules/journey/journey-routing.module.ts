import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JourneyCreationComponent } from './journey-creation/journey-creation.component';
import { JourneyShowComponent } from './journey-show/journey-show.component';

const routes: Routes = [
  {
    path: "journey-creation",
    component: JourneyCreationComponent
  },
  {
    path: "journey-show",
    component: JourneyShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JourneyRoutingModule { }
