import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { MoviesService } from '../../Services/movies.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { UsersServicesService } from '../../Services/users-services.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    HttpClientModule,
    RouterLink,
    CommonModule,
    SidebarModule,
  ],
  providers: [MoviesService, UsersServicesService],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent implements OnInit {
  googleUser: boolean = false;
  googleName: any = null;
  googlePicture: any = null;

  mongoUser: boolean = false;
  mongoEmail: any = null;

  noUser: any = true;

  movies: any;
  item: any;
  resultMovies: any[] = [];
  showResults: boolean = false;
  myInput: any;
  sidebarVisible: boolean = false;
  @ViewChild('targetDiv', { static: false }) targetDivRef!: ElementRef;

  constructor(
    private moviesService: MoviesService,
    private usersService: UsersServicesService
  ) {}

  private decodeToken(token: string) {
    return JSON.parse(atob(token.split('.')[1]));
  }

  ngOnInit(): void {
    this.moviesService.getAllMovies().subscribe({
      next: (data) => {
        this.movies = data;
      },
      error: (err) => {
        console.log(err);
      },
    });

    if (sessionStorage.getItem('loggedInUser')) {
      this.noUser = false;
      this.googleUser = true;
      this.googleName = JSON.parse(
        sessionStorage.getItem('loggedInUser')!
      ).name;
      this.googlePicture = JSON.parse(
        sessionStorage.getItem('loggedInUser')!
      ).picture;
    }

    if (localStorage.getItem('token') !== null) {
      let userToken: any = localStorage.getItem('token');
      let userData = this.decodeToken(userToken);
      // console.log(userData);
      this.mongoUser = true;
      this.mongoEmail = userData.email;

      this.noUser = false;
    }

    console.log(`${this.noUser},${this.mongoUser},${this.googleUser} `);
    console.log(localStorage.getItem('token'));
  }

  handleSignOut() {
    sessionStorage.clear();
    localStorage.clear();
    this.usersService.GoogleLogOut();

    this.googleUser = false;
    this.mongoUser = false;
    this.noUser = true;
  }

  result(evt: any) {
    this.resultMovies = [];
    this.showResults = true;
    if (this.item) {
      for (let i = 0; i < this.movies?.length; i++) {
        if (
          this.movies[i].Title.toLowerCase().startsWith(this.item.toLowerCase())
        ) {
          this.resultMovies.push(this.movies[i]);
          console.log(this.resultMovies, 'sssss');
        }
      }
    }
  }

  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: Event) {
    console.log(this.targetDivRef.nativeElement);
    if (
      this.targetDivRef &&
      this.targetDivRef.nativeElement &&
      !this.targetDivRef.nativeElement.contains(event.target as Node)
    ) {
      this.showResults = false;
      // this.resultMovies = []
      this.item = '';
    }
  }
}
