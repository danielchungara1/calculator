import {Component, OnInit} from '@angular/core';
import {OperandsGenerator, OperationResultFn} from "../../core/interfaces/Functions";
import {DEFAULT_LINE_OPERANDS} from "../../core/interfaces/LineOperands";
import {NumbersService} from "../../../util/numbers.service";
import {Operation} from "../../core/model/Operation";
import {Operands} from "../../core/interfaces/Operands";

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

    // @ts-ignore
    this.operandsGeneratorForDivision = level => {
      switch (String(level)) {
        case "1":
          return this.generateLevelsMap().get(1)
        case "2":
          return this.generateLevelsMap().get(2)
        case "3":
          return this.generateLevelsMap().get(3)
        default:
          return this.generateLevelsMap().get(1)
      }
    };
  }

  private generateLevelsMap(): Map<number, Operands> {

    let levelsMap = new Map<number, Operands>();

    const LEVEL1 = new Operation(
      this.numbersService.getRandomNumberBetween(1, 9),
      this.numbersService.getRandomNumberBetween(1, 9)
    )
      .swapOperandsByCondition((op1, op2) => !(op1 >= op2))
      .doOperandsDivisible()
      .operands()

    const LEVEL2 = new Operation(
      this.numbersService.getRandomNumberBetween(10, 99),
      this.numbersService.getRandomNumberBetween(1, 9)
    )
      .doOperandsDivisible()
      .operands()

    const LEVEL3 = new Operation(
      this.numbersService.getRandomNumberBetween(100, 999),
      this.numbersService.getRandomNumberBetween(1, 9)
    )
      .doOperandsDivisible()
      .operands()

    levelsMap.set(1, LEVEL1)
    levelsMap.set(2, LEVEL2)
    levelsMap.set(3, LEVEL3)

    return levelsMap

  }
}
