import { Component, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { NavbarComponent } from '../../Components/navbar/navbar.component';
import { FooterComponent } from '../../Components/footer/footer.component';
import { MoviesService } from '../../Services/movies.service';
import { HttpClientModule } from '@angular/common/http';
import { FilterComponent } from '../../Components/filter/filter.component';
import { MoviesCardsComponent } from '../../Components/movies-cards/movies-cards.component';
import { CarouselComponent } from '../../Components/carousel/carousel.component';
import { HeroComponent } from '../../Components/hero/hero.component';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
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
    CommonModule,
  ],
  providers: [MoviesService],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  pageChanged($event: number) {
    throw new Error('Method not implemented.');
  }
  p: number = 1;
  movies: any;
  selectedCatg = 'All';
  filterdMovies: any;
  constructor(private moviesService: MoviesService) {}
  ngOnInit(): void {
    this.moviesService.getAllMovies().subscribe({
      next: (data) => {
        this.movies = data;
        this.filterdMovies = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getSelectedCatg(evt: any) {
    this.selectedCatg = evt;
    console.log(this.selectedCatg, 'dataa');
    this.filterdMovies = [];

    for (let i = 0; i < this.movies?.length; i++) {
      if (this.selectedCatg === 'All' || this.selectedCatg === null) {
        this.filterdMovies.push(this.movies[i]);
      } else if (this.selectedCatg === this.movies[i].Genre) {
        this.filterdMovies.push(this.movies[i]);
      }
    }
  }
}
