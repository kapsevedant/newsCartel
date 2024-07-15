import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {GeneralComponent} from './pages/general/general.component';
import {EntertainmentComponent} from './pages/entertainment/entertainment.component';
import {SportsComponent} from './pages/sports/sports.component';
import {BusinessComponent} from './pages/business/business.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {HttpClientModule} from "@angular/common/http";
import {TechnologyComponent} from './pages/technology/technology.component';
import {WeatherComponent} from './pages/weather/weather.component';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GeneralComponent,
    EntertainmentComponent,
    SportsComponent,
    BusinessComponent,
    TechnologyComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
