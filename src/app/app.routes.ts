import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import { SignInComponent } from './Pages/sign-in/sign-in.component';
import { ErrorComponent } from './Pages/error/error.component';
import { BookYourTicketComponent } from './Pages/book-your-ticket/book-your-ticket.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'book-ticket', component: BookYourTicketComponent },
  { path: '**', component: ErrorComponent },
];
