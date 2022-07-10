import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetsService } from './planets/planets.service';
import { FormatDataCardPipe } from './format-data-card.pipe';
import { PlanetPageComponent } from './planet-page/planet-page.component';
import { AppRoutingModule } from './app-routing.module';
import { FormatDataCardPage } from './format-data-page';
import { FormatDataResidentPipe } from './format-data-resident.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    FormatDataCardPipe,
    FormatDataCardPage,
    FormatDataResidentPipe,
    PlanetPageComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [PlanetsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
