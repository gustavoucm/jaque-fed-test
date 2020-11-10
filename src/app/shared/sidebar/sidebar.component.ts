import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menu = [
    {
      icon: 'assets/img/icons/user.png',
      text: 'Usuarios'
    },
    {
      icon: 'assets/img/icons/slider.png',
      text: 'Slider'
    },
    {
      icon: 'assets/img/icons/reportes.png',
      text: 'Reportes'
    },
    {
      icon: 'assets/img/icons/terminos.png',
      text: 'Términos'
    },
    {
      icon: 'assets/img/icons/redes.png',
      text: 'Redes'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
