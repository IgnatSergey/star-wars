import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appFormatDataPage'
})

export class FormatDataCardPage implements PipeTransform {
  excludedParameters = ['residents', 'films', 'created', 'edited', 'url', 'name'];

  transform(startData: any) {
    let data = Object.entries(startData);
    data = data.filter(([parametr, value]) => {
      return !this.excludedParameters.find((item) => parametr === item)
      && value !== 'unknown';
  })
    return data;
  }
}
