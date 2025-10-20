import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortend',
})
export class ShortendPipe implements PipeTransform {
  transform(value: any, limit: number = 5) {
    if (value) {
      return value.length > limit ? value.substring(0, limit) + '...' : value;
    }
  }
}
