import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import {
  ReactiveFormsModule,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { UsersServicesService } from '../../Services/users-services.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// const jwt = require('jsonwebtoken');
// import{}from
@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule,HttpClientModule],
  providers:[UsersServicesService,HttpClient],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
constructor (private usersService:UsersServicesService, 
  private http:HttpClient,
  private route: Router){}

  signInForm: any = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  validateField(fieldName: string): boolean | undefined {
    const field = this.signInForm.get(fieldName);
    return field?.invalid && field?.touched;
  }

  /////////////////////////////////////////////////////////////////////////

  showPassword: boolean = false;

  togglePasswordVisibility(passwordInput: HTMLInputElement) {
    this.showPassword = !this.showPassword;
    passwordInput.type = this.showPassword ? 'text' : 'password';
  }

  onSubmit() {
    if (this.signInForm.valid) {
      this.usersService.Login(this.signInForm.value).subscribe(
        (data)=>{
       
          localStorage.setItem('token', data.token)
          this.route.navigate(['/'])
        },
        (err)=>{console.log(err.error.message)})
 
    } else {
      // Mark all form controls as touched to trigger error message display
      this.signInForm.markAllAsTouched();
    }
  }
}
