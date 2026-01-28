import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Footer } from '../footer/footer';
import { ApiService } from '../services/api-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,Footer],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  fb = inject(FormBuilder)
  registerForm:FormGroup
  api = inject(ApiService)
  router = inject(Router)

  constructor(){
    this.registerForm = this.fb.group({
      username:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
    })
  }

  register(){
    if(this.registerForm.valid){
      // alert("API call")
      const username = this.registerForm.value.username
      const email = this.registerForm.value.email
      const password = this.registerForm.value.password
      this.api.registerAPI({username,email,password}).subscribe({
        next:((res:any)=>{
          this.registerForm.reset()
          alert("User Registration successfull!!!")
          this.router.navigateByUrl('/login')
        }),
        error:((reason:any)=>{
          this.registerForm.reset()
          alert(reason.error)
          this.router.navigateByUrl('/login')
        })
      })
    }else{
      alert("Invalid form!!! Please fill the form with valid data...")
    }
  }
}
