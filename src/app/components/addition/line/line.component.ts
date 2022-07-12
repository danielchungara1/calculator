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
  // @ts-ignore
  @Input() position: number;
  // @ts-ignore
  @Input() level: number;

  //---------------------------------------------------------------
  // Subscriptions
  //---------------------------------------------------------------
  // @ts-ignore
  private refreshEventSubscription: Subscription;
  // @ts-ignore
  @Input() refreshEvent: Observable<void>;

  // @ts-ignore
  private paramEventSubscription: Subscription;
  // @ts-ignore
  @Input() paramEvent: Observable<number>;

  //---------------------------------------------------------------
  // Constructor
  //---------------------------------------------------------------
  constructor() { }

  //---------------------------------------------------------------
  // Instance methods
  //--------------------------------------------------------------
  ngOnInit(): void {
    this.refreshEventSubscription = this.refreshEvent.subscribe(() => {
      this.setNewValues(this.level)
      this.inputResult.nativeElement.value = ''
    });
    this.paramEventSubscription = this.paramEvent.subscribe((level) => {
      this.setNewValues(level)
      this.inputResult.nativeElement.value = ''
    });

  }

  setNewValues(level: number): void {
    case (level) {
      when { status: "loading" } -> <p>Loading...</p>,
      when { status: "success", data } -> <p>{data}</p>,
      when { status: "error" } -> <p>Oops, an error occured</p>
    }
    // this.firstValue = Math.floor(Math.random() * 90 + 10)
    // this.secondValue = Math.floor(Math.random() * 90 + 10)
  }

  //---------------------------------------------------------------
  // Subscriptions Destroy
  //---------------------------------------------------------------
  ngOnDestroy() {
    // @ts-ignore
    this.refreshEventSubscription.unsubscribe();
  }

  changeFocusAdditionInput() {
    debugger
    let nextPosition = this.position + 1
    // @ts-ignore
    if(!document.getElementById("id-addition-" + nextPosition)) {
      nextPosition = 0
    }
    // @ts-ignore
    document.getElementById("id-addition-" + nextPosition).select();
  }
}
