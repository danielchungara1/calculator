import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {NumbersService} from "../../../../../util/numbers.service";

@Component({
  selector: 'app-line-division',
  templateUrl: './line-division.component.html',
  styleUrls: ['./line-division.component.css']
})
export class LineDivisionComponent implements OnInit {

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
        let random1 = this.numbersService.getRandomNumberBetween(1, 9)
        let random2 = this.numbersService.getRandomNumberBetween(1, 9)
        if (random1 >= random2) {
          this.firstValue = random1
          this.secondValue = random2
        } else {
          this.firstValue = random2
          this.secondValue = random1
        }
        break
      case "2":
        this.firstValue = this.numbersService.getRandomNumberBetween(10, 99)
        this.secondValue = this.numbersService.getRandomNumberBetween(1, 9)
        break
      case "3":
        this.firstValue = this.numbersService.getRandomNumberBetween(100, 999)
        this.secondValue = this.numbersService.getRandomNumberBetween(1, 9)
        break
      default:
        this.firstValue = this.numbersService.getRandomNumberBetween(1, 9)
        this.secondValue = this.numbersService.getRandomNumberBetween(1, 9)
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
