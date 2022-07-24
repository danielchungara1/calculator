import {Component, OnInit} from '@angular/core';
import {DEFAULT_LINE_OPERANDS} from "../../core/interfaces/LineOperands";
import {OperandsGenerator, OperationResultFn} from "../../core/interfaces/Functions";
import {NumbersService} from "../../../util/numbers.service";

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {

  operandsGeneratorForAddition: OperandsGenerator = _ => DEFAULT_LINE_OPERANDS;
  operationResultFnForAddition: OperationResultFn = (op1, op2) => op1 + op2

  constructor(private numbersService: NumbersService) {
  }

  ngOnInit(): void {
    this.operandsGeneratorForAddition = level => {
      switch (String(level)) {
        case "1":
          return {
            operand1: this.numbersService.getRandomNumberBetween(10, 99),
            operand2: this.numbersService.getRandomNumberBetween(10, 99)
          }
        case "2":
          return {
            operand1: this.numbersService.getRandomNumberBetween(10, 99),
            operand2: this.numbersService.getRandomNumberBetween(100, 999)
          }
        case "3":
          return {
            operand1: this.numbersService.getRandomNumberBetween(100, 999),
            operand2: this.numbersService.getRandomNumberBetween(100, 999)
          }
        default:
          return {
            operand1: this.numbersService.getRandomNumberBetween(10, 99),
            operand2: this.numbersService.getRandomNumberBetween(10, 99)
          }
      }
    };
  }

}
