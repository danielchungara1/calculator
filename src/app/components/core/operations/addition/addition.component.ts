import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {Level} from "../../interfaces/Level";
import {ToastMessageService} from "../../../services/toast-message.service";
import {DEFAULT_LINE_OPERANDS} from "../../interfaces/LineOperands";
import {OperandsGenerator, OperationResultFn} from "../../interfaces/Functions";
import {NumbersService} from "../../../../util/numbers.service";

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {

  // cantRows = new Array<number>(5)
  //
  // // @ts-ignore
  // levels: Level[];
  // // @ts-ignore
  // currentLevel: Level;
  //
  // results = new Map<number, boolean>();
  //
  // timer: number = 0;
  // TIMEOUT_TIMER: number = 1000;
  // timerInterval: any;
  // // @ts-ignore
  // onTimer: boolean;
  //
  // //---------------------------------------------------------------
  // // Subjects
  // //---------------------------------------------------------------
  // refreshSubject: Subject<void> = new Subject<void>();
  // levelSubject: Subject<number> = new BehaviorSubject<number>(1);

  operandsGeneratorForAddition: OperandsGenerator = _ => DEFAULT_LINE_OPERANDS;
  operationResultFnForAddition: OperationResultFn = (op1, op2) => op1 + op2

  constructor(private numbersService :NumbersService) {
  }

  ngOnInit(): void {

    this.operandsGeneratorForAddition = level => {
      switch (String(level)) {
        // case "1":
        //   this.firstValue = this.numbersService.getRandomNumberBetween(10, 99)
        //   this.secondValue = this.numbersService.getRandomNumberBetween(10, 99)
        //   break
        // case "2":
        //   this.firstValue = this.numbersService.getRandomNumberBetween(10, 99)
        //   this.secondValue = this.numbersService.getRandomNumberBetween(100, 999)
        //   break
        // case "3":
        //   this.firstValue = this.numbersService.getRandomNumberBetween(100, 999)
        //   this.secondValue = this.numbersService.getRandomNumberBetween(100, 999)
        //   break
        default:
          // this.firstValue = this.numbersService.getRandomNumberBetween(10, 99)
          // this.secondValue = this.numbersService.getRandomNumberBetween(10, 99)
          // break
          return {
            operand1: this.numbersService.getRandomNumberBetween(10, 99),
            operand2: this.numbersService.getRandomNumberBetween(10, 99)
          }
      }
    };

    // //---------------------------------------------------------------
    // // Observers
    // //---------------------------------------------------------------
    // this.refreshSubject.asObservable().subscribe(_ => {
    //   this.initializeTimer()
    // })
    // this.levelSubject.asObservable().subscribe(_ => {
    //   this.initializeTimer()
    // })
    //
    // //---------------------------------------------------------------
    // // Levels
    // //---------------------------------------------------------------
    // this.levels = [
    //   {name: 'Nivel 1', code: 1},
    //   {name: 'Nivel 2', code: 2},
    //   {name: 'Nivel 3', code: 3}
    // ];
    //
    // // @ts-ignore
    // this.currentLevel = this.levels.find(level => level.code === this.fetchLastLevelOrElseStore(1))
    // this.levelSubject.next(this.fetchLastLevelOrElseStore(1))
    //
    // //---------------------------------------------------------------
    // // Results
    // //---------------------------------------------------------------
    // this.initializeResultsMap()

  }
  //
  // refreshLineAddition() {
  //   this.refreshSubject.next();
  // }
  //
  // handleChangeLevel(level: Level) {
  //   this.levelSubject.next(level.code)
  //   this.storeLastLevel(level.code)
  // }
  //
  // handleNewLineResult($event: any) {
  //   this.results.set($event.id, $event.status)
  //   // Si todas las lineas de suma estan ok invocar evento refresh
  //   if (Array.from(this.results.values()).every(value => value)) {
  //     this.messageService.showSuccess({
  //       message: "Resuelto correctamente en " + this.timerFormatted() + ".",
  //       options: {
  //         positionClass: "toast-bottom-center",
  //         timeOut: 2000,
  //         progressBar: true
  //       }
  //     });
  //     this.refreshLineAddition();
  //     this.initializeResultsMap();
  //   }
  // }
  //
  // initializeResultsMap() {
  //   for (let currentLine = 0; currentLine < this.cantRows.length; currentLine++) {
  //     this.results.set(currentLine, false)
  //   }
  // }
  //
  // switchTimer() {
  //   if (this.onTimer) {
  //     this.setTimerInterval()
  //   } else {
  //     clearTimeout(this.timerInterval)
  //   }
  // }
  //
  // setTimerInterval() {
  //   this.timerInterval = setInterval(() => {
  //     this.timer++
  //   }, this.TIMEOUT_TIMER);
  // }
  //
  // initializeTimer() {
  //   this.timer = 0
  //   this.onTimer = true
  //   clearTimeout(this.timerInterval)
  //   this.setTimerInterval()
  // }
  //
  // timerFormatted(): string {
  //   let minutes = Math.floor(this.timer / 60)
  //   let seconds = this.timer - minutes * 60
  //   return minutes === 0
  //     ? seconds.toString().concat(' segundos')
  //     : minutes.toString()
  //       .concat(' minutos,')
  //       .concat(seconds.toString())
  //       .concat(' segundos');
  // }
  //
  // storeLastLevel(level: number) {
  //   localStorage.setItem("last_level_addition", String(level))
  // }
  //
  // fetchLastLevelOrElseStore(defaultLevel: number): number {
  //   let lastLevel = defaultLevel
  //   if (!localStorage.getItem("last_level_addition")) {
  //     this.storeLastLevel(lastLevel)
  //   } else {
  //     lastLevel = Number(localStorage.getItem("last_level_addition"))
  //   }
  //   return lastLevel
  // }


}
