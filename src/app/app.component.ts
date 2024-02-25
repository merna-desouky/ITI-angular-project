import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    CommonModule,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
  ],
})
export class AppComponent implements OnInit {
  title = 'IWatch';

  hideNavbar: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.url;
        this.hideNavbar = currentRoute !== '/' && currentRoute !== '/movie/:id';
      }
    });
  }
}
