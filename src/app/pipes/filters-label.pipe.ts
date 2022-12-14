import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtersLabel',
})
export class FiltersLabelPipe implements PipeTransform {
  transform(value: string): string {
    if (value.startsWith('-')) {
      const sanitizied = value.replace('-', '');
      return `Most ${sanitizied}`;
    }
    return `Least ${value}`;
  }
}
