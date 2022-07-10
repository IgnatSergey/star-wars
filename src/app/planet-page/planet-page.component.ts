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
  residentsCurrent: Resident[];
  residents: Resident[] = [];
  genderFilterValue: string;
  hasResidents: boolean = false;
  isLoadingPlanetError: boolean = false;
  isLoadingResidentsError: boolean = false;

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.planetsService
      .getData(`https://swapi.dev/api/planets/${this.id}`)
      .subscribe(
        (response: Planet) => {
          this.dataPlanet = response;
          if (response.residents.length !== 0) {
            this.hasResidents = true;
          }
          response.residents.map((item: string) => {
            this.planetsService.getData(item).subscribe(
              (response: Resident) => {
                this.residents = [...this.residents, response];
                this.residentsCurrent = this.residents.slice();
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

  filter(male: HTMLInputElement) {
    this.residentsCurrent = this.residents.slice();
    if (male.value === 'all') {
      return;
    }
    this.residentsCurrent = this.residents.filter((item) => {
      return item.gender === male.value;
    });
  }
}
