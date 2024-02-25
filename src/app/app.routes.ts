import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import { SignInComponent } from './Pages/sign-in/sign-in.component';
import { canActivate } from './Guards/auth-guard.guard';
import { ErrorComponent } from './Pages/error/error.component';
import { SingleMovieComponent } from './Components/single-movie/single-movie.component';

export const routes: Routes = [
  // { path: '', component: HomeComponent , canActivate:[canActivate]},
  { path: '', component: HomeComponent },
  { path: 'movie/:id', component: SingleMovieComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: '**', component: ErrorComponent },
];
