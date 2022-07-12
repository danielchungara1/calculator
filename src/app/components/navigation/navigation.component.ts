import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label:'Sumas',
        icon:'pi pi-fw pi-power-off',
        items: [
          {label: 'Nivel 1', routerLink: ['addition', 1]},
          {label: 'Nivel 2', routerLink: ['addition', 2]},
        ]
      }
    ];
  }

}
