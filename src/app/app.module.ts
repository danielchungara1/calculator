import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {PrimeNgModule} from "./modules/prime-ng.module";
import {AdditionComponent} from './components/addition/addition.component';
import {AppRouterModule} from "./modules/app-router.module";
import { LineComponent } from './components/addition/line/line.component';
import {RippleModule} from "primeng/ripple";
import { LayoutComponent } from './components/layout/layout.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastMessageService} from "./components/services/toast-message.service";
import {MessageService} from "primeng/api";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AdditionComponent,
    LineComponent,
    LayoutComponent
  ],
    imports: [
        BrowserModule,
        PrimeNgModule,
        AppRouterModule,
        RippleModule,
        FormsModule,
        BrowserAnimationsModule
    ],
  providers: [
    MessageService,
    ToastMessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
