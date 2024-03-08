import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {
  RouterLink,
  RouterModule,
  RouterLinkActive,
  NavigationEnd,
  RouterOutlet,
  Router,
} from '@angular/router';
import { MoviesService } from '../../Services/movies.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { UsersServicesService } from '../../Services/users-services.service';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    FormsModule,
    HttpClientModule,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    SidebarModule,
    AvatarModule,
    AvatarGroupModule,
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
  userFirstLetter: any = null;

  noUser: any = true;
  hideLinks: boolean = false;

  movies: any;
  item: any;
  resultMovies: any[] = [];
  showResults: boolean = false;
  myInput: any;
  sidebarVisible: boolean = false;
  @ViewChild('targetDiv', { static: false }) targetDivRef!: ElementRef;

  constructor(
    private moviesService: MoviesService,
    private usersService: UsersServicesService,
    private router: Router
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
      this.userFirstLetter = this.mongoEmail[0].toUpperCase();

      this.noUser = false;
    }

    // console.log(`${this.noUser},${this.mongoUser},${this.googleUser} `);
    // console.log(localStorage.getItem('token'));
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.url;
        this.hideLinks = currentRoute === '/dashboard';
      }
    });
  }

  handleSignOut() {
    sessionStorage.clear();
    localStorage.clear();
    this.usersService.GoogleLogOut();

    this.usersService.Logout();

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
          // console.log(this.resultMovies, 'sssss');
        }
      }
    }
  }

  routeToSingleMovie(movie: any) {
    this.router.navigate(['/movie', `${movie.Title}`]);
  }

  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: Event) {
    // console.log(this.targetDivRef.nativeElement);
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
