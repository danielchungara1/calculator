import {Component, Input, OnInit} from '@angular/core';
import {OperandsGenerator, OperationResultFn} from "../interfaces/Functions";
import {DEFAULT_LINE_OPERANDS} from "../interfaces/LineOperands";
import {BehaviorSubject, Subject} from "rxjs";
import {DEFAULT_LEVEL, DEFAULT_LEVELS, Level} from "../interfaces/Level";
import {ToastMessageService} from "../../services/toast/toast-message.service";

interface LineParams {operand1: number, operand2: number, result: number}

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  @Input() title: string = "Title";
  @Input() symbolOperation: string = "+";
  @Input() nameOperation: string = "addition";
  @Input() lines: number = 5;
  @Input() operandsGenerator: OperandsGenerator = _ => DEFAULT_LINE_OPERANDS;
  @Input() operationResultFn: OperationResultFn = (op1, op2) => 2;

  refreshSubject: Subject<void> = new Subject<void>();
  levelSubject: Subject<number> = new BehaviorSubject<number>(1);

  rows: Array<number> = new Array<number>()

  levels: Level[] = DEFAULT_LEVELS;
  currentLevel: Level = DEFAULT_LEVEL;

  results = new Map<number, boolean>();

  timerOn: boolean = true;
  timerInterval: any;
  timer: number = 0;
  TIMEOUT_TIMER: number = 1000;

  constructor(private messageService: ToastMessageService) {
  }

  ngOnInit(): void {
    this.rows = new Array<number>(this.lines)

    // @ts-ignore
    this.currentLevel = this.levels.find(level => level.code === this.fetchLastLevelOrElseStore(1))
    this.levelSubject.next(this.currentLevel.code)

    this.initializeResultsMap()

    this.refreshSubject.asObservable().subscribe(_ => {
      this.initializeTimer()
    })
    this.levelSubject.asObservable().subscribe(_ => {
      this.initializeTimer()
    })

  }

  refreshLineAddition() {
    this.refreshSubject.next();
  }

  handleChangeLevel(level: Level) {
    this.levelSubject.next(level.code)
    this.storeLastLevel(level.code)
  }

  fetchLastLevelOrElseStore(defaultLevel: number): number {
    let lastLevel = defaultLevel
    if (!localStorage.getItem("last_level_" + this.nameOperation)) {
      this.storeLastLevel(lastLevel)
    } else {
      lastLevel = Number(localStorage.getItem("last_level_" + this.nameOperation))
    }
    return lastLevel
  }

  storeLastLevel(level: number) {
    localStorage.setItem("last_level_" + this.nameOperation, String(level))
  }

  initializeResultsMap() {
    for (let currentLine = 0; currentLine < this.rows.length; currentLine++) {
      this.results.set(currentLine, false)
    }
  }

  // Si todas las lineas de suma estan ok invocar evento refresh
  handleNewLineResult($event: any) {
    this.results.set($event.id, $event.status)
    if (Array.from(this.results.values()).every(value => value)) {
      this.messageService.showSuccess({
        message: "Resuelto correctamente en " + this.timerFormatted() + ".",
        options: {
          positionClass: "toast-bottom-center",
          timeOut: 2500,
          progressBar: true
        }
      });
      this.refreshLineAddition();
      this.initializeResultsMap();
    }
  }

  switchTimer() {
    if (this.timerOn) {
      this.setTimerInterval()
    } else {
      clearTimeout(this.timerInterval)
    }
  }

  setTimerInterval() {
    this.timerInterval = setInterval(() => {
      this.timer++
    }, this.TIMEOUT_TIMER);
  }

  initializeTimer() {
    this.timer = 0
    this.timerOn = true
    clearTimeout(this.timerInterval)
    this.setTimerInterval()
  }

  timerFormatted(): string {
    let minutes = Math.floor(this.timer / 60)
    let seconds = this.timer - minutes * 60
    return minutes === 0
      ? seconds.toString().concat(' segundos')
      : minutes.toString()
        .concat(' minutos,')
        .concat(seconds.toString())
        .concat(' segundos');
  }

}
