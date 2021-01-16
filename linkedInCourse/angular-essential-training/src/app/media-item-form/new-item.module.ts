import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MediaItemFormComponent } from './media-item-form.component';
import { NewItemRoutingModule } from './new-item-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NewItemRoutingModule
  ],
  declarations: [
    MediaItemFormComponent
  ]
})

export class NewItemModule { }