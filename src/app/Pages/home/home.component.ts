import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../Components/navbar/navbar.component';
import { FooterComponent } from '../../Components/footer/footer.component';
import { MoviesService } from '../../Services/movies.service';
import { HttpClientModule } from '@angular/common/http';
import { FilterComponent } from '../../Components/filter/filter.component';
import { MoviesCardsComponent } from '../../Components/movies-cards/movies-cards.component';
import { CarouselComponent } from '../../Components/carousel/carousel.component';
import { HeroComponent } from '../../Components/hero/hero.component';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    NavbarComponent,
    FooterComponent,
    MoviesCardsComponent,
    CarouselComponent,
    HttpClientModule,
    FilterComponent,
    HeroComponent,
    MatPaginatorModule,
    NgxPaginationModule,
    CommonModule
  ],
  providers: [MoviesService],
})
export class HomeComponent implements OnInit {
pageChanged($event: number) {
throw new Error('Method not implemented.');
}
  p: number = 1;
  movies: any;
  constructor(private moviesService: MoviesService) {}
  ngOnInit(): void {
    this.moviesService.getAllMovies().subscribe({
      next: (data) => {
        this.movies = data;
        console.log(this.movies);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
