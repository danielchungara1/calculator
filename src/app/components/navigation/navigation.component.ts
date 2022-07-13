import { Component, OnInit } from '@angular/core';
import {MegaMenuItem, MenuItem} from "primeng/api";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  items: MegaMenuItem[] = [];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label:'Sumas',
        icon:'pi pi-plus'
      },
      {
        label:'Restas',
        icon:'pi pi-minus'
      },
      {
        label:'Productos',
        icon:'pi pi-times'
      },
      {
        label:'Divisiones',
        icon:'pi pi-percentage'
      }
    ];
  }

}
