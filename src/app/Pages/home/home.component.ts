import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../Components/navbar/navbar.component';
import { FooterComponent } from "../../Components/footer/footer.component";
import { MoviesService } from '../../Services/movies.service';
import { HttpClientModule } from '@angular/common/http';
import { FilterComponent } from '../../Components/filter/filter.component';
import { MoviesCardsComponent } from '../../Components/movies-cards/movies-cards.component';
import { CarouselComponent } from '../../Components/carousel/carousel.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    providers: [MoviesService],
    imports: [NavbarComponent, FooterComponent, MoviesCardsComponent, CarouselComponent, HttpClientModule, FilterComponent]
})
export class HomeComponent implements OnInit {
    movies: any
    constructor(private moviesService: MoviesService) { }
    ngOnInit(): void {
        this.moviesService.getAllMovies().subscribe({
            next: (data) => {
                this.movies = data
                console.log(this.movies)
            },
            error: (err) => { console.log(err) }
        })
    }

}
