import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { YourFormsComponent } from './yourForms.component';

const routes: Routes = [
  { path: '', component: YourFormsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YourFormsRoutingModule { }
