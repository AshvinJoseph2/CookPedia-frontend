import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,Footer],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  fb = inject(FormBuilder)
  registerForm:FormGroup

  constructor(){
    this.registerForm = this.fb.group({
      username:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    })
  }

  register(){
    if(this.registerForm.valid){
      alert("API call")
    }else{
      alert("Invalid form!!! Please fill the form with valid data...")
    }
  }
}
