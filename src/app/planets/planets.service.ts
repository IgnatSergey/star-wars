import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DataPlanet } from './planets.component';

interface DataPartPlanet {
  count: string;
  next: string;
  previous: string;
  results: Array<DataPlanet>;
}

@Injectable()
export class PlanetsService {
  constructor(private http: HttpClient) {}

  getPartPlanets(url: string) {
    return this.http.get(url).pipe(
      map((res: any) => {
        return {next:res.next, planets:res.results}
      })
    )
  }

  getOneData(url: string) {
    return this.http.get(url);
  }
}
