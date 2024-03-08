import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { MoviesService } from '../../Services/movies.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule, HttpClientModule, RouterModule],
  providers: [MoviesService],
  templateUrl: './carousel.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  @Input() movies: any;
  @Input() sliderMovies: any;
  responsiveOptions: any[] | undefined;

  constructor(private MoviesService: MoviesService,private route:ActivatedRoute,private router:Router) {}

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 4,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '600px',
        numVisible: 1,
        numScroll: 1,
      },
    ];


  }
  routeToSingleMovie(movie:any){
this.router.navigate(['/movie',`${movie.Title}`])
  }
}
