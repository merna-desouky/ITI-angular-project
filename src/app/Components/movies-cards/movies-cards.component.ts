import { HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MoviesService } from '../../Services/movies.service';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms'; import { CarouselModule } from 'primeng/carousel';



@Component({
  selector: 'app-movies-cards',
  standalone: true,
  imports: [ButtonModule, CarouselModule, FormsModule, RatingModule],
  templateUrl: './movies-cards.component.html',
  styleUrl: './movies-cards.component.scss',
  encapsulation: ViewEncapsulation.None,

})
export class MoviesCardsComponent implements OnInit {
  value = 3

  @Input() movie: any
  constructor() {
  }
  ngOnInit(): void {
    console.log(this.movie)
  }
}
