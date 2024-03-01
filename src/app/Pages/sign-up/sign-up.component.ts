import { CommonModule } from '@angular/common';
import { Component, Injectable } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {
  ReactiveFormsModule,
  FormGroup,
  Validators,
  FormControl,
  // AbstractControl,
  // ValidationErrors,
} from '@angular/forms';
import { UsersServicesService } from '../../Services/users-services.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable()
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule, HttpClientModule],
  providers: [UsersServicesService, HttpClient],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  constructor(
    private usersService: UsersServicesService,
    private http: HttpClient,
    private route: Router
  ) {}

  signUpForm: any = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ]),
    confirmPassword: new FormControl(null, {
      validators: [Validators.required],
      updateOn: 'change',
    }),
  });

  validateField(fieldName: string): boolean | undefined {
    const field = this.signUpForm.get(fieldName);
    return field?.invalid && field?.touched;
  }

  /////////////////////////////////////////////////////////////////////////

  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  togglePasswordVisibility(passwordInput: HTMLInputElement) {
    this.showPassword = !this.showPassword;
    passwordInput.type = this.showPassword ? 'text' : 'password';
  }

  toggleConfirmPasswordVisibility(confirmPasswordInput: HTMLInputElement) {
    this.showConfirmPassword = !this.showConfirmPassword;
    confirmPasswordInput.type = this.showConfirmPassword ? 'text' : 'password';
  }

  onSubmit() {
    if (
      this.signUpForm.valid &&
      this.signUpForm.get('password')?.value ===
        this.signUpForm.get('confirmPassword')?.value
    ) {
      this.usersService.Register(this.signUpForm.value).subscribe(
        (data) => {
          this.route.navigate(['/sign-in']);
        },
        (err) => {
          console.log(err.message);
        }
      );
    } else {
      // Mark all form controls as touched to trigger error message display
      this.signUpForm.markAllAsTouched();
    }
  }
}
