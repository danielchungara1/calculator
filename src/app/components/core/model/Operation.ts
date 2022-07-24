import {Operands} from "../interfaces/Operands";
import {LineOperands} from "../interfaces/LineOperands";

export class Operation {

  operand1: number
  operand2: number

  constructor(operand1: number, operand2: number) {
    this.operand1 = operand1
    this.operand2 = operand2
  }

  swapOperandsByCondition(condition: (op1: number, op2: number) => boolean): Operation {
    if (condition(this.operand1, this.operand2)) {
      const temp = this.operand1
      this.operand1 = this.operand2
      this.operand2 = temp
    }
    return this
  }

  doOperandsDivisible(): Operation {
    while (this.operand1 % this.operand2 !== 0) {
      this.operand2 = this.operand2 - 1
    }
    return this
  }

  operands() {
    return {operand1: this.operand1, operand2: this.operand2}
  }

}
