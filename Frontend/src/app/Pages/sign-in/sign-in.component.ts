declare let google: any;
import { Component, OnInit, inject } from '@angular/core';
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
import { AuthServiceService } from '../../Services/auth-service.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule, HttpClientModule],
  providers: [UsersServicesService, HttpClient],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent implements OnInit {
  constructor(
    private usersService: UsersServicesService,
    private http: HttpClient,
    private route: Router,
    private AuthService: AuthServiceService
  ) {}
  /////////////////////////////////////////////////////////////////////////

  // Social Login Methods
  user: any;
  loggedIn: any;
  notFoundMessage: string = '';

  private router = inject(Router);

  ngOnInit() {
    google.accounts.id.initialize({
      client_id:
        '590276328328-ja6a6pogeaupkei6shq854v343k7kenp.apps.googleusercontent.com',
      callback: (resp: any) => {
        // console.log(resp);
        this.handleLogin(resp);
      },
    });

    google.accounts.id.renderButton(document.getElementById('google-btn'), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 250,
    });
  }

  private decodeToken(token: string) {
    return JSON.parse(atob(token.split('.')[1]));
  }

  handleLogin(response: any) {
    if (response) {
      // console.log(response);
      // console.log(JSON.stringify(response.credential));
      const payload = this.decodeToken(response.credential);

      console.log(payload);
      this.usersService.Login({ email: payload.email, gmail: true }).subscribe(
        (data) => {
          localStorage.setItem('token', data.token);
          // sessionStorage.removeItem('loggedInUser');
          this.route.navigate(['/']);
        },
        (err) => {
          if (!err.error.message) {
            this.router.navigate(['/sign-up']);
          } else {
            this.notFoundMessage = String(err.error.message);
          }
        }
      );
    }
  }

  /////////////////////////////////////////////////////////////////////////

  signInForm: any = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required),
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
        (data) => {
          let decodedToken = this.AuthService.DecodedToken(data.token);
          if (decodedToken.isAdmin) {
            localStorage.setItem('token', data.token);
            this.route.navigate(['/dashboard']);
          } else {
            localStorage.setItem('token', data.token);
            sessionStorage.removeItem('loggedInUser');
            this.route.navigate(['/']);
          }
        },
        (err) => {
          console.log(err.error.message);
          this.notFoundMessage = String(err.error.message);
        }
      );
    } else {
      // Mark all form controls as touched to trigger error message display
      this.signInForm.markAllAsTouched();
    }
  }
}
