import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {PrimengModule} from "./ui-libraries/primeng.module";
import {AdditionComponent} from './components/core/operations/addition/addition.component';
import {AppRouterModule} from "./router/app-router.module";
import {LineAdditionComponent} from './components/core/operation/line/line-addition.component';
import {RippleModule} from "primeng/ripple";
import {LayoutComponent} from './components/layout/layout.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastMessageService} from "./components/services/toast-message.service";
import {MessageService} from "primeng/api";
import {ToastrModule} from "ngx-toastr";
import {SubtractionComponent} from "./components/core/operations/subtraction/subtraction.component";
import {DivisionComponent} from "./components/core/operations/division/division.component";
import {MultiplicationComponent} from "./components/core/operations/multiplication/multiplication.component";
import {LineSubtractionComponent} from "./components/core/operations/subtraction/line/line-subtraction.component";
import {LineDivisionComponent} from "./components/core/operations/division/line/line-division.component";
import {
  LineMultiplicationComponent
} from "./components/core/operations/multiplication/line/line-multiplication.component";
import { OperationComponent } from './components/core/operation/operation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AdditionComponent,
    LineAdditionComponent,
    LineSubtractionComponent,
    LineDivisionComponent,
    LineMultiplicationComponent,
    LayoutComponent,
    SubtractionComponent,
    DivisionComponent,
    MultiplicationComponent,
    OperationComponent,

  ],
  imports: [
    BrowserModule,
    PrimengModule,
    AppRouterModule,
    RippleModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [
    MessageService,
    ToastMessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
