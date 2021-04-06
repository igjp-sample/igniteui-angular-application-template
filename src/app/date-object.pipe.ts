import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateObject'
})
export class DateObjectPipe implements PipeTransform {

  transform(value: string): Date {
    return new Date(value);
  }

}
