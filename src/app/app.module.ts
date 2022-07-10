import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {PrimeNgModule} from "./modules/prime-ng.module";
import {AdditionComponent} from './components/addition/addition.component';
import {AppRouterModule} from "./modules/app-router.module";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AdditionComponent
  ],
  imports: [
    BrowserModule,
    PrimeNgModule,
    AppRouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
