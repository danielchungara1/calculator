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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
