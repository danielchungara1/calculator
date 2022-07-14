import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {Level} from "./Level";
import {ToastMessageService} from "../services/toast-message.service";

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

  results = new Map<number, boolean>();

  //---------------------------------------------------------------
  // Subjects
  //---------------------------------------------------------------
  refreshSubject: Subject<void> = new Subject<void>();
  levelSubject: Subject<number> = new BehaviorSubject<number>(1);

  constructor(private messageService: ToastMessageService) {
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

    this.initializeResultsMap()

  }

  refreshLineAddition() {
    this.refreshSubject.next();
  }

  handleChangeLevel(level: Level) {
    this.levelSubject.next(level.code)
  }

  handleNewLineResult($event: any) {
    this.results.set($event.id, $event.status)
    // Si todas las lineas de suma estan ok invocar evento refresh
    if(Array.from(this.results.values()).every(value => value)) {
      this.refreshLineAddition()
      this.messageService.showSuccess({
        message: "Resuelto exitosamente.",
        options: {
          positionClass: "toast-bottom-center",
          timeOut: 2000,
          progressBar: true
        }
      })
      this.initializeResultsMap()
    }
  }

  initializeResultsMap() {
    for (let currentLine = 0; currentLine < this.cantRows.length; currentLine++) {
      this.results.set(currentLine, false)
    }
  }
}
