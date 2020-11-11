import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users = [];
  newUser = true;
  roles = [];
  modal = false;
  modalList = false;
  rolValue = 0;
  sortValue = 'asc';
  alert = false;
  search = '';
  headers = [
    {
      name: 'Foto'
    },
    {
      name: 'Nombre'
    },
    {
      name: 'Apellido paterno'
    },
    {
      name: 'Apellido materno'
    },
    {
      name: 'Correo'
    },
    {
      name: 'Rol'
    },
    {
      name: 'Status'
    }
  ];
  user = {};
  defaultUser = {
    picture: 'https://www.hardiagedcare.com.au/wp-content/uploads/2019/02/default-avatar-profile-icon-vector-18942381.jpg',
    name: '',
    fathersLastName: '',
    mothersLastName: '',
    email: '',
    roleId: 1,
    active: true
  };

  constructor(private apiService: ApiService) {
    this.apiService.getUsers().subscribe(res => {
      this.users = res['users']
    });
    this.apiService.getRoles().subscribe((resp: any) => {
      this.roles = resp['roles'];
    });
  }

  ngOnInit(): void {
  }

  changeStatus(user) {
    user.active = !user.active;
  }

  deleteUser(index) {
    this.users.splice(index, 1);
  }

  addUser() {
    this.user = Object.assign({},this.defaultUser);
    this.modal = true;
    this.newUser = true;
  }

  closeModal(event) {
    this.modal = !event;
  }

  editUser(user) {
    this.user = user;
    this.modal = true;
    this.newUser = false;
  }

  saveUser(event) {
    this.modal = false;
    this.users.unshift(Object.assign({}, event));
    this.alert = true;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.users, event.previousIndex, event.currentIndex);
  }

  closeModalList(event) {
    this.modalList = !event;
  }

}
