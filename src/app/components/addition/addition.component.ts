import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {

  refreshSubject: Subject<void> = new Subject<void>();
  levelSubject: Subject<number> = new Subject<number>();
  cantLines = new Array<number>(5);
  level: number = 1;

  refreshLineAddition() {
    this.refreshSubject.next();
  }

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.levelSubject.next(params['id']);
      this.level = params['id'];
    })
  }

}
