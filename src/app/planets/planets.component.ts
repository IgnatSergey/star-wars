import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  PlanetsService,
  DataPartPlanet,
  Planet,
} from '../services/planets.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss'],
})
export class PlanetsComponent implements OnInit {
  constructor(private planetsService: PlanetsService) {}
  url = 'https://swapi.dev/api/planets/';
  isLoadingError: boolean = false;

  dataPlanets: Array<Planet> = [];

  getAllPlanets(url: string) {
    this.planetsService.getData(url).subscribe(
      (response: DataPartPlanet) => {
        if (response.next !== null) {
          this.getAllPlanets(response.next);
        }
        this.dataPlanets = [...this.dataPlanets, ...response.results];
      },
      (error: HttpErrorResponse) => {
        this.isLoadingError = true;
      }
    );
  }

  ngOnInit(): void {
    this.getAllPlanets(this.url);
  }
}
