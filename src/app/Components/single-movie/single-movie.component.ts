import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, TitleStrategy } from '@angular/router';
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
import { CloseScrollStrategy } from '@angular/cdk/overlay';

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
  ],
  providers: [MoviesService],
  templateUrl: './single-movie.component.html',
  styleUrl: './single-movie.component.scss',
})
export class SingleMovieComponent implements OnInit {
  favorite: any;
  userComment: any = '';
  userRate: any = '';
  checkedReview: boolean = true;
  reviews: { rate: any; comment: string }[] = [];
  heartIconClass: string = 'pi pi-heart';
  iconSize: number = 55;
  iconSize2: number = 35;
  heartIconColor: string = 'red';
  movie: any;
  movieName: { movie: string } = { movie: '' };
  movieDetails: any;
  sliderMovies: {}[] = [];
  value: any;
  value2: any;
  allMovies: any;

  singlemovie() {
    this.router.navigate(['']);
  }

  //book page

  bookPage() {
    this.router.navigate(['booking/', `${this.movieName.movie}`]);
  }

  reviewData(_comment: any, _rate: any) {
    this.userComment = _comment;
    this.userRate = _rate;

    this.reviews.push({ comment: this.userComment, rate: this.userRate });

    this.singleMovieService
      .SendReview({
        movie: `${this.movieName.movie}`,
        review: { stars: `${this.userRate}`, comment: `${this.userComment}` },
      })
      .subscribe({
        next: (data: any) => {
          //  console.log(data);
        },
        error: (err: any) => {
          // console.log(err.message);
        },
      });
  }

  toggleHeartClassAndColor() {
    this.heartIconClass =
      this.heartIconClass === 'pi pi-heart'
        ? 'pi pi-heart-fill'
        : 'pi pi-heart';
    this.heartIconColor = this.heartIconColor === 'red' ? 'red' : 'red';
    if (this.favorite) {
      this.singleMovieService.RemoveFromFavourites(this.movieName).subscribe({
        next: (data: any) => {
          //console.log(data,"removed")
          this.favorite = false;
          // console.log(this.favorite);
        },
      });
    } else {
      this.singleMovieService.AddToFavourites(this.movieName).subscribe({
        next: (data: any) => {
          console.log(data, 'added');

          this.favorite = true;
          //console.log(this.favorite);
        },
      });
    }
    return this.favorite;
  }

  constructor(
    private myRoute: ActivatedRoute,
    private movieService: MoviesService,
    private router: Router,
    private singleMovieService: SingleMovieService
  ) {
    this.movieName.movie = myRoute.snapshot.params['movie-name'];
  }
  ngOnInit(): void {
    this.singleMovieService.GetMovieByName(this.movieName).subscribe({
      next: (data: any) => {
        this.movieDetails = data;
        // console.log(data);
        this.value = Number(this.movieDetails.Ratings[0].Value);
        //console.log(this.movieDetails);
      },
      error: (err: any) => {
        console.log(err.message);
      },
    });
    //get All Movies
    this.movieService.getAllMovies().subscribe({
      next: (data) => {
        this.allMovies = data;
      },
    });
    //comments
    this.singleMovieService.checkIfReviewed(this.movieName).subscribe({
      next: (data: any) => {
        this.checkedReview = data.reviewed;
        //console.log(data)
      },
    });
    //favorites
    this.singleMovieService.CheckFavourites(this.movieName).subscribe({
      next: (data: any) => {
        this.favorite = data.favourited;
        console.log(this.favorite);
        if (this.favorite) {
          console.log(this.favorite);
          this.heartIconClass =
            this.heartIconClass === 'pi pi-heart'
              ? 'pi pi-heart-fill'
              : 'pi pi-heart';
          this.heartIconColor = this.heartIconColor === 'red' ? 'red' : 'red';
        }
      },
    });
    //get all comments on the film
    this.singleMovieService.GetReviews(this.movieName).subscribe({
      next: (data: any) => {
        this.reviews = data;
        console.log(this.reviews);
      },
    });
  }
}
