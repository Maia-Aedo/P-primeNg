import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.items = [
      {
        /* clave | valor
        label: "Home",
        icon: "pi pi-home"
      },
      {
        label: "Acciones",
        icon: "pi pi-bars",
        /* dropdown */
        items: [
          {
            label: "Agregar",
            icon: "pi pi-plus"
          },
          {
            label: "Editar",
            icon: "pi pi-pencil"
          },
          {
            label: "Eliminar",
            icon: "pi pi-trash"
          }
        ]
      }
    ];
  }
  title = 'primeNg';
  items: MenuItem[] = [];
  clohes: String[] = [
    'url:'
  ]
}
