import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MediaItemFormComponent } from './media-item-form.component';

const newItemRoutes: Routes = [
  { path: '', component: MediaItemFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(newItemRoutes)],
  exports: [RouterModule]
})

export class NewItemRoutingModule { }
