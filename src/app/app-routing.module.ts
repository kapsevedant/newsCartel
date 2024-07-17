import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GeneralComponent} from "./pages/general/general.component";
import {BusinessComponent} from "./pages/business/business.component";
import {EntertainmentComponent} from "./pages/entertainment/entertainment.component";
import {SportsComponent} from "./pages/sports/sports.component";
import {TechnologyComponent} from "./pages/technology/technology.component";
import {HealthComponent} from "./pages/health/health.component";

const routes: Routes = [
  {
    path:'general',
    component:GeneralComponent,
  },
  {
    path:'business',
    component:BusinessComponent,
  },
  {
    path:'entertainment',
    component:EntertainmentComponent,
  },
  {
    path:'sports',
    component:SportsComponent,
  },
  {
    path:'technology',
    component:TechnologyComponent,
  },
  {
    path:'health',
    component:HealthComponent,
  },
  { path: '', redirectTo: '/general', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
