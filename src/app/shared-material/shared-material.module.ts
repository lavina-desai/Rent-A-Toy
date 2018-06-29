import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatButtonModule, 
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatToolbarModule
  } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    NoopAnimationsModule,
    MatButtonModule, 
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule
  ],
  declarations: [],
  exports: [
    MatButtonModule, 
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule
  ]
})
export class SharedMaterialModule { }
