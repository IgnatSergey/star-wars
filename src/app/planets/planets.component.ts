import { Component, OnInit, Injectable } from '@angular/core';
import { PlanetsService } from './planets.service';

export interface DataPlanet {
  next: string;
  planets: object[];
}

interface Planet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: Array<string>;
  films: Array<string>;
  created: string;
  edited: string;
  url: string;
}

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss'],
})
export class PlanetsComponent implements OnInit {
  private url = 'https://swapi.dev/api/planets/?page=1';

  constructor(private planetsService: PlanetsService) {}

  dataPlanets: Array<any>=[];

  getAllPlanets(url: string) {
    this.planetsService.getPartPlanets(url).subscribe((response: any) => {
      if (response.next !== null) {
        this.getAllPlanets(response.next);
      }
      this.dataPlanets = [...this.dataPlanets, ...response.planets];
    });
  }

  ngOnInit(): void {
    this.getAllPlanets(this.url);
  }
}
