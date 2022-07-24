import { Component, OnInit } from '@angular/core';
import {OperandsGenerator, OperationResultFn} from "../../core/interfaces/Functions";
import {DEFAULT_LINE_OPERANDS} from "../../core/interfaces/LineOperands";
import {NumbersService} from "../../../util/numbers.service";

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {
  operandsGeneratorForDivision: OperandsGenerator = _ => DEFAULT_LINE_OPERANDS;
  operationResultFnForDivision: OperationResultFn = (op1, op2) => op1 / op2

  constructor(private numbersService: NumbersService) {
  }

  ngOnInit(): void {
    this.operandsGeneratorForDivision = level => {
      switch (String(level)) {
        case "1":
          let random1 = this.numbersService.getRandomNumberBetween(1, 9)
          let random2 = this.numbersService.getRandomNumberBetween(1, 9)
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
        case "2":
          return {
            operand1: this.numbersService.getRandomNumberBetween(10, 99),
            operand2: this.numbersService.getRandomNumberBetween(1, 9)
          }
        case "3":
          return {
            operand1: this.numbersService.getRandomNumberBetween(100, 999),
            operand2: this.numbersService.getRandomNumberBetween(1, 9)
          }
        default:
          let randomA = this.numbersService.getRandomNumberBetween(1, 9)
          let randomB = this.numbersService.getRandomNumberBetween(1, 9)
          if (randomA >= randomB) {
            return {
              operand1: randomA,
              operand2: randomB
            }
          } else {
            return {
              operand1: randomA,
              operand2: randomB
            }
          }
      }
    };
  }

}
