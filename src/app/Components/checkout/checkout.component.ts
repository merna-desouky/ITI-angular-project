import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../Services/movies.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormsModule,
} from '@angular/forms';
// import { Movie } from '../../Utils/Movie';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [HttpClientModule, RouterModule, CommonModule, FormsModule],
  providers: [MoviesService],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  // Data will be fetched from the query string + service

  movies: any[] = []; // Changed to any[] instead of []

  checkoutMoviesIds: number[] = [2, 3];

  paymentOption: string = '';

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.loadDummyMovies();
  }

  private loadDummyMovies(): void {
    this.checkoutMoviesIds.forEach((id) => {
      this.moviesService.getMovieById(id).subscribe({
        next: (data) => {
          const checkoutMovie = {
            id: data.id,
            imgSrc: data.Poster,
            movieName: data.Title,
            totalSeats: 5,
            totalPrice: 500,
          };
          this.movies.push(checkoutMovie);
        },
        error: (err) => {
          console.log(err);
        },
      });
    });
  }
}
