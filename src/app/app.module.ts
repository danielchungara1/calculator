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
import {ToastMessageService} from "./components/services/toast/toast-message.service";
import {MessageService} from "primeng/api";
import {ToastrModule} from "ngx-toastr";
import {OperationComponent} from './components/core/operation/operation.component';
import { SubtractionComponent } from './components/screens/subtraction/subtraction.component';
import { MultiplicationComponent } from './components/screens/multiplication/multiplication.component';
import { DivisionComponent } from './components/screens/division/division.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AdditionComponent,
    LineAdditionComponent,
    LayoutComponent,
    OperationComponent,
    SubtractionComponent,
    MultiplicationComponent,
    DivisionComponent,
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
