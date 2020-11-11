import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-users-modal-list',
  templateUrl: './users-modal-list.component.html',
  styleUrls: ['./users-modal-list.component.scss']
})
export class UsersModalListComponent implements OnInit {
  users = [];
  @Output() closeEvent = new EventEmitter<boolean>();

  constructor(private apiService: ApiService) {
    this.apiService.getUsers().subscribe(res => {
      for(let i = 0; i < 9; i++) {
        this.users.push(res['users'][i]);
      }
    });
  }

  ngOnInit(): void {
  }

  closeModal() {
    this.closeEvent.emit(true);
  }

}
