import { Component, OnInit } from '@angular/core';
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
export class CheckoutComponent implements OnInit {
  // Data will be fetched from the query string + service
  paymentOption: string = '';
  movies: any[] = [];
  userCart: any = {};

  constructor(
    private moviesService: MoviesService,
    private cartService: CartService,
    private httpClient: HttpClient,
    private authService: AuthServiceService
  ) {}

  ngOnInit(): void {
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

    // PayPal API Integration
    render({
      id: '#myPaypalButtons',
      currency: 'USD',
      value: '100.00',
      onApprove: (details) => {
        alert('Transaction Done Successfully');
      },
    });
  }

  extractDataFromCart() {
    this.userCart.cart.forEach((item: any, index: number) => {
      // Extract data from each object
      const cinema = item.cinema;
      const date = item.date;
      const time = item.time;
      const movieName = item['movie-name'];
      const movieImg = item['movie-img'];
      const seats = item.seats;

      console.log(`Item ${index + 1}:`);
      console.log(`Cinema: ${cinema}`);
      console.log(`Date: ${date}`);
      console.log(`Time: ${time}`);
      console.log(`Movie Name: ${movieName}`);
      console.log(`Movie Image: ${movieImg}`);
      console.log(`Seats: ${seats}`);
      console.log('\n');
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
}

// Disable checkout if the user cart is empty
