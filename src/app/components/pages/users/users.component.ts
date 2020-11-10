import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users = [];
  roles = [];
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

  getRol(rolId) {
    let rol = this.roles.find(rol => rol.id === rolId);
    return rol.position;
  }

  changeStatus(user) {
    user.active = !user.active;
  }

  deleteUser(index) {
    this.users.splice(index, 1);
  }

}
