import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  isHomePage: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Subscribe to router events to detect route changes
    this.router.events.subscribe((event) => {
      if (
        this.router.url === '/' ||
        this.router.url === '/#Movies' ||
        this.router.url === '/#Trending'
      ) {
        this.isHomePage = true;
        console.log('Home Page');
      } else {
        this.isHomePage = false;
      }
    });
  }
}
