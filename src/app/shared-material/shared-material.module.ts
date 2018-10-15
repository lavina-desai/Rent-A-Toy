import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
//import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {
  MatButtonModule, 
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
  MatMenuModule
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
    MatToolbarModule,
    MatMenuModule,

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
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule

  ]
})
export class SharedMaterialModule { }
