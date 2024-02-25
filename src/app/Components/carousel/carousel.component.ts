import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { MoviesService } from '../../Services/movies.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule, HttpClientModule],
  providers: [MoviesService],
  templateUrl: './carousel.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  @Input() movies: any

  responsiveOptions: any[] | undefined;

  constructor(private MoviesService: MoviesService) { }

  ngOnInit() {


    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 4,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '600px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }


}
