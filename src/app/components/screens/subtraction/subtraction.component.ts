import { Component, OnInit } from '@angular/core';
import {OperandsGenerator, OperationResultFn} from "../../core/interfaces/Functions";
import {DEFAULT_LINE_OPERANDS} from "../../core/interfaces/LineOperands";
import {NumbersService} from "../../../util/numbers.service";

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.css']
})
export class SubtractionComponent implements OnInit {

  operandsGeneratorForSubtraction: OperandsGenerator = _ => DEFAULT_LINE_OPERANDS;
  operationResultFnForSubtraction: OperationResultFn = (op1, op2) => op1 - op2

  constructor(private numbersService: NumbersService) {
  }

  ngOnInit(): void {
    this.operandsGeneratorForSubtraction = level => {
      switch (String(level)) {
        case "1":
          return {
            operand1: this.numbersService.getRandomNumberBetween(10, 99),
            operand2: this.numbersService.getRandomNumberBetween(0, 9)
          }
        case "2":
          return {
            operand1: this.numbersService.getRandomNumberBetween(100, 999),
            operand2: this.numbersService.getRandomNumberBetween(10, 99)
          }
        case "3":
          let random1 = this.numbersService.getRandomNumberBetween(100, 999)
          let random2 = this.numbersService.getRandomNumberBetween(100, 999)
          if (random1 >= random2) {
            return {
              operand1: random1,
              operand2: random2
            }
          } else {
            return {
              operand1: random2,
              operand2: random1
            }
          }
        default:
          return {
            operand1: this.numbersService.getRandomNumberBetween(10, 99),
            operand2: this.numbersService.getRandomNumberBetween(0, 9)
          }
      }
    };
  }

}
