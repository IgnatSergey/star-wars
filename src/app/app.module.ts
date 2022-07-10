import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetPageComponent } from './planet-page/planet-page.component';
import { PlanetsService } from './services/planets.service';
import { FormatDataCardPipe } from './pipes/format-data-card.pipe';
import { FormatDataResidentPipe } from './pipes/format-data-resident.pipe';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    FormatDataCardPipe,
    FormatDataResidentPipe,
    PlanetPageComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [PlanetsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
