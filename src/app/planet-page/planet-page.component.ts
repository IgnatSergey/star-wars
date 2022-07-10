import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanetsService } from '../planets/planets.service';

@Component({
  selector: 'app-planet-page',
  templateUrl: './planet-page.component.html',
  styleUrls: ['./planet-page.component.scss','../planets/planets.component.scss'],
})
export class PlanetPageComponent implements OnInit {
  constructor(
    private planetsService: PlanetsService,
    private route: ActivatedRoute
  ) {}

  dataPlanet: any = {};
  id: string = '';
  residentsCurrent: any[] = [];
  residents: any[] = [];
  maleFilter: string = '';

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.planetsService
      .getOneData(`https://swapi.dev/api/planets/${this.id}`)
      .subscribe((response: any) => {
        this.dataPlanet = response;
        response.residents.map((item: string) => {
          this.planetsService.getOneData(item).subscribe((response: any) => {
            this.residents = [...this.residents, response];
            this.residentsCurrent = this.residents.slice();
          });
        });
      });

    console.log(this.dataPlanet);
  }

  filter(male: HTMLInputElement) {
    this.residentsCurrent = this.residents.slice();
    if (male.value === 'all') {
      return;
    }
    this.residentsCurrent = this.residents.filter((item) => {
      return item.gender === male.value;
    });

    console.log(male.value);
  }
}
