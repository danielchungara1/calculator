import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {Level} from "./Level";

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {

  cantRows = new Array<number>(5)

  // @ts-ignore
  levels: Level[];
  // @ts-ignore
  currentLevel: Level;

  //---------------------------------------------------------------
  // Subjects
  //---------------------------------------------------------------
  refreshSubject: Subject<void> = new Subject<void>();
  levelSubject: Subject<number> = new BehaviorSubject<number>(1);

  constructor() {
  }

  ngOnInit(): void {
    this.levels = [
      {name: 'Nivel 1', code: 1},
      {name: 'Nivel 2', code: 2},
      {name: 'Nivel 3', code: 3}
    ];
    // @ts-ignore
    this.currentLevel = this.levels.find(level => level.code === 1)
    this.levelSubject.next(1)
  }

  refreshLineAddition() {
    this.refreshSubject.next();
  }

  handleChangeLevel(level: Level) {
    this.levelSubject.next(level.code)
  }
}
