import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import { SignInComponent } from './Pages/sign-in/sign-in.component';
// import { canActivate } from './Guards/auth-guard.guard';
import { ErrorComponent } from './Pages/error/error.component';
import { BookingComponent } from './Pages/booking/booking.component';
import { SingleMovieComponent } from './Components/single-movie/single-movie.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { ProfileComponent } from './Pages/profile/profile.component';

export const routes: Routes = [
  // { path: '', component: HomeComponent , canActivate:[canActivate]},
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'movie/:id', component: SingleMovieComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '**', component: ErrorComponent },
];
