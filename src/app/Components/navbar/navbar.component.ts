

import { Component, ElementRef, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { MoviesService } from '../../Services/movies.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';




@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, FormsModule, HttpClientModule, RouterLink, CommonModule, SidebarModule,],
  providers: [MoviesService],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None,

})

export class NavbarComponent implements OnInit {
  movies: any;
  item: any;
  resultMovies: any[] = [];
  showResults: boolean = false;
  myInput: any
  sidebarVisible: boolean = false;
  @ViewChild('targetDiv', { static: false }) targetDivRef!: ElementRef;

  constructor(private moviesService: MoviesService) { }


  ngOnInit(): void {
    this.moviesService.getAllMovies().subscribe({
      next: (data) => {
        this.movies = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  result(evt: any) {
    this.resultMovies = [];
    this.showResults = true;
    if (this.item) {
      for (let i = 0; i < this.movies?.length; i++) {
        if (this.movies[i].Title.toLowerCase().startsWith(this.item.toLowerCase())) {
          this.resultMovies.push(this.movies[i]);
          console.log(this.resultMovies, "sssss");
        }
      }
    }
  }

  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: Event) {
    console.log(this.targetDivRef.nativeElement)
    if (
      this.targetDivRef &&
      this.targetDivRef.nativeElement &&
      !this.targetDivRef.nativeElement.contains(event.target as Node)
    ) {
      this.showResults = false;
      // this.resultMovies = []
      this.item = ""
    }
  }




}

