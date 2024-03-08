import { map } from 'rxjs/operators';
import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../Services/movies.service';
import { HttpClientModule } from '@angular/common/http';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { ButtonModule } from 'primeng/button';
import { MoviesCardsComponent } from '../../Components/movies-cards/movies-cards.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { SingleMovieService } from '../../Services/single-movie.service';
import { CommonModule } from '@angular/common';
import { UsersServicesService } from '../../Services/users-services.service';
import { ProfileService } from '../../Services/profile.service';

@Component({
  selector: 'app-single-movie',
  standalone: true,
  imports: [
    HttpClientModule,
    RatingModule,
    FormsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    ButtonModule,
    MoviesCardsComponent,
    InputTextareaModule,
    AvatarModule,
    AvatarGroupModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [MoviesService],
  templateUrl: './single-movie.component.html',
  styleUrl: './single-movie.component.scss',
})
export class SingleMovieComponent implements OnInit {
  favorite: any;
  userComment: any = '';
  userRate: any = '';
  userName: any = '';
  reviewUsers = [];

  checkedReview: boolean = true;
  reviews: any;
  heartIconClass: string = 'pi pi-heart';
  iconSize: number = 55;
  iconSize2: number = 35;
  heartIconColor: string = 'red';
  movie: any;
  movieName: { movie: string } = { movie: '' };
  movieDetails: any;
  sliderMovies: {}[] = [];
  value: any;
  allMovies: any;
  viewComment: boolean = true;

  constructor(
    private myRoute: ActivatedRoute,
    private movieService: MoviesService,
    private router: Router,
    private singleMovieService: SingleMovieService,
    private userService: ProfileService
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.myRoute.params.subscribe((param) => {
      this.movieName.movie = param['movie-name'];

      this.singleMovieService.GetMovieByName(this.movieName).subscribe({
        next: (data: any) => {
          this.movieDetails = data;
          // console.log(data);
          this.value = Number(this.movieDetails.Ratings[0].Value);
        },
        error: (err: any) => {
          console.log(err.message);
        },
      });
    });

    // Get All Movies
    this.movieService.getAllMovies().subscribe({
      next: (data) => {
        this.allMovies = data;
      },
    });

    // Comments
    this.singleMovieService.checkIfReviewed(this.movieName).subscribe({
      next: (data: any) => {
        this.checkedReview = data.reviewed;
        console.log(this.checkedReview);
      },
    });

    // Favorites
    this.singleMovieService.CheckFavourites(this.movieName).subscribe({
      next: (data: any) => {
        this.favorite = data.favourited;
        console.log(this.favorite);

        if (this.favorite) {
          this.heartIconClass = 'pi pi-heart-fill';
          this.heartIconColor = 'red';
        } else {
          this.heartIconClass = 'pi pi-heart';
          this.heartIconColor = 'red';
        }
      },
    });

    // Get all comments on the film
    this.singleMovieService.GetReviews(this.movieName).subscribe({
      next: (data: any) => {
        this.reviews = data;
        this.reviewUsers = this.reviews.map((review: any) => review.name);

        console.log(this.reviewUsers);
      },
    });

    // // Disable review button if user has already reviewed
    // this.userService.getUser().subscribe({
    //   next: (data: any) => {
    //     this.userName = data.username;
    //     if ((this.reviewUsers as string[]).includes(this.userName)) {
    //       this.checkedReview = false;
    //       console.log('user already hereeeeeeeeeee');
    //     }
    //   },
    // });
  }

  // Booking page
  bookPage() {
    this.router.navigate(['booking/', `${this.movieName.movie}`]);
  }

  reviewData(comment: any, rate: any) {
    this.userComment = comment;
    this.userRate = rate;

    this.reviews.push({
      comment: this.userComment,
      stars: this.userRate,
    });

    this.singleMovieService
      .SendReview({
        movie: `${this.movieName.movie}`,
        review: { stars: `${this.userRate}`, comment: `${this.userComment}` },
      })
      .subscribe({
        next: (data: any) => {},
        error: (err: any) => {},
      });
  }

  toggleHeartClassAndColor() {
    if (this.favorite) {
      this.singleMovieService.RemoveFromFavourites(this.movieName).subscribe({
        next: (data: any) => {
          this.favorite = false;
          this.heartIconClass = 'pi pi-heart';
          this.heartIconColor = 'red';
        },
        error: (err) => {
          console.log(err.message);
        },
      });
    } else {
      this.singleMovieService.AddToFavourites(this.movieName).subscribe({
        next: (data: any) => {
          this.favorite = true;
          this.heartIconClass = 'pi pi-heart-fill';
          this.heartIconColor = 'red';
        },
      });
    }

    return this.favorite;
  }
}
