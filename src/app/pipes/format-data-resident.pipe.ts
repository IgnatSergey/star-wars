import { Pipe, PipeTransform } from '@angular/core';
import { Resident } from '../services/planets.service';

@Pipe({
  name: 'appFormatResidentPipe',
})
export class FormatDataResidentPipe implements PipeTransform {

  excludedParameters: string[] = [
    'films',
    'created',
    'edited',
    'url',
    'species',
    'vehicles',
    'starships',
    'name',
    'homeworld',
  ];

  loadingParametrs: string[][] = [['films', 'title']];

  transform(startData: Resident) {
    let data = Object.entries(startData);
    return data
      .filter(([parametr, value]) => {
        return (
          !this.excludedParameters.find((item) => parametr === item) &&
          value !== 'unknown'
        );
      })
      .map(([parametr, value]) => {
        if (parametr === 'height') {
          value = value + ' cm';
        } else if (parametr === 'mass') {
          value = value + ' kg';
        }
        parametr = parametr[0].toUpperCase() + parametr.slice(1);
        parametr = parametr.split('_').join(' ');
        return [parametr, value];
      });
  }
}
