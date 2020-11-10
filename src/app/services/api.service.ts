import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = environment.base;

  constructor(private http: HttpClient) { }

  getUsers() {
    console.log('hoi');
    return this.http.get(`${this.baseUrl}users.json`);
  }

  getRoles() {
    return this.http.get(`${this.baseUrl}roles.json`);
  }
}
