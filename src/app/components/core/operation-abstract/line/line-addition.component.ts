import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {NumbersService} from "../../../../util/numbers.service";
import {OperandsGenerator, OperationResultFn} from "../../interfaces/Functions";
import {DEFAULT_LINE_OPERANDS} from "../../interfaces/LineOperands";

@Component({
  selector: 'app-line-addition',
  templateUrl: './line-addition.component.html',
  styleUrls: ['./line-addition.component.css']
})
export class LineAdditionComponent implements OnInit {

  // //---------------------------------------------------------------
  // // Instance variables
  // //---------------------------------------------------------------
  // // firstValue: number = 0;
  // // secondValue: number = 0;
  // level: number = 1;
  // // @ts-ignore
  @ViewChild('result') inputResult: ElementRef = new ElementRef<any>(1)
  // // @ts-ignore
  // @Input() position: number;
  // resultIsOk: boolean = false;
  //
  // @Output() newStateLineEvent = new EventEmitter();
  //
  // currentResult: boolean = false

  operand1: number = 1
  operand2: number = 1
  validResult: number = 2

  @Input() symbolOperation: string = "+";
  @Input() nameOperation: string = "addition";
  @Input() position: number = 0;
  @Input() operandsGenerator: OperandsGenerator = _ => DEFAULT_LINE_OPERANDS;
  @Input() operationResultFn: OperationResultFn = (op1, op2) => 2;

  // @Input() operandsGenerator: OperandsGenerator = _ => DEFAULT_LINE_OPERANDS;
  // @Input() operationValidator: OperationValidator = (op1, op2, result) => false;

  // //---------------------------------------------------------------
  // // Subscriptions
  // //---------------------------------------------------------------
  // // @ts-ignore

  // // @ts-ignore
  // private levelEventSubscription: Subscription;
  //

  private refreshEventSubscription: Subscription = new Subscription();
  @Input() refreshEvent: Observable<void> = new Observable<void>();

  // // @ts-ignore
  // @Input() levelEvent: Observable<number>;


  constructor(private numbersService :NumbersService) { }


  ngOnInit(): void {
    this.refreshEventSubscription = this.refreshEvent.subscribe(() => {
      this.setNewValues()
      this.inputResult.nativeElement.value = ''
    });
    this.setNewValues()
    // this.levelEventSubscription = this.levelEvent.subscribe((level) => {
    //   this.setNewValues(level)
    //   if (this.inputResult) { this.inputResult.nativeElement.value = '' }
    //   this.level = level
    // });

  }

  setNewValues(): void {
    let operands = this.operandsGenerator(1)
    this.operand1 = operands.operand1
    this.operand2 = operands.operand2
    this.validResult = this.operationResultFn(this.operand1, this.operand2)

  }

  // //---------------------------------------------------------------
  // // Subscriptions Destroy
  // //---------------------------------------------------------------
  ngOnDestroy() {
    this.refreshEventSubscription.unsubscribe();
    // // @ts-ignore
    // this.levelEventSubscription.unsubscribe();
  }
  //
  // changeFocusNextInput() {
  //   let nextPosition = this.position + 1
  //   // @ts-ignore
  //   if(!document.getElementById("id-addition-" + nextPosition)) {
  //     nextPosition = 0
  //   }
  //   // @ts-ignore
  //   document.getElementById("id-addition-" + nextPosition).select();
  // }

  // handleChangeResultValue(resultValue: string) {
  //   if (Number(resultValue) === (this.firstValue + this.secondValue)) {
  //     this.changeFocusNextInput()
  //     this.resultIsOk = true
  //   } else {
  //     this.resultIsOk = false
  //   }
  //   this.newStateLineEvent.emit({id: this.position, status: this.resultIsOk})
  // }

  handleChangeResult(currentResult: string) {
    if(this.isValidResult(currentResult)) {
      this.changeFocusNextInput()
    }
  }

  isValidResult(currentResult: string): boolean {
    return Number(currentResult) === this.validResult
  }

  changeFocusNextInput() {
    let nextPosition = this.position + 1
    // @ts-ignore
    if(!document.getElementById("id-" + this.nameOperation + "-" + nextPosition)) {
      nextPosition = 0
    }
    // @ts-ignore
    document.getElementById("id-" + this.nameOperation + "-" + nextPosition).select();
  }

}
