import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import { SignInComponent } from './Pages/sign-in/sign-in.component';
import { canActivate } from './Guards/auth-guard.guard';
import { ErrorComponent } from './Pages/error/error.component';
import { BookingComponent } from './Pages/booking/booking.component';
import { SingleMovieComponent } from './Components/single-movie/single-movie.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { CheckoutComponent } from './Pages/checkout/checkout.component';
import { ProfileComponent } from './Pages/profile/profile.component';

export const routes: Routes = [
  // { path: '', component: HomeComponent , canActivate:[canActivate]},
  { path: '', component: HomeComponent },
  { path: 'movie/:movie-name', component: SingleMovieComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'profile', component: ProfileComponent, canActivate:[canActivate]},
  { path: 'booking/:movie-name', component: BookingComponent ,canActivate:[canActivate]},
  { path: 'checkout', component: CheckoutComponent,canActivate:[canActivate] },
  { path: 'dashboard', component: DashboardComponent,canActivate:[canActivate] },
  { path: '**', component: ErrorComponent },
];
