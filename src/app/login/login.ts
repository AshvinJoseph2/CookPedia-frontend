import { Component, inject } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { ApiService } from '../services/api-service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [Footer,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
   
  router = inject(Router)
  api = inject(ApiService)
  fb = inject(FormBuilder)
  loginForm:FormGroup

  constructor(){
    this.loginForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
    })
  }

  login(){
    if(this.loginForm.valid){
      // alert("API call")
      const email = this.loginForm.value.email
      const password = this.loginForm.value.password
      this.api.loginAPI({email,password}).subscribe({
        next:((res:any)=>{
          sessionStorage.setItem("token",res.token)
          sessionStorage.setItem("user",JSON.stringify(res.user))
          this.loginForm.reset()
          alert("User Login successfull!!!")
          this.router.navigateByUrl('/')
        }),
        error:((reason:any)=>{
          alert(reason.error)
        })
      })
    }else{
      alert("Invalid form!!! Please fill the form with valid data...")
    }
  }


}
