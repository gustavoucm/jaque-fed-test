import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortUser'
})
export class SortUserPipe implements PipeTransform {

  transform(users: any[], order: string): any {
    if (order === 'asc') {
      return users.sort( (a, b) : any=> {
        return a.name.localeCompare(b.name);
      });
    } else {
      return users.sort( (a, b) : any=> {
        return b.name.localeCompare(a.name);
      });
    }
  }

}
