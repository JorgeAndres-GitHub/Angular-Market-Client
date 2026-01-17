import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, MatButtonModule, ReactiveFormsModule, MatInputModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login{  

  constructor(private router: Router) {}

  private formBuilder = new FormBuilder();

  form = this.formBuilder.group({
    email: ['', {validators: [Validators.required]}],
    password: ['', {validators: [Validators.required]}],
  });

  getErrorEmailField(): string{
    let email = this.form.controls.email;
    if(email.hasError('required')){
      return 'Email is required';
    }

    return "";
  }

  getErrorPasswordField(): string{
    let password = this.form.controls.password;
    if(password.hasError('required')){
      return 'Password is required';
    }
    return "";
  }

  submitLogin(){
    if(this.form.invalid){
      return;
    }

    console.log(this.form.value);

    this.router.navigate(['/']);
  }
}
