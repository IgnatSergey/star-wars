import { Component, Input, OnInit } from '@angular/core';
import { PlanetsService, Resident } from '../services/planets.service';

@Component({
  selector: 'app-resident-division',
  templateUrl: './resident-division.component.html',
  styleUrls: [
    './resident-division.component.scss',
    '../planets/planets.component.scss',
  ],
})
export class ResidentDivisionComponent implements OnInit {
  constructor(private planetsService: PlanetsService) {}

  @Input() residentsUrl: string[] = [];
  @Input() title: string;
  hasResidents: boolean = false;
  isLoadingResidentsError: boolean = false;
  residents: Resident[] = [];
  residentsCurrent: Resident[];

  ngOnInit() {
    this.residentsUrl.map((item: string) => {
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

    if (this.residentsUrl.length !== 0) {
      this.hasResidents = true;
    }
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
