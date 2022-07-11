import { Component, Input } from '@angular/core';
import { Planet } from '../services/planets.service';

@Component({
  selector: 'app-planet-division',
  templateUrl: './planet-division.component.html',
  styleUrls: [
    './planet-division.component.scss',
    '../planets/planets.component.scss',
  ],
})
export class PlanetDivisionComponent {
  @Input() planet: Planet;
}
