import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanetsService, Planet, Resident } from '../services/planets.service';

@Component({
  selector: 'app-planet-page',
  templateUrl: './planet-page.component.html',
  styleUrls: [
    './planet-page.component.scss',
    '../planets/planets.component.scss',
  ],
})
export class PlanetPageComponent implements OnInit {
  constructor(
    private planetsService: PlanetsService,
    private route: ActivatedRoute
  ) {}

  dataPlanet: Planet;
  id: string;
  residents: Resident[] = [];
  isLoadingPlanetError: boolean = false;
  isLoadingResidentsError: boolean = false;

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.planetsService
      .getData(`https://swapi.dev/api/planets/${this.id}`)
      .subscribe(
        (response: Planet) => {
          this.dataPlanet = response;
          response.residents.map((item: string) => {
            this.planetsService.getData(item).subscribe(
              (response: Resident) => {
                this.residents = [...this.residents, response];
              },
              (error) => {
                this.isLoadingResidentsError = true;
              }
            );
          });
        },
        (error) => {
          this.isLoadingPlanetError = true;
        }
      );
  }
}
