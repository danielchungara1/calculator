import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarModule} from "primeng/menubar";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {DropdownModule} from "primeng/dropdown";
import {MegaMenuModule} from "primeng/megamenu";
import {ToastModule} from "primeng/toast";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MenubarModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    MegaMenuModule,
    ToastModule
  ]
})
export class PrimeNgModule { }
