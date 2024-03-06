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
  constructor(private profileService: ProfileService) {

  }
  ngOnInit(): void {
    this.profileService.getUser().subscribe({
      next: (data) => {
        this.user = data
        console.log(this.user.favourite, "hey")
      },
      error: (err) => {
        console.log(err)
      }
    }
    )
  }

}
