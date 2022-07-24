import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {PrimengModule} from "./ui-libraries/primeng.module";
import {AdditionComponent} from './components/screens/addition/addition.component';
import {AppRouterModule} from "./router/app-router.module";
import {LineAdditionComponent} from './components/core/operation/line/line-addition.component';
import {RippleModule} from "primeng/ripple";
import {LayoutComponent} from './components/layout/layout.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastMessageService} from "./components/services/toast-message.service";
import {MessageService} from "primeng/api";
import {ToastrModule} from "ngx-toastr";
import {SubtractionComponent} from "./components/screens/subtraction/subtraction.component";
import {DivisionComponent} from "./components/screens/division/division.component";
import {MultiplicationComponent} from "./components/screens/multiplication/multiplication.component";
import {LineSubtractionComponent} from "./components/screens/subtraction/line/line-subtraction.component";
import {LineDivisionComponent} from "./components/screens/division/line/line-division.component";
import {
  LineMultiplicationComponent
} from "./components/screens/multiplication/line/line-multiplication.component";
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
