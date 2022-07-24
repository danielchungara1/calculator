import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "../components/layout/layout.component";
import {AdditionComponent} from "../components/screens/addition/addition.component";
import {MultiplicationComponent} from "../components/screens/multiplication/multiplication.component";
import {DivisionComponent} from "../components/screens/division/division.component";
import {SubtractionComponent} from "../components/screens/subtraction/subtraction.component";

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {path: 'addition', component: AdditionComponent},
    {path: 'subtraction', component: SubtractionComponent},
    {path: 'multiplication', component: MultiplicationComponent},
    {path: 'division', component: DivisionComponent},
    {path: '**', component: AdditionComponent}
  ]
}]

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRouterModule {
}
