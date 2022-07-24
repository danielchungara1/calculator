import {LineOperands} from "./LineOperands";

export interface OperandsGenerator {
  (level: number): LineOperands
}
export interface OperationResultFn {
  (operand1: number, operand2: number): number
}
