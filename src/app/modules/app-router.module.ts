import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdditionComponent} from "../components/addition/addition.component";

const routes: Routes = [
  { path: '', component: AdditionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRouterModule { }
