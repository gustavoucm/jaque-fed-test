import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusUser'
})
export class StatusUserPipe implements PipeTransform {

  transform(users: any[], order: number): unknown {
    return order == 0 ? users : users.filter(user => user.roleId == order);
  }

}
