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

  @ViewChild('result') inputResult: ElementRef | undefined

  level: number = 1;
  operand1: number = 1
  operand2: number = 1
  validResult: number = 2

  @Input() symbolOperation: string = "+";
  @Input() nameOperation: string = "addition";
  @Input() position: number = 0;
  @Input() operandsGenerator: OperandsGenerator = _ => DEFAULT_LINE_OPERANDS;
  @Input() operationResultFn: OperationResultFn = (op1, op2) => 2;

  private refreshEventSubscription: Subscription = new Subscription();
  @Input() refreshEvent: Observable<void> = new Observable<void>();

  private levelEventSubscription: Subscription = new Subscription();
  @Input() levelEvent: Observable<number> = new Observable<number>();

  @Output() newStateLineEvent = new EventEmitter();
  currentResultOk: boolean = false;

  constructor(private numbersService :NumbersService) { }


  ngOnInit(): void {
    this.refreshEventSubscription = this.refreshEvent.subscribe(() => {
      this.setNewValues(this.level)
      if (this.inputResult){
        this.inputResult.nativeElement.value = ''
      }

    });

    this.levelEventSubscription = this.levelEvent.subscribe((level) => {
      this.setNewValues(level)
      if (this.inputResult) { this.inputResult.nativeElement.value = '' }
      this.level = level
    });

  }

  setNewValues(level: number = 1): void {
    let operands = this.operandsGenerator(level)
    this.operand1 = operands.operand1
    this.operand2 = operands.operand2
    this.validResult = this.operationResultFn(this.operand1, this.operand2)
  }

  ngOnDestroy() {
    this.refreshEventSubscription.unsubscribe();
    this.levelEventSubscription.unsubscribe();
  }

  handleChangeResult(currentResult: string) {
    if(this.isValidResult(currentResult)) {
      this.changeFocusNextInput()
      this.currentResultOk = true
    } else {
      this.currentResultOk = false
    }
    this.newStateLineEvent.emit({id: this.position, status: this.currentResultOk})
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
