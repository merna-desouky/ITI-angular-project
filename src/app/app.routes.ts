import { HomeComponent } from './Pages/home/home.component';
import { Routes } from '@angular/router';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sign-up', component: SignUpComponent },
];
