import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {

  refreshSubject: Subject<void> = new Subject<void>();
  cantLines = new Array<number>(5);

  refreshLineAddition() {
    this.refreshSubject.next();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
