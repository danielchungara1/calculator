import {Component, Input, OnInit} from '@angular/core';
import {OperandsGenerator, OperationResultFn} from "../interfaces/Functions";
import {DEFAULT_LINE_OPERANDS} from "../interfaces/LineOperands";
import {Subject} from "rxjs";

interface LineParams {operand1: number, operand2: number, result: number}

@Component({
  selector: 'app-operation-abstract',
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

  rows: Array<number> = new Array<number>()

  constructor() {
  }

  ngOnInit(): void {
    this.rows = new Array<number>(this.lines)
    // for (let i = 0; i < 5; i++) {
    //   let operands = this.operandsGenerator(1)
    //   this.linesParams.push({
    //     operand1: operands.operand1,
    //     operand2: operands.operand2,
    //     result: this.operationResultFn(operands.operand1, operands.operand2)
    //   })
    // }
    //
    // this.refreshSubject.asObservable().subscribe(_ => {
    //   // this.initializeTimer()
    // })

  }

  refreshLineAddition() {
    this.refreshSubject.next();
  }

}
