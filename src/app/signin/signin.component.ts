import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
// import {MatButtonModule} from '@angular/material/button';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  

  email:string;
  pass:string;
@Output() onSubmit = new EventEmitter()

  signinForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    pass : new FormControl('',Validators.required)
    });
  constructor( ) { }

  login(){
    if (!this._validateForm()) return
   this.onSubmit.emit(this.signinForm.value)
 } 
  private _validateForm() {
    return this.signinForm.valid
   }

  ngOnInit() {
  }

 
}
