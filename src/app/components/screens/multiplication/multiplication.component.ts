import { Component, OnInit } from '@angular/core';
import {OperandsGenerator, OperationResultFn} from "../../core/interfaces/Functions";
import {DEFAULT_LINE_OPERANDS} from "../../core/interfaces/LineOperands";
import {NumbersService} from "../../../util/numbers.service";

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.css']
})
export class MultiplicationComponent implements OnInit {

  operandsGeneratorForMul: OperandsGenerator = _ => DEFAULT_LINE_OPERANDS;
  operationResultFnForMul: OperationResultFn = (op1, op2) => op1 * op2

  constructor(private numbersService: NumbersService) {
  }

  ngOnInit(): void {
    this.operandsGeneratorForMul = level => {
      switch (String(level)) {
        case "1":
          return {
            operand1: this.numbersService.getRandomNumberBetween(1, 3),
            operand2: this.numbersService.getRandomNumberBetween(10, 99)
          }
        case "2":
          return {
            operand1: this.numbersService.getRandomNumberBetween(1, 9),
            operand2: this.numbersService.getRandomNumberBetween(100, 999)
          }
        case "3":
          return {
            operand1: this.numbersService.getRandomNumberBetween(1, 9),
            operand2: this.numbersService.getRandomNumberBetween(1000, 9999)
          }
        default:
          return {
            operand1: this.numbersService.getRandomNumberBetween(1, 3),
            operand2: this.numbersService.getRandomNumberBetween(10, 99)
          }
      }
    };
  }

}
