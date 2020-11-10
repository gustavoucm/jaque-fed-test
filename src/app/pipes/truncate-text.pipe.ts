import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText'
})
export class TruncateTextPipe implements PipeTransform {

  transform(value: string, args: []): string {
    if (value.length <= 18) {
      return value;
    }
    return value.substr(0, 18) + '...';
  }

}
