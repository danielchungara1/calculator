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
  // @ViewChild('result') inputResult: ElementRef
  // // @ts-ignore
  // @Input() position: number;
  // resultIsOk: boolean = false;
  //
  // @Output() newStateLineEvent = new EventEmitter();
  //
  // currentResult: boolean = false

  @Input() operand1: number = 1
  @Input() operand2: number = 1
  @Input() validResult: number = 2
  @Input() symbolOperation: string = "+";
  @Input() nameOperation: string = "addition";
  @Input() position: number = 0;

  // @Input() operandsGenerator: OperandsGenerator = _ => DEFAULT_LINE_OPERANDS;
  // @Input() operationValidator: OperationValidator = (op1, op2, result) => false;

  // //---------------------------------------------------------------
  // // Subscriptions
  // //---------------------------------------------------------------
  // // @ts-ignore
  // private refreshEventSubscription: Subscription;
  // // @ts-ignore
  // private levelEventSubscription: Subscription;
  //
  // // @ts-ignore
  // @Input() refreshEvent: Observable<void>;
  // // @ts-ignore
  // @Input() levelEvent: Observable<number>;

  //---------------------------------------------------------------
  // Constructor
  //---------------------------------------------------------------
  constructor(private numbersService :NumbersService) { }

  //---------------------------------------------------------------
  // Instance methods
  //--------------------------------------------------------------
  ngOnInit(): void {
    // this.refreshEventSubscription = this.refreshEvent.subscribe(() => {
    //   this.setNewValues(this.level)
    //   this.inputResult.nativeElement.value = ''
    // });
    // this.levelEventSubscription = this.levelEvent.subscribe((level) => {
    //   this.setNewValues(level)
    //   if (this.inputResult) { this.inputResult.nativeElement.value = '' }
    //   this.level = level
    // });

  }

  // setNewValues(level: number): void {
  //   switch (String(level)) {
  //     case "1":
  //       this.firstValue = this.numbersService.getRandomNumberBetween(10, 99)
  //       this.secondValue = this.numbersService.getRandomNumberBetween(10, 99)
  //       break
  //     case "2":
  //       this.firstValue = this.numbersService.getRandomNumberBetween(10, 99)
  //       this.secondValue = this.numbersService.getRandomNumberBetween(100, 999)
  //       break
  //     case "3":
  //       this.firstValue = this.numbersService.getRandomNumberBetween(100, 999)
  //       this.secondValue = this.numbersService.getRandomNumberBetween(100, 999)
  //       break
  //     default:
  //       this.firstValue = this.numbersService.getRandomNumberBetween(10, 99)
  //       this.secondValue = this.numbersService.getRandomNumberBetween(10, 99)
  //       break
  //   }
  //
  // }

  // //---------------------------------------------------------------
  // // Subscriptions Destroy
  // //---------------------------------------------------------------
  // // ngOnDestroy() {
  // //   // @ts-ignore
  // //   this.refreshEventSubscription.unsubscribe();
  // //   // @ts-ignore
  // //   this.levelEventSubscription.unsubscribe();
  // // }
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
