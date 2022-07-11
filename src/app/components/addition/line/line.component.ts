import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {

  //---------------------------------------------------------------
  // Instance variables
  //---------------------------------------------------------------
  firstValue: number = 0;
  secondValue: number = 0;
  // @ts-ignore
  @ViewChild('result') inputResult: ElementRef

  //---------------------------------------------------------------
  // Subscriptions
  //---------------------------------------------------------------
  // @ts-ignore
  private refreshEventSub: Subscription;
  // @ts-ignore
  @Input() refreshEvent: Observable<void>;

  constructor() { }

  //---------------------------------------------------------------
  // Instance methods
  //--------------------------------------------------------------
  ngOnInit(): void {
    this.setNewValues()
    this.refreshEventSub = this.refreshEvent.subscribe(() => {
      this.setNewValues()
      this.inputResult.nativeElement.value = ''
    });
  }

  setNewValues(): void {
    this.firstValue = Math.floor(Math.random() * 90 + 10)
    this.secondValue = Math.floor(Math.random() * 90 + 10)
  }

  //---------------------------------------------------------------
  // Subscriptions Destroy
  //---------------------------------------------------------------
  ngOnDestroy() {
    // @ts-ignore
    this.refreshEventSub.unsubscribe();
  }

  changeColorResult(result: string) {
    console.log(result)
  }
}
