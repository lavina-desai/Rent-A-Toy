import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  @Output() onSubmit = new EventEmitter()
  email : string;

  forgetpasswordForm =  new FormGroup({
    Email : new FormControl('', [Validators.required, Validators.email])
  });
  
  constructor() { }

  forgetpassword(){
    if (!this._validateForm()) return
    this.onSubmit.emit(this.forgetpasswordForm.value)
  }
  
  private _validateForm() {
  return this.forgetpasswordForm.valid
  }
  
  ngOnInit() {
  }
submit()
{
  
}
}
