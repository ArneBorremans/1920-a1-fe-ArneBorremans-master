import { MaterialModule } from './../material/material.module';
import { MapComponent } from './map/map.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [MapComponent]
})
export class MapModule { }
