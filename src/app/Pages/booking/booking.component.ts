import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FooterComponent } from '../../Components/footer/footer.component';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { CinemaSeatComponent } from '../../Components/cinema-seat/cinema-seat.component';
import { TableComponent } from '../../Components/table/table.component';
import { SeatStateService } from '../../Services/seat-state.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BookingServiceService } from '../../Services/booking-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-your-ticket',
  standalone: true,
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    FooterComponent,
    FormsModule,
    RatingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule,
    CinemaSeatComponent,
    TableComponent,
    HttpClientModule,
  ],
  providers: [HttpClient],
})
export class BookingComponent implements OnInit {
  cinemas = [];
  receivedMovieName: any = '';
  screens = ['IMAX', '3D', '2D', 'Regular'];
  time: {}[] = [];
  dates = [];

  movie: any = {};
  ngOnInit() {
    window.scrollTo(0, 0);

    this.bookingService
      .getCinemas({ movie: 'The Shawshank Redemption' })
      .subscribe((data) => {
        this.cinemas = data.cinemas;
      });
    //movieName from url "NOTEEEEE!!!!"
    this.bookingService
      .getMovieByName({ movieName: 'The Shawshank Redemption' })
      .subscribe((data) => {
        console.log(data);

        this.movie = data;
      });
  }
  ngOnChanges() {}
  getDates() {
    this.bookingService
      .getDates({
        movie: 'The Shawshank Redemption',
        cinema: this.choosenCinema,
      })
      .subscribe((data) => {
        this.dates = data;
      });
  }
  getTimes() {
    this.bookingService
      .getTimes({
        movie: 'The Shawshank Redemption',
        cinema: 'Imax',
        date: '12,Oct 2025',
      })
      .subscribe((data) => {
        for (let i = 0; i < data.length; i++) {
          this.time.push(data[i].time);
        }
      });
  }

  showOverlay: boolean = true;
  counter = 0;
  value = 4;
  totalPrice = 0;
  takenSeats: any[] = [];
  tickets: number = 0;
  rows: string = '';
  movie: any = {};
  choosenCinema: any = '';
  choosenScreen: any = '';
  choosenDateForDisplay: string = '';
  choosenDate: string = '';
  choosenTime: any = '';
  seatNum: any;
  receivedSeatToDelete: any;
  firstRow = [
    { num: 1, isTaken: false, row: 1 },
    { num: 2, isTaken: false, row: 1 },
    { num: 3, isTaken: false, row: 1 },
    { num: 4, isTaken: false, row: 1 },
    { num: 5, isTaken: false, row: 1 },
    { num: 6, isTaken: false, row: 1 },
    { num: 7, isTaken: false, row: 1 },
    { num: 8, isTaken: false, row: 1 },
    { num: 9, isTaken: false, row: 1 },
    { num: 10, isTaken: false, row: 1 },
    { num: 11, isTaken: false, row: 1 },
  ];
  secondRow = [
    { num: 1, isTaken: false, row: 2 },
    { num: 2, isTaken: false, row: 2 },
    { num: 3, isTaken: false, row: 2 },
    { num: 4, isTaken: false, row: 2 },
    { num: 5, isTaken: false, row: 2 },
    { num: 6, isTaken: false, row: 2 },
    { num: 7, isTaken: false, row: 2 },
    { num: 8, isTaken: false, row: 2 },
    { num: 9, isTaken: false, row: 2 },
    { num: 10, isTaken: false, row: 2 },
    { num: 11, isTaken: false, row: 2 },
  ];
  thirdRow = [
    { num: 1, isTaken: false, row: 3 },
    { num: 2, isTaken: false, row: 3 },
    { num: 3, isTaken: false, row: 3 },
    { num: 4, isTaken: false, row: 3 },
    { num: 5, isTaken: false, row: 3 },
    { num: 6, isTaken: false, row: 3 },
    { num: 7, isTaken: false, row: 3 },
    { num: 8, isTaken: false, row: 3 },
    { num: 9, isTaken: false, row: 3 },
    { num: 10, isTaken: false, row: 3 },
    { num: 11, isTaken: false, row: 3 },
    { num: 12, isTaken: false, row: 3 },
    { num: 13, isTaken: false, row: 3 },
  ];
  fourthRow = [
    { num: 1, isTaken: false, row: 4 },
    { num: 2, isTaken: false, row: 4 },
    { num: 3, isTaken: false, row: 4 },
    { num: 4, isTaken: false, row: 4 },
    { num: 5, isTaken: false, row: 4 },
    { num: 6, isTaken: false, row: 4 },
    { num: 7, isTaken: false, row: 4 },
    { num: 8, isTaken: false, row: 4 },
    { num: 9, isTaken: false, row: 4 },
    { num: 10, isTaken: false, row: 4 },
    { num: 11, isTaken: false, row: 4 },
    { num: 12, isTaken: false, row: 4 },
    { num: 13, isTaken: false, row: 4 },
  ];
  fifthRow = [
    { num: 1, isTaken: false, row: 5 },
    { num: 2, isTaken: false, row: 5 },
    { num: 3, isTaken: false, row: 5 },
    { num: 4, isTaken: false, row: 5 },
    { num: 5, isTaken: false, row: 5 },
    { num: 6, isTaken: false, row: 5 },
    { num: 7, isTaken: false, row: 5 },
    { num: 8, isTaken: false, row: 5 },
    { num: 9, isTaken: false, row: 5 },
    { num: 10, isTaken: false, row: 5 },
    { num: 11, isTaken: false, row: 5 },
    { num: 12, isTaken: false, row: 5 },
    { num: 13, isTaken: false, row: 5 },
    { num: 14, isTaken: false, row: 5 },
    { num: 15, isTaken: false, row: 5 },
    { num: 16, isTaken: false, row: 5 },
    { num: 17, isTaken: false, row: 5 },
  ];
  sixth = [
    { num: 1, isTaken: false, row: 6 },
    { num: 2, isTaken: false, row: 6 },
    { num: 3, isTaken: false, row: 6 },
    { num: 4, isTaken: false, row: 6 },
    { num: 5, isTaken: false, row: 6 },
    { num: 6, isTaken: false, row: 6 },
    { num: 7, isTaken: false, row: 6 },
    { num: 8, isTaken: false, row: 6 },
    { num: 9, isTaken: false, row: 6 },
    { num: 10, isTaken: false, row: 6 },
    { num: 11, isTaken: false, row: 6 },
    { num: 12, isTaken: false, row: 6 },
    { num: 13, isTaken: false, row: 6 },
    { num: 14, isTaken: false, row: 6 },
    { num: 15, isTaken: false, row: 6 },
    { num: 16, isTaken: false, row: 6 },
    { num: 17, isTaken: false, row: 6 },
  ];
  siventh = [
    { num: 1, isTaken: false, row: 7 },
    { num: 2, isTaken: false, row: 7 },
    { num: 3, isTaken: false, row: 7 },
    { num: 4, isTaken: false, row: 7 },
    { num: 5, isTaken: false, row: 7 },
    { num: 6, isTaken: false, row: 7 },
    { num: 7, isTaken: false, row: 7 },
    { num: 8, isTaken: false, row: 7 },
    { num: 9, isTaken: false, row: 7 },
    { num: 10, isTaken: false, row: 7 },
    { num: 11, isTaken: false, row: 7 },
    { num: 12, isTaken: false, row: 7 },
    { num: 13, isTaken: false, row: 7 },
    { num: 14, isTaken: false, row: 7 },
    { num: 15, isTaken: false, row: 7 },
    { num: 16, isTaken: false, row: 7 },
    { num: 17, isTaken: false, row: 7 },
  ];
  eight = [
    { num: 1, isTaken: false, row: 8 },
    { num: 2, isTaken: false, row: 8 },
    { num: 3, isTaken: false, row: 8 },
    { num: 4, isTaken: false, row: 8 },
    { num: 5, isTaken: false, row: 8 },
    { num: 6, isTaken: false, row: 8 },
    { num: 7, isTaken: false, row: 8 },
    { num: 8, isTaken: false, row: 8 },
    { num: 9, isTaken: false, row: 8 },
    { num: 10, isTaken: false, row: 8 },
    { num: 11, isTaken: false, row: 8 },
    { num: 12, isTaken: false, row: 8 },
    { num: 13, isTaken: false, row: 8 },
  ];

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.receivedMovieName = params['movie-name'];
      console.log(this.receivedMovieName);
    });

    this.bookingService
      .getCinemas({ movie: this.receivedMovieName })
      .subscribe((data) => {
        this.cinemas = data.cinemas;
      });

    this.bookingService
      .getMovieByName({ movie: this.receivedMovieName })
      .subscribe((data) => {
        this.movie = data;
      });
  }

  ngOnChanges() {}
  getDates() {
    this.bookingService
      .getDates({
        movie: this.receivedMovieName,
        cinema: this.choosenCinema,
      })
      .subscribe((data) => {
        this.dates = data;
      });
  }
  getTimes() {
    this.bookingService
      .getTimes({
        movie: this.receivedMovieName,
        cinema: this.choosenCinema,
        date: this.choosenDate,
      })
      .subscribe((data) => {
        for (let i = 0; i < data.length; i++) {
          this.time.push(data[i].time);
        }
      });
  }

  constructor(
    private seatState: SeatStateService,
    public http: HttpClient,
    public bookingService: BookingServiceService,
    private route: ActivatedRoute
  ) {}

  onInputChange() {
    this.showOverlay = false;
    this.bookingService
      .getReservedSeats({
        movie: this.receivedMovieName,
        cinema: this.choosenCinema,
        date: this.choosenDate,
        time: this.choosenTime,
      })
      .subscribe((data) => {
         JSON.stringify(data);
      });
  }


  choosenCinema: any = '';
  choosenScreen: any = '';
  choosenDateForDisplay: string = '';
  choosenDate: string = '';
  choosenTime: any = '';
  seatNum: any;


  reserveSeat(eve: any, seat: any) {
    if (!seat.isTaken) {
      seat.isTaken = true;
      this.seatState.updateSeatColor(seat.row, seat.num, 'red');
      this.takenSeats.push(seat);
      this.totalPrice += 100;
      this.tickets = this.tickets + 1;
    } else {
      seat.isTaken = false;
      this.seatState.updateSeatColor(seat.row, seat.num, 'gray');
      this.takenSeats = this.takenSeats.filter((s) => {
        if (s.num == seat.num && s.row == seat.row) {
        } else {
          return s;
        }
      });
      this.totalPrice -= 100;
      this.tickets = this.tickets - 1;
    }
  }

  receiveSeatToDelete(eve: any) {
    this.receivedSeatToDelete = eve.seat;
    this.takenSeats = this.takenSeats.filter(
      (seat) => seat != this.receivedSeatToDelete
    );
    this.seatState.updateSeatColor(
      this.receivedSeatToDelete.row,
      this.receivedSeatToDelete.num,
      'gray'
    );
    this.totalPrice -= 100;
  }
  objToSend :any;

  sendDataToBackend() {
    this.objToSend= {
      cinema: this.choosenCinema,
      date: this.choosenDate,
      movie: this.movie.Title,
      time: this.choosenTime,
      reserve: this.takenSeats,
    };
    this.bookingService.addToCart(this.objToSend).subscribe((data) => {
      console.log(data);
      console.log(this.objToSend);
    });
    console.log(this.objToSend);
    
  }
}

// http://localhost:2024/reserve/add/seats url to send
// {
//   "cinema": "Imax",
//   "date": "12,Oct 2025",
//   "time": 12,
//   "movie": "The Shawshank Redemption",
//   "reserve": [
//       {
//           "num:": 1,
//           "row": 5
//       },
//       {
//           "num:": 3,
//           "row": 2
//       }
//   ]
// }
