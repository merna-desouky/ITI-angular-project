import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  Validators,
  FormControl,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
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

  constructor() {
    this.signUpForm
      .get('confirmPassword')
      ?.setValidators(this.passwordMatch.bind(this));
  }

  // Custom validator to check if password and confirm password match
  passwordMatch(control: AbstractControl): ValidationErrors | null {
    const password = this.signUpForm.get('password')?.value;
    const confirmPassword = control.value;
    return password !== confirmPassword ? null : { passwordMatch: true };
  }

  validateField(fieldName: string): boolean | undefined {
    const field = this.signUpForm.get(fieldName);
    return field?.invalid && field?.touched;
  }

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
    console.log(this.signUpForm);
    console.log(this.passwordMatch(this.signUpForm.get('confirmPassword')));
    this.validateField('name');
    this.validateField('email');
    this.validateField('password');
    this.validateField('confirmPassword');
  }
}
