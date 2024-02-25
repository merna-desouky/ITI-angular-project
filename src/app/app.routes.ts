import { HomeComponent } from './Pages/home/home.component';
import { Routes } from '@angular/router';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import { SignInComponent } from './Pages/sign-in/sign-in.component';
import { canActivate} from './Guards/auth-guard.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent , canActivate:[canActivate]},
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent },
];
