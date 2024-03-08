import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../Services/profile.service';
import { HttpClientModule } from '@angular/common/http';
import { MoviesCardsComponent } from '../../Components/movies-cards/movies-cards.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [HttpClientModule, MoviesCardsComponent],
  providers: [ProfileService],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'

})
export class ProfileComponent implements OnInit {
  user: any
  displayedMovieNames: any[] = []
  displayedMovieNamesForUser: any[] = []
  constructor(private profileService: ProfileService) {

  }
  ngOnInit(): void {
    this.profileService.getUser().subscribe({
      next: (data) => {
        this.user = data

        //check if film duplicate or not
        for (let i = 0; i < this.user.purchased.length; i++) {
          if (!this.displayedMovieNames.includes(this.user.purchased[i]['movie-name'])) {
            this.displayedMovieNames.push(this.user.purchased[i]['movie-name']);
            this.displayedMovieNamesForUser.push(this.user.purchased[i]);
          }

        }

      },
      error: (err) => {
        console.log(err)
      }
    }
    )

  }

}
