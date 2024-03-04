import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../Services/movies.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../Services/cart.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [HttpClientModule, RouterModule, CommonModule, FormsModule],
  providers: [MoviesService, CartService],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  // Data will be fetched from the query string + service
  paymentOption: string = '';
  movies: any[] = [];
  userCart: any;

  constructor(
    private moviesService: MoviesService,
    private cartService: CartService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.cartService.getUserCart().subscribe({
      next: (data: any) => {
        console.log(data);
        this.userCart = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  checkoutUserCart(cart: any) {
    this.cartService.checkoutUserCart(cart).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  // Disable checkout if the user cart is empty
}
// private loadDummyMovies(): void {
//   this.checkoutMoviesIds.forEach((id) => {
//     this.moviesService.getMovieById(id).subscribe({
//       next: (data: any) => {
//         const checkoutMovie = {
//           id: data.id,
//           Poster: data.Poster,
//           Title: data.Title,
//           totalSeats: 5,
//           totalPrice: 500,
//         };
//         this.movies.push(checkoutMovie);
//       },
//       error: (err) => {
//         console.log(err);
//       },
//     });
//   });
// }
