import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [MatFormFieldModule, MatButtonModule, ReactiveFormsModule, MatInputModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  private router = inject(Router)

  private formBuilder = new FormBuilder();

  form = this.formBuilder.group({
    name: ['', {validators: [Validators.required]}],
    email: ['', {validators: [Validators.required, Validators.email]}],
    password: ['', {validators: [Validators.required, Validators.minLength(8)]}],
  });

  getErrorNameField(): string{
    let name = this.form.controls.name;
    if(name.hasError('required')){
      return 'Name is required';
    }

    return "";
  }

  getErrorEmailField(): string{
    let email = this.form.controls.email;
    if(email.hasError('required')){
      return 'Email is required';
    }
    if(email.hasError('email')){
      return 'Not a valid email';
    }

    return "";
  }

  getErrorPasswordField(): string{
    let password = this.form.controls.password;
    if(password.hasError('required')){
      return 'Password is required';
    }
    if(password.hasError('minlength')){
      return 'Password must be at least 8 characters long';
    }
    return "";
  }

  submitRegistration() {
    if (this.form.invalid) return;

    console.log(this.form.value);
    this.router.navigate(['/login']);

  }
}
