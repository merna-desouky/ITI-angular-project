import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MoviesService } from '../../Services/movies.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../Services/cart.service';
import { render } from 'creditcardpayments/creditCardPayments';

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormsModule,
} from '@angular/forms';
import { AuthServiceService } from '../../Services/auth-service.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [HttpClientModule, RouterModule, CommonModule, FormsModule],
  providers: [MoviesService, CartService, AuthServiceService],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit, OnChanges {
  // Data will be fetched from the query string + service
  paymentOption: string = '';
  movies: any[] = [];
  userCart: any = {};

  movieCinema: string = '';
  movieDate: string = '';
  movieTime: string = '';
  movieName: string = '';
  movieImg: string = '';
  movieSeats: number[] = [];
  movieRows: number[] = [];

  constructor(
    private moviesService: MoviesService,
    private cartService: CartService,
    private httpClient: HttpClient,
    private authService: AuthServiceService
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);

    if (!this.authService.isLoggedIn()) {
      window.location.href = '/sign-in';
    }

    this.cartService.getUserCart().subscribe({
      next: (data: any) => {
        console.log(data);
        this.userCart = data;

        if (this.userCart.cart.length !== 0) {
          this.extractDataFromCart();
        }
      },
      error: (err) => {
        console.log(err);
      },
    });

    setTimeout(() => {
      this.cartService.getUserCart().subscribe({
        next: (data: any) => {
          console.log(data);
          this.userCart = data;

          if (this.userCart.cart.length !== 0) {
            this.extractDataFromCart();
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
    }, 500);

    // PayPal API Integration
    render({
      id: '#myPaypalButtons',
      currency: 'USD',
      value: '100.00',
      onApprove: (details: any) => {
        alert('Transaction Done Successfully');
      },
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.extractDataFromCart();
  }

  extractDataFromCart() {
    this.userCart.cart.forEach((item: any, index: number) => {
      this.movieCinema = item.cinema;
      this.movieDate = item.date;
      this.movieTime = item.time;
      this.movieName = item.movieName;
      this.movieImg = item.movieImg;
      this.movieSeats = item.seats.map((seat: any) => seat.num);
      this.movieRows = item.seats.map((seat: any) => seat.row);

      console.log(this.movieSeats, this.movieRows);
    });
  }

  removeMovie(movie: any) {
    this.cartService.removeMovieFromCart({ deletedMovie: movie }).subscribe({
      next: (data: any) => {
        console.log(data);
        console.log(`Movie removed from cart + ${movie['cinema']}`);

        this.userCart.cart = this.userCart.cart.filter(
          (item: any) => item !== movie
        );
        this.extractDataFromCart();
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  checkoutUserCart(cart: any) {
    this.cartService.checkoutUserCart(cart).subscribe({
      next: (data: any) => {
        console.log(data);

        this.userCart.cart = [];
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.extractDataFromCart();
  }

  disableCheckoutButton() {
    if (this.userCart.cart.length === 0) {
      return true;
    }
    return false;
  }
}
