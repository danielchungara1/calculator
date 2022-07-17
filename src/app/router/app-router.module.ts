import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "../components/layout/layout.component";
import {AdditionComponent} from "../components/operations/components/addition/addition.component";
import {MultiplicationComponent} from "../components/operations/components/multiplication/multiplication.component";
import {DivisionComponent} from "../components/operations/components/division/division.component";
import {SubtractionComponent} from "../components/operations/components/substraction/subtraction.component";

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {path: 'addition', component: AdditionComponent},
    {path: 'substraction', component: SubtractionComponent},
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
