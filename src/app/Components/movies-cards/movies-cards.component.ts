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
  value: any;

  constructor(private router: Router) {}
  ngOnInit(): void {
    
    this.value = Number(this.movie?.Ratings[0].Value);
  }
  // routeMovie() {
  //   this.router.navigate(['movie/' + this.movie.id]);
  // }
  routeToSingleMovie(movie:any){
    this.router.navigate(['/movie',`${movie.Title}`])
      }
}
