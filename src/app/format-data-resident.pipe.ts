import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appFormatResidentPipe',
})
export class FormatDataResidentPipe implements PipeTransform {
  excludedParameters = [
    'residents',
    'films',
    'created',
    'edited',
    'url',
    'homeworld',
    'films',
    'species',
    'vehicles',
    'starships',
    'name',
  ];

  transform(startData: any) {
    let data = Object.entries(startData);
    return data
      .filter(([parametr, value]) => {
        return (
          !this.excludedParameters.find((item) => parametr === item) &&
          value !== 'unknown'
        );
      })
      .map(([parametr, value]) => {
        if (parametr === 'rotation_period') {
          value = value + ' hours';
        } else if (parametr === 'orbital_period') {
          value = value + ' days';
        } else if (parametr === 'diameter') {
          value = value + ' km';
        } else if (parametr === 'gravity') {
          value = value + ' Gs';
        } else if (parametr === 'surface_water') {
          value = value + ' %';
        }
        return [parametr[0].toUpperCase() + parametr.slice(1), value];
      });
  }
}
