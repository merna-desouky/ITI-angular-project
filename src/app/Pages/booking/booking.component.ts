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
  screens = ['IMAX', '3D', '2D', 'Regular'];
  time: {}[] = [];
  dates = [];
  movie: any = {};
  ngOnInit() {
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
        this.dates=data;
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
  takenSeats: {}[] = [];
  tickets: number = 0;
  rows: string = '';
  constructor(
    private seatState: SeatStateService,
    public http: HttpClient,
    public bookingService: BookingServiceService
  ) {}

  firstRow = [
    { num: 1, isTaken: false, row: 1 },
    { num: 2, isTaken: false, row: 1 },
    { num: 3, isTaken: false, row: 1 },
    { num: 4, isTaken: true, row: 1 },
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
    { num: 7, isTaken: true, row: 2 },
    { num: 8, isTaken: false, row: 2 },
    { num: 9, isTaken: false, row: 2 },
    { num: 10, isTaken: true, row: 2 },
    { num: 11, isTaken: false, row: 2 },
  ];
  thirdRow = [
    { num: 1, isTaken: true, row: 3 },
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
    { num: 13, isTaken: true, row: 3 },
  ];
  fourthRow = [
    { num: 1, isTaken: true, row: 4 },
    { num: 2, isTaken: true, row: 4 },
    { num: 3, isTaken: true, row: 4 },
    { num: 4, isTaken: true, row: 4 },
    { num: 5, isTaken: true, row: 4 },
    { num: 6, isTaken: true, row: 4 },
    { num: 7, isTaken: true, row: 4 },
    { num: 8, isTaken: true, row: 4 },
    { num: 9, isTaken: true, row: 4 },
    { num: 10, isTaken: true, row: 4 },
    { num: 11, isTaken: true, row: 4 },
    { num: 12, isTaken: true, row: 4 },
    { num: 13, isTaken: true, row: 4 },
  ];
  fifthRow = [
    { num: 1, isTaken: true, row: 5 },
    { num: 2, isTaken: true, row: 5 },
    { num: 3, isTaken: true, row: 5 },
    { num: 4, isTaken: true, row: 5 },
    { num: 5, isTaken: true, row: 5 },
    { num: 6, isTaken: true, row: 5 },
    { num: 7, isTaken: true, row: 5 },
    { num: 8, isTaken: true, row: 5 },
    { num: 9, isTaken: true, row: 5 },
    { num: 10, isTaken: true, row: 5 },
    { num: 11, isTaken: true, row: 5 },
    { num: 12, isTaken: true, row: 5 },
    { num: 13, isTaken: true, row: 5 },
    { num: 14, isTaken: true, row: 5 },
    { num: 15, isTaken: true, row: 5 },
    { num: 16, isTaken: true, row: 5 },
    { num: 17, isTaken: true, row: 5 },
  ];
  sixth = [
    { num: 1, isTaken: true, row: 6 },
    { num: 2, isTaken: true, row: 6 },
    { num: 3, isTaken: true, row: 6 },
    { num: 4, isTaken: true, row: 6 },
    { num: 5, isTaken: true, row: 6 },
    { num: 6, isTaken: true, row: 6 },
    { num: 7, isTaken: true, row: 6 },
    { num: 8, isTaken: true, row: 6 },
    { num: 9, isTaken: true, row: 6 },
    { num: 10, isTaken: true, row: 6 },
    { num: 11, isTaken: true, row: 6 },
    { num: 12, isTaken: true, row: 6 },
    { num: 13, isTaken: true, row: 6 },
    { num: 14, isTaken: true, row: 6 },
    { num: 15, isTaken: true, row: 6 },
    { num: 16, isTaken: true, row: 6 },
    { num: 17, isTaken: true, row: 6 },
  ];
  siventh = [
    { num: 1, isTaken: true, row: 7 },
    { num: 2, isTaken: true, row: 7 },
    { num: 3, isTaken: true, row: 7 },
    { num: 4, isTaken: true, row: 7 },
    { num: 5, isTaken: true, row: 7 },
    { num: 6, isTaken: true, row: 7 },
    { num: 7, isTaken: true, row: 7 },
    { num: 8, isTaken: true, row: 7 },
    { num: 9, isTaken: true, row: 7 },
    { num: 10, isTaken: true, row: 7 },
    { num: 11, isTaken: true, row: 7 },
    { num: 12, isTaken: true, row: 7 },
    { num: 13, isTaken: true, row: 7 },
    { num: 14, isTaken: true, row: 7 },
    { num: 15, isTaken: true, row: 7 },
    { num: 16, isTaken: true, row: 7 },
    { num: 17, isTaken: true, row: 7 },
  ];
  eight = [
    { num: 1, isTaken: true, row: 8 },
    { num: 2, isTaken: true, row: 8 },
    { num: 3, isTaken: true, row: 8 },
    { num: 4, isTaken: true, row: 8 },
    { num: 5, isTaken: true, row: 8 },
    { num: 6, isTaken: true, row: 8 },
    { num: 7, isTaken: true, row: 8 },
    { num: 8, isTaken: true, row: 8 },
    { num: 9, isTaken: true, row: 8 },
    { num: 10, isTaken: true, row: 8 },
    { num: 11, isTaken: true, row: 8 },
    { num: 12, isTaken: true, row: 8 },
    { num: 13, isTaken: true, row: 8 },
  ];
  onInputChange() {
    this.showOverlay = false;
    this.bookingService
      .getReservedSeats({
        movie: 'The Shawshank Redemption',
        cinema: 'Imax',
        date: '12,Oct 2025',
        time: 12,
      })
      .subscribe((data) => {
        console.log('Ana seats' + JSON.stringify(data));
      });
  }

  choosenCinema: any = '';
  choosenScreen: any = '';
  choosenDateForDisplay: string = '';
  choosenDate: string = '';
  choosenTime: any = '';
  seatNum: any;
  

  reserveSeat(eve: any, seat: any) {
    this.seatState.updateSeatColor(seat.row, seat.num, 'red');
    this.takenSeats.push(seat);
    this.totalPrice += 100;
    this.tickets = this.tickets + 1;
    this.rows += '' + seat.row + ',';
  }
  receivedSeatToDelete: any;
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
  objToSend = {
    cinema: this.choosenCinema,
    date: this.choosenDate,
    movie: this.movie.Title,
    time: this.choosenTime,
    reserve: [
      { num: 5, row: 8 },
      { num: 3, row: 6 },
    ],
  };

  sendDataToBackend(obj: any) {
    this.bookingService.addToCart(obj).subscribe((data) => {
      console.log(data);
      
    });
  }
}
