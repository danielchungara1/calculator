import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {NumbersService} from "../../../../util/numbers.service";

@Component({
  selector: 'app-line-multiplication',
  templateUrl: './line-multiplication.component.html',
  styleUrls: ['./line-multiplication.component.css']
})
export class LineMultiplicationComponent implements OnInit {

  //---------------------------------------------------------------
  // Instance variables
  //---------------------------------------------------------------
  firstValue: number = 0;
  secondValue: number = 0;
  level: number = 1;
  // @ts-ignore
  @ViewChild('result') inputResult: ElementRef
  // @ts-ignore
  @Input() position: number;
  resultIsOk: boolean = false;

  @Output() newStateLineEvent = new EventEmitter();

  //---------------------------------------------------------------
  // Subscriptions
  //---------------------------------------------------------------
  // @ts-ignore
  private refreshEventSubscription: Subscription;
  // @ts-ignore
  private levelEventSubscription: Subscription;

  // @ts-ignore
  @Input() refreshEvent: Observable<void>;
  // @ts-ignore
  @Input() levelEvent: Observable<number>;

  //---------------------------------------------------------------
  // Constructor
  //---------------------------------------------------------------
  constructor(private numbersService :NumbersService) { }

  //---------------------------------------------------------------
  // Instance methods
  //--------------------------------------------------------------
  ngOnInit(): void {
    this.refreshEventSubscription = this.refreshEvent.subscribe(() => {
      this.setNewValues(this.level)
      this.inputResult.nativeElement.value = ''
    });
    this.levelEventSubscription = this.levelEvent.subscribe((level) => {
      this.setNewValues(level)
      if (this.inputResult) { this.inputResult.nativeElement.value = '' }
      this.level = level
    });

  }

  setNewValues(level: number): void {
    switch (String(level)) {
      case "1":
        this.firstValue = this.numbersService.getRandomNumberBetween(1, 9)
        this.secondValue = this.numbersService.getRandomNumberBetween(10, 99)
        break
      case "2":
        this.firstValue = this.numbersService.getRandomNumberBetween(1, 9)
        this.secondValue = this.numbersService.getRandomNumberBetween(100, 999)
        break
      case "3":
        this.firstValue = this.numbersService.getRandomNumberBetween(1, 9)
        this.secondValue = this.numbersService.getRandomNumberBetween(1000, 9999)
        break
      default:
        this.firstValue = this.numbersService.getRandomNumberBetween(1, 9)
        this.secondValue = this.numbersService.getRandomNumberBetween(10, 99)
        break
    }

  }

  //---------------------------------------------------------------
  // Subscriptions Destroy
  //---------------------------------------------------------------
  ngOnDestroy() {
    // @ts-ignore
    this.refreshEventSubscription.unsubscribe();
    // @ts-ignore
    this.levelEventSubscription.unsubscribe();
  }

  changeFocusNextInput() {
    let nextPosition = this.position + 1
    // @ts-ignore
    if(!document.getElementById("id-addition-" + nextPosition)) {
      nextPosition = 0
    }
    // @ts-ignore
    document.getElementById("id-addition-" + nextPosition).select();
  }

  handleChangeResultValue(resultValue: string) {
    if (Number(resultValue) === (this.firstValue + this.secondValue)) {
      this.changeFocusNextInput()
      this.resultIsOk = true
    } else {
      this.resultIsOk = false
    }
    this.newStateLineEvent.emit({id: this.position, status: this.resultIsOk})
  }
}
