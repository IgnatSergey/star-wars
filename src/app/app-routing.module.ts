import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PlanetsComponent } from './planets/planets.component';
import { PlanetPageComponent } from "./planet-page/planet-page.component";

const appRoutes: Routes = [
  { path: '', component: PlanetsComponent},
  { path: ':id', component: PlanetPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
