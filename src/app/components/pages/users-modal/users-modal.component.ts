import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-users-modal',
  templateUrl: './users-modal.component.html',
  styleUrls: ['./users-modal.component.scss']
})
export class UsersModalComponent implements OnInit {
  @Input() modal;
  @Input() newUser;
  @Output() closeEvent = new EventEmitter<boolean>();
  @Output() save = new EventEmitter<any>();
  roles = [];
  @Input() user;

  constructor(private apiService: ApiService) {
    this.apiService.getRoles().subscribe((resp: any) => {
      this.roles = resp['roles'];
    });

  }

  ngOnInit(): void {
  }

  closeModal() {
    this.closeEvent.emit(true);
  }

  saveUser() {
    this.save.emit(this.user);
  }
}
