import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchUser'
})
export class SearchUserPipe implements PipeTransform {

  transform(users: any[], text: string): unknown {
    return text == '' ? users : users.filter(user => user.name.toLowerCase().includes(text.toLowerCase()) || user.email.toLowerCase().includes(text.toLowerCase()));
  }
}
