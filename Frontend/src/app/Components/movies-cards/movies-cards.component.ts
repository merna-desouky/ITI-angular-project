// import { HttpClientModule } from '@angular/common/http';
// import { MoviesService } from '../../Services/movies.service';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-movies-cards',
  standalone: true,
  imports: [
    ButtonModule,
    CarouselModule,
    FormsModule,
    RatingModule,
    RouterLink,
  ],
  templateUrl: './movies-cards.component.html',
  styleUrl: './movies-cards.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class MoviesCardsComponent implements OnInit {
  @Input() movie: any;
  @Input() purchased: any;
  value: any;
  purchasedArr: any[] = [];
  constructor(private router: Router) {}
  ngOnInit(): void {
    if (this.movie) {
      this.value = Number(this.movie.Ratings[0].Value);
    }
  }

  routeToSingleMovie(movie: any) {
    // console.log(this.purchased)
    this.router.navigate(['/movie', `${movie.Title}`]);
  }

  routeToSingleMoviePurchased(purchased: any) {
    this.router.navigate(['/movie', `${purchased['movie-name']}`]);
  }
}
