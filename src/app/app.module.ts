import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {PrimengModule} from "./ui-libraries/primeng.module";
import {AdditionComponent} from './components/operations/components/addition/addition.component';
import {AppRouterModule} from "./router/app-router.module";
import { LineComponent } from './components/operations/components/addition/line/line.component';
import {RippleModule} from "primeng/ripple";
import { LayoutComponent } from './components/layout/layout.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastMessageService} from "./components/services/toast-message.service";
import {MessageService} from "primeng/api";
import {ToastrModule} from "ngx-toastr";
import {SubtractionComponent} from "./components/operations/components/substraction/subtraction.component";
import {DivisionComponent} from "./components/operations/components/division/division.component";
import {MultiplicationComponent} from "./components/operations/components/multiplication/multiplication.component";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AdditionComponent,
    LineComponent,
    LayoutComponent,
    SubtractionComponent,
    DivisionComponent,
    MultiplicationComponent
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
export class AppModule { }
